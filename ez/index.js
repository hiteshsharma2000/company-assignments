const express = require('express');
const fileUpload = require('express-fileupload');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();


dotenv.config();
app.use(express.json());
app.use(fileUpload());

mongoose.connect(process.env.MONGO_URL).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
  email: String,
  passwordHash: String,
  verified: Boolean,
});

const fileSchema = new mongoose.Schema({
  id: String,
  filename: String,
});

const User = mongoose.model('User', userSchema);
const File = mongoose.model('File', fileSchema);


const OPS_EMAIL = 'ops@example.com';
const OPS_PASSWORD_HASH = bcrypt.hashSync('admin123', 10);
const FERNET_KEY = crypto.createHash('sha256').update('myfernetkey').digest();

function generateToken(data) {
  return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '30m' });
}
function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    return null;
  }
}
function encrypt(text) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', FERNET_KEY, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + ':' + encrypted;
}
function decrypt(encrypted) {
  const [ivHex, data] = encrypted.split(':');
  const iv = Buffer.from(ivHex, 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', FERNET_KEY, iv);
  let decrypted = decipher.update(data, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}


app.get("/",(req,res)=>{
  try{
    res.send({msg:"welcome to home page"})
  }
  catch{
    res.send({msg:"something went wrong"})
  }
});
app.post('/ops/login', (req, res) => {
  const { email, password } = req.body;
  if (email !== OPS_EMAIL || !bcrypt.compareSync(password, OPS_PASSWORD_HASH)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = generateToken({ email, role: 'ops' });
  res.json({ access_token: token });
});

app.post('/ops/upload', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded || decoded.role !== 'ops') {
    return res.status(403).json({ message: 'Forbidden' });
  }
  const file = req.files?.file;
  if (!file || !/(.pptx|.docx|.xlsx)$/.test(file.name)) {
    return res.status(400).json({ message: 'Invalid file type' });
  }
  await file.mv(`./uploads/${file.name}`);
  await File.create({ id: Date.now().toString(), filename: file.name });
  res.json({ message: 'File uploaded' });
});

app.post('/client/signup', async (req, res) => {
  const { email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: 'User exists' });
  const passwordHash = bcrypt.hashSync(password, 10);
  await User.create({ email, passwordHash, verified: false });
  const token = encrypt('1');
  res.json({ message: 'Check your email to verify', link: `/client/verify-email?token=${token}` });
});

app.get('/client/verify-email', async (req, res) => {
  try {
    const id = decrypt(req.query.token);
    res.json({ message: `Email verified for assignment ${id}` });
  } catch {
    res.status(400).json({ message: 'Invalid token' });
  }
});

app.post('/client/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = generateToken({ email, role: 'client' });
  res.json({ access_token: token });
});

app.get('/client/files', async (req, res) => {
  const allFiles = await File.find();
  res.json(allFiles.map(f => f.filename));
});

app.get('/client/download/:id', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded || decoded.role !== 'client') {
    return res.status(403).json({ message: 'Forbidden' });
  }
  const secureToken = encrypt(req.params.id);
  res.json({ 'download-link': `/client/secure-download/${secureToken}`, message: 'success' });
});

app.get('/client/secure-download/:token', async (req, res) => {
  try {
    const id = decrypt(req.params.token);
    const file = await File.findOne({ id });
    if (!file) return res.status(404).json({ message: 'File not found' });
    res.json({ filename: file.filename, message: 'Download ready' });
  } catch {
    res.status(400).json({ message: 'Invalid or expired link' });
  }
});


app.listen(3000, () => console.log('Server running on port 3000'));


