const express = require('express');
const router = express.Router();
const Model = require('../module/module');

// Post Method
router.post('/createPost',async (req,res)=>{
    const newPost = new Model({
        moviename : req.body.moviename,
        year : req.body.year,
        about : req.body.about

    })
    try{
        const result = await newPost.save();
        res.status(200).json(result)
    }catch(error){
        res.status(400).json({message : error.message})
    }
})

//Get
// router.get('/getAllPost',(req,res)=>{
//     res.send ("All Post Data:-")
// })
//Get
router.get('/getPost/:id',async (req,res)=>{
    try{
        const id = req.params.id
        const result = await Model.findById(id);
        res.status(200).json(result)
    }catch(error){
        res.status(400).json({message : error.message})
    }
    
})

//Get Method

router.get('/getAllPost',async (req,res)=>{
    try{
        const result = await Model.find();
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({message : error.message})
    }
})


//patch
router.patch('/editPost/:id',async (req,res)=>{
    try{
        const id = req.params.id
        const newData = req.body;
        const options = {new :true}
        const result = await Model.findByIdAndUpdate(id,newData,options);
        res.send(result)
    }catch(error){
        res.status(400).json({message : error.message})
    }
})

//  Delete
router.delete('/deletePost/:id',async (req,res)=>{
    try{
        const id = req.params.id
        const result = await Model.findByIdAndDelete(id);
        res.send('Delete post with title ${result.title}}')
    }catch(error){
        res.status(500).json({message : error.message})
    }
})


module.exports = router;