const express = require("express");
const app = express();
const emptyfunc = function(){};
var os = require("getos")(function (e, os) {
    if(os.os == "darwin") {
        os.os = "mac os";
    }
    if(os.os == "linux"){
        os.os = os.dist
    }
    return os
})
var errmsg4resend = `ImportError: ${os.os} is not installed on your computer<br>
at /index.js:123890453345:-1<br>
at Layer.handle [as handle_request] (/node_modules/express/lib/router/layer.js:95:5)<br>
at next (/node_modules/express/lib/router/route.js:137:13)<br>
at Route.dispatch (/node_modules/express/lib/router/route.js:112:3)<br>
at Layer.handle [as handle_request] (/node_modules/express/lib/router/layer.js:95:5)<br>
at node_modules/express/lib/router/index.js:281:22<br>
at Function.process_params (/node_modules/express/lib/router/index.js:335:12)<br>
at next (/node_modules/express/lib/router/index.js:275:10)<br>
at expressInit (/node_modules/express/lib/middleware/init.js:40:5)<br>
at Layer.handle [as handle_request] (/node_modules/express/lib/router/layer.js:95:5)`;
var errmsg = `ImportError: ${os.os} is not installed on your computer
at /index.js:123890453345:-1
at Layer.handle [as handle_request] (/node_modules/express/lib/router/layer.js:95:5)
at next (/node_modules/express/lib/router/route.js:137:13)
at Route.dispatch (/node_modules/express/lib/router/route.js:112:3)
at Layer.handle [as handle_request] (/node_modules/express/lib/router/layer.js:95:5)
at node_modules/express/lib/router/index.js:281:22
at Function.process_params (/node_modules/express/lib/router/index.js:335:12)
at next (/node_modules/express/lib/router/index.js:275:10)
at expressInit (/node_modules/express/lib/middleware/init.js:40:5)
at Layer.handle [as handle_request] (/node_modules/express/lib/router/layer.js:95:5)`;
var exports = module.exports = function () {
    return {
        locals: {},
        get: function (location,callback) {
            getandpostfunc(location,callback,"g");
        },
        post: function (location, callback) {
            getandpostfunc(location, callback,"p");
        },
        use: function (e,i){
                if (i != undefined) {
                    console.log(1);
                    app.use(e, i);
                } else {
                    app.use(e);
                }
        },
        listen: function (port, functionr) {
            app.listen(port, functionr)
        }
    }
};
exports.static = express.static;
exports.json = express.json;
exports.raw = express.raw;
exports.Router = express.Router;
exports.text = express.text;
exports.urlencoded = express.urlencoded;

function chance (percentage){
    var answer = Math.round(Math.random()*99+1);
    if(answer <= percentage){
        return true;
    }
    return false;
}

var getandpostfunc = function (location, callback,gop) {
    var res = {
        send: emptyfunc,
        sendFile: emptyfunc,
        json: emptyfunc,
        locals: {},
        headersSent: true
    };
    var coolfunc = function (req, res) {
        var num = chance(60);
        if (num) {
            res.send("Hello World!");
        } else {
            var ree = chance(75);
            if (ree) {
                res.send(errmsg4resend);
                console.error(errmsg);
            } else {
                callback(req, res);
            }
        }
    };
    if(gop == "g"){
        app.get(location,coolfunc);
    }else{
        app.post(location,coolfunc);
    }
}