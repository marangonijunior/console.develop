

const stringify = (obj) => {
  if (typeof obj === "bigint") throw new Error('Required to throw on BigInt');

  if(
      obj === Infinity || 
      obj === -Infinity || 
      obj === null || 
      obj !== obj ||
      typeof obj == 'symbol' ||
      typeof obj === 'undefined'
  ) {
      return `null`;
  }

  if(obj instanceof Date){
      return `"${obj.toISOString()}"`;
  }

  if (typeof obj === 'string'){
      return `"${obj}"`;
  }

  if(typeof obj === 'function') {
      return undefined;
  }

  if (typeof obj === 'number' || typeof obj === 'boolean'){
      return `${obj}`;
  }

  if(Array.isArray(obj)){
      let result = '[';
      for(let i = 0; i < obj.length; i++){
          if (i < obj.length -1){
               result += `${stringify(obj[i])},`;
          } else {
               result += `${stringify(obj[i])}]`;
          }
      }
      return result;
  }

  if(typeof obj === 'object'){
      let result = '{';
      let keys = Object.keys(obj);
      for(let key of keys){
          if(typeof obj[key] !== 'undefined'){
              result += `"${key}":${stringify(obj[key])},`;
          }
      }
      if( result !== '{'){
         result = `${result.substring(0, result.length -1)}}`;
          
      } else {
          result += '}';
      }
      
      return result;
  }

  
}

const data = {
  name: 'Hednei',
  age: 38,
  isDeveloper: true,
  childrens: ['Frederico', 'Maria Eduarda'],
  a: undefined, b: null, c: NaN,
  [Symbol()]: 'value'
}

console.log(JSON.stringify(data))
console.log(stringify(data))