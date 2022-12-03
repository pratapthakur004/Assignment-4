const express=require('express');
const {SaveProduct,getProductById,getAllProduct,deleteProduct,updateProduct}=require('./controllers/productsController')
const router=express.Router();
//home
router.get("/",(req,res)=>{
     res.render('home')
})
//add product
router.get("/addProduct",(req,res)=>{
     res.render('addProduct')
})
// edit product
router.get("/editProduct/:id",(req,res)=>{
     res.render('editProduct')
})

router.post("/postaddproduct",SaveProduct);
router.get("/getallproducts",getAllProduct);
router.get("/getproductbyid/:id",getProductById);
router.get("/deleteproduct/:id",deleteProduct);
router.post("/editproduct/:id",updateProduct)

module.exports=router;