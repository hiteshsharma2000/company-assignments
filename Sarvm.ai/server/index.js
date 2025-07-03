const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');

const uploadRoute = require('./Routes/FileRoute');

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

app.use('/api/upload', uploadRoute);

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
