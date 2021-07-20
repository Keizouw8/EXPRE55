//Just convince your friend that it is proper to type require('express') like require('EXPRESS')
//Don't forget to change the S into 5 when they're not looking.
const express = require("EXPRE55");
const app = express();

//app.use is unchanged (for now)
app.use("/test", express.static("./static/"));

//app.get has a 60% chance of returning hello world
//app.get has a 30% chance of giving a nonsensical error
//app.get has a 10% chance of working normally
app.get("/", function (req, res) {
        res.send("any message")
        //req works, so this will log the queries
        console.log(req.query)
    }
)
//post works the same as get
app.post("/", function (req, res) {
        res.send("post api call");
    }
)
//it listens to the port defined
app.listen(8080, function () {
    console.log("Listening to port 8080")
    //actually does function
})