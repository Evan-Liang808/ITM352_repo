/*let attributes = "<Evan>;<20>;<MIS>"
let parts = attributes.split(";",3);
console.log(pieces)*/

function isNonNegIng(Q){
    errors = []; // assume no errors at first
    if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
        return (errors.length == 0); //return true if no errors
}
let attributes  =  "Evan; 21; 21.5; -20.5";
let pieces = attributes.split(';');

for(let i = 0; i < pieces.length; i++) {
    console.log(pieces[i] + " is a non-negative integer: " + isNonNegInt(pieces[i]));
}

