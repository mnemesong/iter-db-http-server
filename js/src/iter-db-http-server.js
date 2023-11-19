"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runHttpServer = void 0;
var http_1 = require("http");
var iter_db_1 = require("iter-db");
var runHttpServer = function (shell, port, corsAllowOrigin) {
    if (port === void 0) { port = 3000; }
    if (corsAllowOrigin === void 0) { corsAllowOrigin = []; }
    var server = (0, http_1.createServer)(function (req, res) {
        try {
            if (req.method == 'POST') {
                var body = '';
                req.on('data', function (data) {
                    body += data;
                    if (body.length > 1e7)
                        req.connection.destroy();
                });
                req.on('end', function () {
                    var msg = new iter_db_1.IterDbMessage(JSON.parse(body));
                    shell.handleMessage(msg);
                    res.setHeader("Content-type", "application/json");
                    corsAllowOrigin.forEach(function (h) {
                        res.setHeader("Access-Control-Allow-Origin", h);
                    });
                    res.end(JSON.stringify(msg.getResponse()), "utf-8");
                });
            }
            else {
                res.setHeader("Content-type", "application/json");
                res.end(JSON.stringify({
                    "error": "Unexcepted error",
                    "details": "message should be POST, given " + req.method
                }), "utf-8");
            }
        }
        catch (e) {
            res.setHeader("Content-type", "application/json");
            res.end(JSON.stringify({
                "error": "Unexcepted error",
                "details": e.toString ? e.toString() : ""
            }), "utf-8");
        }
    });
    server.listen(port, function () {
        console.log("IterDb has been started as http server on port " + port);
    });
};
exports.runHttpServer = runHttpServer;
