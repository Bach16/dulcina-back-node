const { Router } = require('express');


const router = Router();

router.get("/",(req,res) =>{
    
    try {
        res.send("hello world")
        
    } catch (error) {
        res.send(`error:${error}`)
        
    }
})

module.exports = router;