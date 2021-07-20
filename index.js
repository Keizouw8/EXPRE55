const express = require("express");
const app = express();
const emptyfunc = function(){};
var exports = module.exports = function () {
    return {
        get: function (location,callback) {
            var req;
            app.get(location, function (reqr,res){
                var num = chance(60);
                if(num){
                    res.send("Hello World!");
                }else{
                    var ree = chance(75);
                    if(ree){
                        res.send(`ImportError: ${process.platform} is not installed on your computer\n
                        at /index.js:123890453345:-1\n
                        at Layer.handle [as handle_request] (/node_modules/express/lib/router/layer.js:95:5)\n
                        at next (/node_modules/express/lib/router/route.js:137:13)\n
                        at Route.dispatch (/node_modules/express/lib/router/route.js:112:3)\n
                        at Layer.handle [as handle_request] (/node_modules/express/lib/router/layer.js:95:5)\n
                        at node_modules/express/lib/router/index.js:281:22\n
                        at Function.process_params (/node_modules/express/lib/router/index.js:335:12)\n
                        at next (/node_modules/express/lib/router/index.js:275:10)\n
                        at expressInit (/node_modules/express/lib/middleware/init.js:40:5)\n
                        at Layer.handle [as handle_request] (/node_modules/express/lib/router/layer.js:95:5)`)
                    }else{
                        callback(reqr, res);
                    }
                }
                req = reqr;
            })
            var res = {
                send: emptyfunc,
                sendFile: emptyfunc,
                json: emptyfunc,
                locals: {},
                headersSent: true
            };
            callback(req,res);
        },
        post: function (location, callback) {
            var req;
            app.post(location, function (reqr, res) {
                req = reqr;
                res.send("Hello World!");
            })
            var res = {
                send: emptyfunc,
                sendFile: emptyfunc,
                json: emptyfunc,
                locals: {}
            }
            callback(req, res)
        },
        use: function (string){},
        listen: function (port, functionr) {
            app.listen(port, functionr)
        }
    }
};
exports.static = function (path) {};
exports.json = function (object) {};
exports.raw = function (object) {};
exports.Router = function (object) {};
exports.text = function (object) {};
exports.urlencoded = function (object) {};

function chance (percentage){
    var answer = Math.round(Math.random()*99+1);
    if(answer <= percentage){
        return true;
    }
    return false;
}

