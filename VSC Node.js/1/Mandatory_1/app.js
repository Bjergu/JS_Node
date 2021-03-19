const express = require("express");
const app = express();
const port = 8080;

app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.get("/", (req, res) => {
    
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/terminal", (req, res) => {
    
    res.sendFile(__dirname + "/public/terminal.html");
});

app.get("/language", (req, res) => {
    
    res.sendFile(__dirname + "/public/language.html");
});

app.get("/simpleAPI", (req, res) => {
    
    res.sendFile(__dirname + "/public/simpleAPI.html");
});

app.get("/tools", (req, res) => {
    
    res.sendFile(__dirname + "/public/tools.html");
});

//------------------------------SimpleAPI------------------------------

let wines = [
    {
        id: 1,
        type: "Chardonnay",
        color: "white"
    },
    {
        id: 2,
        type: "Pinot Noir",
        color: "red"
    }
];

let AUTOINCREMENT = wines.length;

app.get("/wines", (req, res) => {
    res.send({ data: wines });
});

app.get("/wines/:id", (req, res) => {
    const wineId = Number(req.params.id);
    const foundWine = wines.find(wineType => wineType.id === wineId);
    res.send({ data: foundWine });
});

app.post("/wines", (req, res) => {
    const newWine = req.body;
    newWine.id = ++AUTOINCREMENT;
    wines.push(newWine);
    res.send({ data: newWine });
});

app.patch("/wines/:id", (req, res) => {
    wines = wines.map(wine => {
        if (wine.id === Number(req.params.id)) {
            return { ...wine, ...req.body, id: wine.id };
        }
        return wine;
    });
    res.send({ data: wasUpdated });
});

app.delete("/wines/:id", (req, res) => {
    wines = wines.filter(wine => wine.id !== Number(req.params.id));
    res.send({ data: wines });
});

//---------------------------------------------------------------------


app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", port)
});