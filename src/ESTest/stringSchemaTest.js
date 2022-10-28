const stringSchema = require('../ES/stringSchema.js');

module.exports = function test(){
    'use strict';
    const schema = stringSchema({max:3});
    console.log( schema('3'));
};