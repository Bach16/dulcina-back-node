const express = require('express');

const { Product } = require("../db")

const mockProducts = [
    {
        name: "producto 1",
        price: 30,
    },
    {
        name: "producto 2",
        price: 40,
    },
    {
        name: "producto 3",
        price: 50,
    }
]


const productRouter = express.Router()

productRouter.get("/", async (req,res) => {
    try {

        const getProductsFromDB = async() => {
            const data = await Product.findAll({
                /* include:{
                    model: Category,            
                } */
            })
        
        
            return data
        }
        const response = await getProductsFromDB()
        console.log(response);
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send({error:error})
    }
}) 



productRouter.get("/:id", async (req,res) => {
    try {
        const {id} = req.params
        const getProductByIdFromDB  = async(id) => {
            const product = await Product.findByPk(id,{
                
            })
            return product
        }
        const response = await getProductByIdFromDB(id)
        if (response) res.status(200).send(response)
        else throw new Error("Product not found")
    } catch (error) {
        res.status(400).send({error:error})
    }
}) 

productRouter.post("/bulk", async (req,res) => {
    try {
        console.log("asd");
        const PostProductsDB = async(data) => {
            Product.bulkCreate(data)
        }
        PostProductsDB(mockProducts)
        res.status(200).send("product")
    } catch (error) {
        res.status(400).send({error:error})
    }
}) 

module.exports = productRouter;