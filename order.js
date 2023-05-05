
const express1 = require('express');
const mongodb = require('mongodb');
const app = express1();
require('./Require/config');
const product1 = require('./Require/schemaorder');


app.use(express1.json()); 



app.get('/order', (req, res)=>{
    product1.find({})
        .then((x) => {
            res.status(200).send(x);
            console.log(x);
        }).catch((y) => {
            console.log(y);
    })
})
app.post('/create', (req, res) => {
    console.log("hello");
    console.log(req.body);
    var mydata = new product1(req.body);
    console.log(mydata);
    mydata.save().then(() => {
        res.send("This item has been saved to the databse")
    }).catch(() => {
        res.status(400).send("Item was not saved to the databse")
    });
    // res.status(200).render('contact.pug');
})
app.get("/orderbyid/:_id", async (req, res) => {
    product1.find(req.params)
    .then((x) => {
        res.status(200).send(x);
        console.log(x);
    }).catch((y) => {
        console.log(y);
})
})



  
  app.delete("/delete/:_id", async (req, res) => {
      console.log(req.params.id);
      
    const result = await product1.deleteOne(req.params);
    var x = { _id: new mongodb.ObjectId(req.params.id) };
    console.log(x);
    res.send(result);
  })
app.listen(8000, ()=>{
    console.log("The application started successfully on port 8000");
});