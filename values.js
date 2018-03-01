let obj = { x: 'xxx', y: 1 };

// for (const property in obj){
//     console.log(obj[property]);
// }

// const keys = Object.keys(obj);
// keys.forEach((key)=>{
//     console.log(obj[key]);
// })

// obj = { x: 'xxx', y: 1 };
// console.log(Object.values(obj)); // ['xxx', 1]




// when we use numeric keys, the values returned in a numerical 
// order according to the keys
obj = { 10: 'xxx', 1: 'yyy', 3: 'zzz' };
console.log(Object.values(obj)); // ['yyy', 'zzz', 'xxx']
console.log(Object.entries(obj));// returns an array of key value pairs