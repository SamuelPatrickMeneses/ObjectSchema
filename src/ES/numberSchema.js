
 function numberSchema(props = {}){
    //'use strict';
    const notNull = props.notNull;
    const min = props.min;
    const max = props.max;
    const preci = props.preci;
    const out = (value,path) => {
        if(notNull && (value === undefined || value === null))
            throw {messenger:`esta propriedade é obrigaroria. in propert:${path}`};
        else{
            if(typeof value !== 'number')
                throw {messenger:`incoerencia de tipo, tipo esperado: number valorpassado (${value}) é do tipo ${typeof value}. in propert:${path}`};
            if(min !== undefined && min > value)
                throw {
                    messenger:
                        `o comprimento invalido: ${value},`+
                        ` o minimo experado é ${min}. in propert:${path}`
                    };
            if(max !== undefined && max < value)
                throw {
                    messenger:
                        `o comprimento invalido: ${value},`+
                        ` o maximo experado é ${max}. in propert:${path}`
                    };
            if(preci !== undefined)
                value = parseFloat(
                    value.toFixed(preci)
                );
            return value;
        }
    };
    return out;
}
 
module.exports = numberSchema;