const express = require("express");
const app = express();

app.use(express.json());

let animeNames = [
    {
        id: 1,
        title: "Attack on Titman",
        weirdness: 6.8
    },
    {
        id: 2,
        title: "One Dong Man",
        protagonist: "SaitoMochito"
    }
];

app.get("/animeList", (req, res) => {
    res.json({ animeNames });
});

app.get("/animeList/:id", (req, res) => {
    let animeNameId = parseInt(req.params.id);
    let foundName = animeNames.find(animeName => animeName.id === animeNameId);
    
    res.send({ data: foundName });
});

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080)
});