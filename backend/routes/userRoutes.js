const router = require("express").Router()
const User = require("../models/User")

router.get("/getusers",async(req,res)=>{
    try{
        const user = await User.find();
        res.status(200).send(user)
    } catch(err){
        res.status(500).json(err)
    }
})

router.get("/getuser/:id",async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).send(user)
    } catch(err){
        res.status(500).json(err)
    }
})

router.post('/createUser', async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).send(savedUser)
    } catch (err) {
        res.status(500).send(err);
    }

})

router.delete("/deleteuser/:id", async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).send("User deletd successfully")
    } catch (err) {
        res.status(500).json(err)
    }

})

router.patch("/updateUser/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).send(updatedUser);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router