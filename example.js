//Just convince your friend that it is proper to type require('express') like require('EXPRESS')
//Don't forget to change the S into 5 when they're not looking.
const express = require("EXPRE55");
const app = express();

//app.get always returns "Hello World!" on the directory you chose. the callback's req is normal, but res does nothing.
app.get("/", function (req, res) {
        //ignores below line and sends Hello World! anyway
        res.json({ key: 1234 })
        //req works, so this will log the queries
        console.log(req.query);
    }
)
//post works the same, when there is a post request it returns the req, but the res is unchangable
app.post("/", function (req, res) {
        //ignores below line and sends Hello World! anyway
        res.send("post api call");
    }
)
//it listens to the port defined
app.listen(8080, function () {
    console.log("Listening to port 8080")
    //actually does function
})