
 function objectSchema(props = {},type = undefined,notNull){
   //'use strict';
   const constraints = {};
   const out = (value,path) => {
      let obj = {};
      if(notNull && (value === undefined || value === null))
         throw {messenger:`NotNull propert! in propert:${path}`};
      if(type && !type.isPrototypeOf(value))
         throw {messenger:`incoerencia de tipo! in propert:${path}`};
      if(typeof value !== 'object')
         throw {messenger:`incoerencia de tipo in propert:${path}, tipo esperado: object`};
      for(let prop in constraints){
         obj[prop] = typeof constraints[prop] === 'function' ?
         constraints[prop](value[prop],path+'.'+prop) 
         : constraints[prop];
      }
      return obj;
   };
   for(let prop in props)
   constraints[prop] = props[prop];
   return out;
 }

 module.exports = objectSchema;