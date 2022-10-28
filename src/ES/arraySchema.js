
 function arraySchema(props = {}){
    //'use strict';
    const notNull = props.notNull;
    const min = props.min;
    const max = props.max;
    const schema = props.schema;
    
    const out = (value,path) => {
        if(notNull && (value === undefined || value === null))
            throw {messenger:`esta propriedade é obrigaroria. in propert:${path}`};
        else{

            if(typeof value !== 'object')
                throw {
                    messenger:`incoerencia de tipo in propert:${path}, tipo esperado: Array object`
                };

            if(!Array.prototype.isPrototypeOf(value))
                throw {
                    messenger:`incoerencia de tipo in propert:${path}, tipo esperado: Array object`
                };

            if(min !== undefined && min > value.length)
                throw {
                    messenger:
                        `comprimento invalido: ${value.length}, o minimo experado`+
                        ` é ${min}. in propert:${path}`
                    };
                    
            if(max !== undefined && max < value.length)
                throw {
                    messenger:
                        `comprimento invalido: ${value.length}, o maximo experado`+
                        ` é ${max}. in propert:${path}`
                    };

            let array = [];
            if(typeof schema === 'function')
                    value.forEach((element,index) => {
                        array.push(schema(element,`${path}[${index}]`));
                    });
            return array;
        }
       
    };
    return out;
}
 
module.exports = arraySchema;