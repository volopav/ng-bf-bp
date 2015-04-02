module.exports = require('angular').module('InstagramFeed', [])
    .factory('instagram', require('./service'))
    .directive('instagramFeed', require('./directive'));