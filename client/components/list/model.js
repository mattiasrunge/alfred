"use strict";

define([
    "knockout",
    "jquery",
    "mfw/socket",
    "moment"
], function(ko, $, socket, moment) {
    return function() {
        this.list = ko.observableArray();

        this.load = function() {
            socket.emit("my other event", "hej", function() {
                console.log(arguments);
            });
//             $.getJSON("list", function(data) {
//                 this.list(data);
//             }.bind(this));
        }.bind(this);

        this.load();
    };
});
