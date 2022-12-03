const proModel=require('../model/product');
// add new product
function SaveProduct(req,res){
    const bodyData=req.body;
    console.log(bodyData)
    let ins=new proModel(bodyData);
    console.log(ins)
// saving data into database
   ins.save((err)=>{
         if(err) res.send("Something went wrong or Already exists")
         else {
            res.render('addproduct')
        }
    })
}
// getting product id
async function getProductById(req,res){
    let proId=req.params.id;
    // finding product by id
    let product=await proModel.findById(proId);
    if(!product){
       res.status(404).send("Product with id not found");
    }
    res.render('editProduct', product)
}
// getting all products
function getAllProduct(req,res){
    // finding data
    proModel.find({},(err,data)=>{
        if(err) { res.send("Something went wrong in get all product")}
        else {
            res.render("showProduct.ejs", {productdata: data.map(data =>data.toJSON())})
        }
    })
}
// delete product by using id
function deleteProduct(req,res){
     let pid=req.params.id;
     // deleting data
     proModel.deleteOne({_id:pid},(err)=>{
        if(err){ res.send("Something wrong")}
        else {
            res.status(200).send("Product Deleted");
        }
     })
}
// update product by id
function updateProduct(req,res){
    let pid=req.params.id;
    let formData=req.body;
    // updating data
    proModel.updateOne({_id:pid},{$set:formData},(err)=>{
        if(err){ console.log("Error")}
        else {
            res.send("Product Updated")
        }
    })
}
module.exports={SaveProduct,getProductById,getAllProduct,deleteProduct,updateProduct};