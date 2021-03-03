const express = require("express");
const app = express();
const port = 8080
const fs = require('fs')

app.use(express.json());

let products = [
    {
        "id": 1,
        "name": "Apple",
        "price": 1
    },
    {
        "id": 2,
        "name": "Banana",
        "price": 1
    },
    {
        "id": 3,
        "name": "Milk",
        "price": 5
    },
    {
        "id": 4,
        "name": "Butter",
        "price": 18
    }
]

app.get("/", (req, res) => {
    res.send('Le Frontpage');
});

app.get("/ProductList", (req, res) => {
    const product = products.map((product) => {
        return product
    });
    res.send(product);
});

app.get("/ProductByID/:id", (req, res) => {
    let prodID = req.params.id;
    let item = products.find(item => item.id == prodID);
    if(item){
        res.send(item);
    }
    res.send("Item not found!");
});

app.post("/CreateProduct/:id/:name/:price", (req, res) => {
    let prodID = req.params.id;
    let prodName = req.params.name;
    let prodPrice = req.params.price;
    var item = {id: prodID, name: prodName, price: prodPrice};
    let addItem = products.push(item, index);
    
    res.send("Your item was successfully added to the Product List!");
});

app.delete("/DeleteProduct/:id", (req, res) => {
    let prodID = req.params.id;
    let item = products.find(item => item.id == prodID);
    let del = products.indexOf(item);
    if(item){
        products.splice(del, 1);
        res.send("The item was successfully deleted from the Product List!");
    }
    res.send("Item not found!");
});

app.put("/UpdateProduct/:id/:name/:price", (req, res) => {
    let prodID = req.params.id;
    let item = products.find(item => item.id == prodID);
    let upd = products.indexOf(item);
    let prodName = req.params.name;
    let prodPrice = req.params.price;
    var updItem = {id: prodID, name: prodName, price: prodPrice};
    if(item){
        products[upd] = updItem;
        res.send("Item updated successfully!");
    }
    res.send("Item not found!");
});

app.listen(port, () => { //listen run http server + assign port
    console.log(`app listening at http://localhost:${port}`)
});
