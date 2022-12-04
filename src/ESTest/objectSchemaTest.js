const objectSchema = require('../ES/objectSchema.js');
const stringSchema = require('../ES/stringSchema.js');
const numberSchema = require('../ES/numberSchema.js');
const booleanSchema = require('../ES/booleanSchema.js');
const arraySchema = require('../ES/arraySchema.js');
module.exports = function test(){
    'use strict';
    const schema = objectSchema(
        {
            oi: stringSchema({min:5}),
            numero: numberSchema({preci:2}),
            logico: booleanSchema({notNull:false}),
            lista: arraySchema({
                schema: objectSchema({
                    chave: stringSchema({
                        max: 3,
                        min: 0,
                        notNull: false
                    })
                },
                undefined,
                true
            )})
        });
    console.log('object:' +JSON.stringify( schema({oi:'t14t3',numero:2.4545,lista:[{}]},'objeto')));
};