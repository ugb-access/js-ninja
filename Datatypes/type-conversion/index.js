let number = 100;

console.log(0 + '1'); //because  we aer adding a number with string it will  be concatinated;

let playerName = '1';

console.log(playerName + 1); //same result as above get concatinated

let result =  Number(playerName); //use to convert string in to numbers

console.log(result, typeof result);

console.log(Number(true)); // true == 1, false == 0

let ageInString = 'asta labista';

console.log(Number(ageInString));

result = String(number); //use to convert numbers or boolean to string  type

console.log(result, typeof result);



console.log(Boolean(number) == true); // true  for  negative  and positive

console.log(Boolean(0)); //false for zero 

console.log(Boolean(-1)); //true for both -negative and positive numbers 

console.log(Boolean('hello'));  'true string will be always true unless it is not empty'

console.log(Boolean('')); 'false for the reason above'

console.log(Boolean('0')); //'True  for the reason above'

let numeric = -100; // refernce lines : 24,26,28

if(numeric) {
    console.log('pass  through')
}