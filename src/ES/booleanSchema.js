
 function BooleanSchema(props = {}){
    //'use strict';
    const notNull = Boolean(props.notNull);
    const out = (value,path) => {
        if(notNull && (value === undefined || value === null))
            throw {messenger:`esta propriedade é obrigaroria. in propert:${path}`};
        return Boolean(value);
    };
    
    return out;
}
module.exports = BooleanSchema;