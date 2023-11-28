//setting up express and router
const express = require("express")
const router = new express.Router()
const {createSlide} = require("../controllers/slideController")
const upload = require("../middleware/upload")

//Home page/Docs
router.post('/',upload.single('file'),createSlide)

module.exports=router