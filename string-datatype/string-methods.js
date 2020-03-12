const onePiece = 'callmesoul@beingHot.com';

// sibling of indexOf => lastIndexOf

let result = onePiece.lastIndexOf('n'); /* finds the last index/occurence of the given character and 
gives back index of it. if more more than 1 character is given it will give index in -1. 
Both lastIndexOf and lastIndex can bbe used to search an item in a string and if it gives -1, it means it didn't
have that character.

*/
console.log(result);

/* slice method - returns the sliced part of a string - accepts to arguments (starting index, ending index);
slicing  will be done before the ending index like below, string will be sliced from 0 - 9;means upto 10
*/

result = onePiece.slice(0, 10);

console.log(result);

// subStr - same  as slice method accepts two arguments but in subStr the second argument is of the number of characters
// after starting from a speicfic index;

result = onePiece.substr(4, 10);

console.log(result);

// replcase - use to replace the first occurence of a character with a specified character.

result = onePiece.replace('l', 'n');

console.log(result);