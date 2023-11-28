require("dotenv").config()

const express = require('express')
const bodyparser = require('body-parser')
const app = express();
const mongoose = require('mongoose')
const slideRouter=require("./routes/slide")

//Connecting mongoose with mongodb database

mongoose.connect(process.env.MONGODB_URL, {
 useNewUrlParser: true,
})
//app.use(express.json())
//app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use(slideRouter)





// app.post('/upload', upload.single('file'), async function (req, res, next) {

//     res.send('Successfully uploaded ' + req.file.location + ' location!')

// })

app.listen(3000);
