/*let attributes = "<Evan>;<20>;<MIS>"
let parts = attributes.split(";",3);
console.log(pieces)*/

//the followign function checks if the value is negative and if it is, they put out a error message
function CheckforNonNegIng(Q){
    errors = []; // assume no errors at first
    if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    return returnErrors ? errors : (errors.length == 0); //return true if no errors
}
let attributes  =  "Evan; 21; 21.5; -20.5";
let pieces = attributes.split(';');

/*function checkIt(item, index) {console.log(`part ${index} is ${(isNonNegInt(item)?'a':'not a')} quantity`);
}*/

pieces.forEach((item,index) => {console.log(`Piece ${index} is ${(CheckForNonNegInt(item)?'a':'not a')} quantity`);
});

//question 19
function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        picture_data = "image data:XOXOXO";
        callback(picture_data);
    }, 3* 1000);
    
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://www.example.com/big_pic.jpg';
download(url, process);