var shortid = require('shortid');

var uuid = require('node-uuid');

var Helper = function () { };
Helper.prototype.generateRandomString = function () {
    return uuid.v4();
};

Helper.prototype.generateRandomEmail = function () {
    return shortid.generate() + '@gmail.com';
}
module.exports = Helper;