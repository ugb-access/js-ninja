const pi = 3.14;
const radius = 10;

// - , + , *, /, **, %

console.log(radius * pi);

let result = radius / pi;

console.log(Math.ceil);

result = radius * pi**3;

console.log(result);

// order of  precedence - B I D M A S

result = 4 * (3-4) / 3**2;

console.log(result);

// shorthand properties

let likes = 20;

// likes = likes + 1;
likes++;

likes--;

console.log(likes);


likes += 10; // equals to likes = likes + 10

console.log(likes)

likes -= 10;

console.log(likes);

likes *= 10;

console.log(likes);

likes %= 3; // likes = likes % 10

console.log(likes);

likes **= 10; //likes = likes ** 10;

console.log(likes);

likes /= 10;

console.log(likes);

// NAN

console.log("5" - 5); // successfull it converts the string into number;

console.log("10" - "10") // success as well

console.log("hello" * 10); // NAN right fully so; occurs when the you didn'y done  things right fully;

// numbers concatination

console.log("Hello i have occured" + " " + 5 + " " + "times");









