let name = "usman";

let middleName = [ "g", "h", "a", "n", "i"];

let lastName = ["b", "a", "i", "g"]

let totalChar = middleName.concat(lastName);
console.log(totalChar);

//loops are used to iterate through data multiple times or execute a piece of code many times;
// 
for(    let i = 0; // 1-step: this is a counter which keep tracks of how many times the loop has run
        i < totalChar.length; // 2-step: condition : loop run unless the condition is true;
        i++ // 4-step: adds 1 to i after each iteration
    ) {
    // 3-step: code runs
    name += totalChar[i]
    console.log(name);
}

