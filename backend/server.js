require("dotenv").config();
const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser');
// var apiRouter = require("./src/routes/api.routes");
const app = express();
global.__basedir = __dirname;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
//To allow cross-origin requests
app.use(cors());
app.use("/api/", (req,res)=>{
    res.send("Cool you can defined your route here")
});

// for parsing multipart/form-data
// app.use(upload.array());
app.use(express.static('public'));
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

