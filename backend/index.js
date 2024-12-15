const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors');
const productRouter = require('./routers/product-Router');


//body parser
app.use(cors());
dotenv.config();
app.use(express.json());
app.use('/api/auth',productRouter);


const PORT = process.env.PORT || 8081;

const URI = process.env.MONGODB_URI;

try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("error:",error);
    
}
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

