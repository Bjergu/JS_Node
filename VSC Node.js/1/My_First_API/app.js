const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send({});
});

app.get("/", (req, res) => {
    
    res.sendFile(__dirname + "/public/index.html");
});


app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", port)
});

