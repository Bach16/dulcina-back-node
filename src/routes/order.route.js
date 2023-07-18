const express = require('express');


const orderRouter = express.Router()

orderRouter.get("/", async (req,res) => {
    try {
        res.status(200).send("orders")
    } catch (error) {
        res.status(400).send({error:error})
    }
}) 

orderRouter.post("/", async (req,res) => {
    try {
        res.status(200).send("order")
    } catch (error) {
        res.status(400).send({error:error})
    }
}) 

module.exports = orderRouter;