const age = 30;


// loose comparison  (differnt types can be equal)
console.log(age  == 30);

console.log(age == '30');

console.log(age != 30);

console.log(age != '30');

// strict comaprison (different types cannot be equal)

console.log(age === 30);

console.log(age === '30'); //false beacuse js will not do type conversion in this scenerio

console.log(age !== 30);

console.log(age !== '30');

