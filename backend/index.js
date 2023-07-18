require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT
const{rentalFormValidation} = require('./validations/formValidations')
const ServicesModel = require('./models/servicesModel')
const database = require('./database/connection')
const bodyParser = require('body-parser')
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({     
    extended: true
  }));
app.use(bodyParser.json());
app.get("/", (req,res)=>
{  
     res.send("Welcome to the backend of Eveeio")
})
app.post("/rentalform", async (req,res)=>
{
    const { error } = rentalFormValidation(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    try{
         const rentalform = await ServicesModel.create(req.body)
         return res.status(200).json({
            success:true,
            data:rentalform
         })
    }
    catch(error)
    {
        return res.status(400).json({
            success: false,
            message: error.message,
          });
    }
})
app.listen(port,()=>{
    database.databaseConnection();
    console.log(`Server is running at ${port}`)
})

