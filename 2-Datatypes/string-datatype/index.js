// strings

let name = "Usman Ghani Baig";

console.log(name);


// string concatination

const firstName = "Usman";

const secondName = "Ghani";

const fullName = firstName + ' ' + secondName;

const withLastName = `${fullName} Baig <h1>Usman Ghani Baig</h1> `; // concatination with object literals  m

console.log(withLastName)

console.log(fullName);

// getting  strings

console.log(fullName[4]);

// string methods

console.log(fullName.length); // string property , that's why brackets are not written.

console.log(fullName.toUpperCase()); // string method used to perform a specific task on the string.

const lowerCase = firstName.toLowerCase(); // opposite to toUpperCase()

console.log(lowerCase);

// finding index of a specific index 

const charFinder = firstName.indexOf('an');

console.log(charFinder);

let charAtI = firstName.charAt(1); // same as firstName[1];

console.log(charAtI);




