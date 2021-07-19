const express = require("express");
const app = express();
const emptyfunc = function(){};
var exports = module.exports = function () {
    return {
        get: function (location,callback) {
            var req;
            app.get(location, function (reqr,res){
                res.send("Hello World!");
                req = reqr
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