
 function arraySchema(props = {}){
    //'use strict';
    const notNull = props.notNull;
    const min = props.min;
    const max = props.max;
    const schema = props.schema;
    
    const out = (value,path) => {
            let array = [];
            if(value  !== undefined && value !== null){
                if(typeof value !== 'object')
                    throw {
                        messenger:`incoerencia de tipo in propert:${path}, tipo`+
                        ` esperado: Array object`
                    };

                if(!Array.prototype.isPrototypeOf(value))
                    throw {
                        messenger:`incoerencia de tipo in propert:${path}, tipo `+
                        `esperado: Array object`
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

                if(typeof schema === 'function')
                        value.forEach((element,index) => {
                            array.push(schema(element,`${path}[${index}]`));
                        });
                if(Array.prototype.isPrototypeOf(schema))
                        value.forEach((element,index) => {
                            array.push(schema[index % value.length](element,`${path}[${index}]`));
                        });
            }else if(notNull)
                throw {messenger:`esta propriedade é obrigaroria. in propert:${path}`};
            return array;
       
    };
    return out;
}
 
module.exports = arraySchema;