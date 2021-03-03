const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send({});
});

//Create a route on the endpoint me which sends back a json that represents you
app.get("/me", (req, res) => {
    const me = {
        name: "mee"
    }
    res.send(me);
});

app.get("/time", (req, res) => {
    let d = new Date();

    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    res.send({
        hour, min, sec
    });
});

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get("/day", (req, res) => {
    /* let ts =Date.now();

    let d = new Date(ts);
    let day = d.getDate(); */
    const currentWeekday = new Date().getDay();
    res.send({
        day: weekdays[currentWeekday]
    });
});

app.get("/month", (req, res) => {
    let d = new Date();
    let month = d.getMonth() + 1;
    res.send({
        month
    });
});

app.get("/year", (req, res) => {
    let d = new Date();
    let year = d.getFullYear();
    res.send({
        year
    });
});

app.get("/about", (req, res) => {
    
    res.send({
        version: "v0.1.0"
    });
});

app.get("/page", (req, res) => {
    res.send("<h1>welcome</h1>");
});

app.listen(8080);