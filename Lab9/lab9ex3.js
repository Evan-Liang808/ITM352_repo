//Part 3a
let attributes  =  "<Evan>;<20>;<20 + 0.5>;<0.5 - 20>" ;
let pieces = attributes.split(';');
console.log("Data type of 'pieces': " + typeof pieces);

for (let i = 0; i < pieces.length; i++) {
    console.log(`${pieces[i]}, ${typeof pieces[i]}`);
}

//3b
let invertedString = pieces.join(",");
console.log("Inverted String: " + invertedString);