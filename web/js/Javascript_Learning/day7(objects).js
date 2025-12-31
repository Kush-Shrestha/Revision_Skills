// objects are used to store keyed collections of various data and more complex entities. 
// In JavaScript, objects penetrate almost every aspect of the language.
//An object can be created with figure brackets {…} with an optional list of properties
//An empty object (“empty cabinet”) can be created using one of two syntaxes:

let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

We can immediately put some properties into {... } as “key: value” pairs:

let user = {     // an object
    name: "Kushal",  // by key "name" store value "John"
    age: 20        // by key "age" store value 30
};

//Property values are accessible using the dot notation:

// get property values of the object:
alert(user.name); // Kushal
alert(user.age); // 20

//To remove a property, we can use the delete operator:

delete user.age;