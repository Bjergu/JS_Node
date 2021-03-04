const express = require("express");
const app = express();

app.use(express.json());

// how to read json file (wine.json)
//const wine = require("./wine.json");

// This is not a code question
// How do you send data with a GET request?

// query string
app.get("/search", (req, res) => {
    res.send({ searchquery: req.query });
});

// path variables
app.get("/telegram/:message/:name", (req, res) => {
    const message = req.params.name + ", " + req.params.message;
    res.send({ message: message }); 
});

// I don't need you to implement it but I want you to to research this conondrum
// why is it undefined??? 
app.post("/goodstuff", (req, res) => {
    console.log(req.body);
    res.send({ body: req.body });
});

/* app.delete("/goodstuff", (req, res) => {
    console.log(req.body);
    res.send({ body: req.body });
}); */

app.get("/serveWine", (req, res) => {
    const wine = require("./wine.json");
    res.send(wine);
});

//app.listen takes a callback as the second argument which takes error as an argument.. implement the callback

/* app.listen(PORT, (err) => {

}); */

app.listen(8080);