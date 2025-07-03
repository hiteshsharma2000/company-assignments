const express = require('express');
const multer = require('multer');
const XLSX = require('xlsx');
const SeatData = require('../Models/UplaodSchema');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('file'), async (req, res) => {
  try {
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);

    const formattedData = data.map(item => ({
      id: item.ID || item.id,
      seatNo: item["Seat No"] || item.seatNo,
    }));

    await SeatData.insertMany(formattedData);
    res.json({ message: 'Data uploaded successfully' });
  } catch (err) {
    res.json({ message: 'Error uploading data', error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await SeatData.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching data' });
  }
});

module.exports = router;
