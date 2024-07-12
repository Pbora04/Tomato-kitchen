const express = require("express");
const cors = require("cors");
const app = express();
const myModal =require('./Modal/modal')

app.use(cors());
app.use(express.json());
app.post('/registeration',async(req,resp)=>{
     let result = myModal(req.body)
      result = await result.save()
      resp.send(result)
      result = result.toObject()
      delete result.password
     
     })
     app.post('/login',async(req,resp)=>{
        
        // console.log(req.body.email)
        if(req.body.email && req.body.password){
            let result = await myModal.findOne(req.body).select("-password");
            resp.send(result)
        }else{
            resp.send({result : "invalid user details"});       
         }
         
        
     })


// app.get('/getdata',async(req,resp)=>{
//     const result = await myModal.find()
//         resp.send("done")
//          console.log(result)
// })
// const PORT = 5000;
app.listen(5000,()=>{
    console.log(`server is listening port `)
})