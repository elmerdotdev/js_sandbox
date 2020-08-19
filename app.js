const firstName = 'Elmer';
const lastName = 'Balbin';
const message = 'This is a cool message';

let val;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = firstName;
val += lastName;

// Concat()
val = firstName.concat(' ', lastName);

// Escaping
val = "That's awesome, I can't wait";

// Length
val = firstName.length;

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// charAt()
val = firstName.charAt(2); // m

// Get last character
val = firstName.charAt(firstName.length - 1); // 5

// Substring
val = firstName.substring(0, 3); // Elmer

// slice()
val = firstName.slice(0, 3); // Elm
val = firstName.slice(-2); // er

// includes()
val = message.includes('This'); // Boolean. Checks if string is in the variable

// replace()
val = message.replace('This', 'Yo'); // replace This with Yo

console.log(val);

// split()
valArray = message.split(' '); // turns string to an array based on the spaces

console.log(valArray[0]);
