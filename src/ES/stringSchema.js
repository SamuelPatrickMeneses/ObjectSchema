
 function stringSchema(props = {}){
    //'use strict';
    const notNull = props.notNull;
    const min = props.min;
    const max = props.max;
    const patern = props.patern;

    const out = (value,path) => {
        if(notNull && (value === undefined || value === null))
            throw {messenger:`esta propriedade é obrigaroria. in propert:${path}`};
        else{
            if(typeof value !== 'string' && value !== undefined)
                throw {messenger:`incoerencia de tipo, tipo esperado: string. in propert:${path}`};

            if(value && min !== undefined && min > value.length)
                throw {
                    messenger:
                        `o comprimento invalido: ${value.length},`+
                        ` o minimo experado é ${min}. in propert:${path}`
                    };
            if(value && max !== undefined && max < value.length)
                throw {
                    messenger:
                        `o comprimento invalido: ${value.length},`+
                        ` o maximo experado é ${max}. in propert:${path}`
                    };
            if(value && patern && !value.match(patern))
                throw {messenger:
                        `padrão invalido: ${value},`+
                        ` o minimo experado é ${patern}. in propert:${path}`
                    };
            return value ? value : '';
        }
    };
    return out;
}
 
module.exports = stringSchema;