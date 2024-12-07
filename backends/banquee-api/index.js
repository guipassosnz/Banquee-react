"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var server = (0, express_1.default)();
var port = 5800;
server.get("/", function (req, res) {
    res.send("Hello World!");
});
server.listen(port, function () {
    console.log("Example server listening on port ".concat(port));
});
