const express=require('express');
const router = new express.Router();

const empModel = require('../model/employeedetails');
router.use(express.json());
router.use(express.urlencoded({extended:true}));

// GET OPERATION
router.get('/', async (req, res) => {
    try {
        const data = await empModel.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send('Data not found');
    }

})
// POST OPERATION

router.post('/addnew',async (req,res)=>{
    try {
        const data = await empModel.create(req.body);

        res.status(200).send('Post successful');


    } catch (error) {
        res.status(400).send('Post Unsuccessful');
    }
});

// put operation
router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await empModel.findByIdAndUpdate(id,req.body);
        res.status(200).send('Update successful');

    } catch (error) {
        res.status(404).send('Update unsuccessful');

    }
});

//delete op

router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await empModel.findByIdAndDelete(id,req.body);
        res.status(200).send('delete successful');

    } catch (error) {
        res.status(404).send('delete unsuccessful');

    }
});

module.exports=router;