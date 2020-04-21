let users = ['mitsu', 'naruto', 'sasuke'];

console.log(users);
console.log(users[1]);

users[0] = 'kakashi';

console.log(users);

const narutoSensai = ['kakahshi', 30];

console.log(narutoSensai);

console.log(users.length);

// Array mehtods

let result = users.join(';');

console.log(result);

result = users.concat(narutoSensai);

console.log(result);

result = users.push('minato', 30); // you can add many values as you want, push(), pop() both alters the original array 
// that's why we call it destrcutive methods because it changes the original array;

console.log(result);

console.log(users);

result = users.pop();

console.log(users);

console.log(result);

