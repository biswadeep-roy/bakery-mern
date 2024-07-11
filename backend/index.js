const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Stripe=require("stripe")

const app = express(); 
app.use(cors()); 
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;
const contactSchema = mongoose.Schema({
  name: String, 
  email: String,
  message: String,
}); 

const contactModel = mongoose.model("contact", contactSchema);

// MongoDB connection
console.log(process.env.MONGODB_URL);
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to Database"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the server on MongoDB connection error
  });

// Schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

const userModel = mongoose.model("user", userSchema);

// API
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Sign up
app.post("/signup", async (req, res) => {
  const { email } = req.body;

  try {
    const result = await userModel.findOne({ email: email });

    if (result) {
      res.status(400).send({ message: "Email id is already registered",alert:false });
    } else {
      const data = userModel(req.body);
      const save = await data.save();
      res.send({ message: "Successfully signed up",alert:true });
    }
  } catch (error) {
    console.error("Sign up error:", error);
    res.status(500).send({ message: "Server error" });
  }
});

app.post("/submitContactForm", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const data = contactModel({ name, email, message });
    const savedData = await data.save();
    res.status(201).json({ message: "Form submitted successfully", data: savedData });
  } catch (error) {
    console.error("Contact form submission error:", error);
    res.status(500).json({ message: "Server error" });
  }
});


//api login 
app.post("/login",async (req,res)=>{
  const {email} = req.body
  try {
    const result = await userModel.findOne({ email: email }).exec();

    if (result) {
      const dataSend={
        _id: result._id,   
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      }
      console.log(dataSend)
      res.send({ message: "Login successfully", alert: true , data: dataSend});
    } else {
      res.status(400).send({ message: "Email not found, Please Sign up!", alert: false });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send({ message: "Server error" });
  }
});

//product section
const schemaProduct=mongoose.Schema({

  name : String,
  category:String,
  image:String,
  price:String,
  description:String
})
const productModel=mongoose.model("product",schemaProduct)

//save products in mongodb api
app.post("/uploadProduct",async(req,res)=>{
 
  const data=await productModel(req.body) 
  const dataSave=await data.save()
  res.send({message:"Successfully uploaded!"})
})


//
app.get("/product",async (req,res)=>{
  const data= await productModel.find({})
  res.send(JSON.stringify(data))
})


//***payment gateway***
console.log(process.env.STRIPE_SECRET_KEY)
const stripe  = new Stripe(process.env.STRIPE_SECRET_KEY)
app.post("/create-checkout-session",async(req,res)=>{

     try{
      const params = {
          submit_type : 'pay',
          mode : "payment",
          payment_method_types : ['card'],
          billing_address_collection : "auto",
          shipping_options : [{shipping_rate : "shr_1NssftSI1DuPTnEumuf8p5YM"}],

          line_items : req.body.map((item)=>{
            return{
              price_data : {
                currency : "inr",
                product_data : {
                  name : item.name,
                },
                unit_amount : item.price * 100,
              },
              adjustable_quantity : {
                enabled : true,
                minimum : 1,
              },
              quantity : item.qty
            }
          }),

          success_url : `${process.env.FRONTEND_URL}/success`,
          cancel_url : `${process.env.FRONTEND_URL}/cancel`,

      }

      
      const session = await stripe.checkout.sessions.create(params)
      res.status(200).json(session.id)
     }
     catch (err){
        res.status(err.statusCode || 500).json(err.message)
     }

})


app.listen(PORT, () =>console.log("Server is running at port : " + PORT));
