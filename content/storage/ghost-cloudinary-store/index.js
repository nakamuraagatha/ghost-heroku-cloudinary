'use strict';
module.exports = require('ghost-cloudinary-store');

var Promise = require('bluebird'),
    cloudinary = require('cloudinary');

function store(config) {
    cloudinary.config(config);
}

store.prototype.save = function(image) {
    return new Promise(function(resolve) {
        cloudinary.uploader.upload(image.path, function(result) {
            resolve(result.url);
        });
    });
};

store.prototype.serve = function() {
    return function (req, res, next) {
        next();
    };
};

module.exports = store;