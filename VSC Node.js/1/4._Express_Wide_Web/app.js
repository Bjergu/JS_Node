const express = require("express");
const app = express();

app.use(express.json());


app.get("/", (req, res) => {

    res.sendFile(__dirname + "/public/welcome.html");
});

app.get("/Pizza", (req, res) => {

    res.sendFile(__dirname + "/public/pizza.html");
});

app.get("/candle", (res, req) => {
    if (req.query.blow) {
        return res.send({ lightsOn: false });
    }
    res.send({ lightsOn: true });
});

const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(port));
});

/* app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080)
}); */