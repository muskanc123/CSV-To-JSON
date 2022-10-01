const express = require('express');
const bodyParser = require('body-parser');
const fileupload = require("express-fileupload");
const csv = require('csvtojson');
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(fileupload({
  useTempFiles: true
}));
app.use(bodyParser.urlencoded({
  extended: true
}));
// app.use(bodyParser.json({ limit: '50mb' }));
app.post('/upload', async (req, res) => {
  console.log(req.files);
  let jsonArray = [];
  try {
    if (req.files && req.files.csvFile) {
      console.log("yes")
      jsonArray = await csv().fromFile(req.files.csvFile.tempFilePath);
    }
    res.status(200).json(jsonArray);  
  } catch (err) {
    console.log(err);
    res.status(400).json(err); 
  }
});
app.get('*', (req, res) => {
  res.status(404).json("Endpoint not found!");
});

app.listen(3000);
