const numberSchema = require('../ES/numberShema.js');

module.exports = function test(){
    'use strict';
    const schema = numberSchema({preci:3});
    console.log( schema(3.4343));
};