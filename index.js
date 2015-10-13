"use strict";

const mfw = require("mfw");
const config = require("/etc/gitstore.json");

mfw({
    name: "Alfred",
    port: config.port,
    api: require("./lib/http-api"),
    routes: require("./lib/http-routes"),
    client: __dirname + "/client"
}).start();

console.log("Alfred listening at http://" + config.hostname + ":" + config.port);
