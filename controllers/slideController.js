const Slide=require("../models/Slide")

const createSlide =async (req, res) => {
    console.log(req.body)
    //let data = req.file.location
    let data =req.file.location
    const slide = new Slide({
        data:data,
        ...req.body
    })
    //console.log(slide)
    try{
        await slide.save()
        res.status(201).send(slide)
    }catch(e){
        res.status(400).send(e)
    }

}

module.exports =  {
    createSlide
};