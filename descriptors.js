// const x = {};
// x.foo = 'bar';
// console.log(x);
// x.foo = 'cycle';
// console.log(x); 

// Descriptors include the following information about each property on an object,
// Value – value associated with the property.
// Writable – If true, attribute can be read from and written to. If not, will be a read only property.
// Get – getter function for the property
// Set – setter function for the property.
// Configurable – if true, property descriptor may be modified and property is allowed to be deleted.
// Enumerable – If true, property shows up while enumerating the object.

// 

var obj = {};
var descriptor = Object.create(null); // no inherited properties
// not enumerable, not configurable, not writable as defaults
descriptor.value = 'mckinsey';
descriptor.enumerable = true;
Object.defineProperty(obj, 'key', descriptor); 
//defines a new property directly on an object, 
//or modifies an existing property on an object, and returns the object.
console.log(obj)

console.log(Object.keys(obj));


// obj['key'] = 'hahaah';
// console.log(obj['key']);



//redefining isnt allowed for non-configurable
// Object.defineProperty(obj,'key',{
//     enumerable:true,
//     configurable:true,
//     value:'mdl',
// });





// Object.defineProperty(obj,'key2',{
//     enumerable:true,
//     configurable:true,
//     value:'bangalore',
// });

// console.log(obj['key2'])
Object.defineProperty(obj,'key2',{
    enumerable:true,
    configurable:true,
    value:'mumbai',
});

// console.log(obj['key2'])


//console.log(Object.getOwnPropertyDescriptor(obj,'key'));


// var descriptor2 = Object.create(null); // no inherited properties
// descriptor2.value = 'cool';
// Object.defineProperty(obj, 'key2', descriptor); 

// console.log(Object.getOwnPropertyDescriptors(obj));


const o = {};
var bValue = 38;
Object.defineProperty(o, 'b', {
  // Using shorthand method names (ES2015 feature).
  // This is equivalent to:
  // get: function() { return bValue; },
  // set: function(newValue) { bValue = newValue; },
  get() { return bValue; },
  set(newValue) { bValue = newValue; },
  enumerable: true,
  configurable: true
});
console.log(o.b);