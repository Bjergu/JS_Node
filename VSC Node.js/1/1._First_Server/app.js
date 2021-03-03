const express = require("express");
const app = express();
const port = 8080
const fs = require('fs')

// consider what datatype to store your data in
// you are allowed to hardcode the id

app.get("/", (req, res) => {
    res.end('Hello!');
});

app.get("/products", (req, res) => {
    fs.readFile(__dirname + '/' + 'products.json', 'utf8', (eer, data) => {
        res.end(data);
    });
});

app.listen(port, () => { //listen run http server + assign port
    console.log(`app listening at http://localhost:${port}`)
});

