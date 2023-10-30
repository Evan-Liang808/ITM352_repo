const params=new URL(document.location).searchParams;
//loop thru the expected quantity parameters and udpate the quantity array

let quantity=[];

for (let i=0; i<itemData.length; i++){
  let quantityValue = params.get(`quantity${i}`);
  if (quantityValue !==null) {
    quantity[itemData[i].quantityIndex] = Number(quantityValue);
  }
};

//import data from products.js into this file
//import { itemData, quantity } from './products.js';
import { itemData} from './Products.js';

/*
//Compute subtotal
let subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price5
*/

let subtotal=0;
let shipping = 0; 
let tax_rate = 0.0575;
let tax=0;
let total = 0;

//Populate table rows with DOM manipulation
//let table = document.getElementById('invoiceTable');
generateItemRows();

//Compute shipping
if(subtotal<=50) {
    shipping=2;
  } else if(subtotal<=100) {
    shipping=5;
  } else {
    shipping=0.05*subtotal;
}

//compute tax
tax = tax_rate*subtotal;

//compute grand total
total = subtotal + tax + shipping;

// set the total cell in bold
document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);

//set subtotal, tax, and total cells
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + tax.toFixed(2);
document.getElementById('shipping_cell').innerHTML = '$' + shipping.toFixed(2);

//validateQuantity function 
function validateQuantity(quantity){
  if(isNaN(quantity)) {
      return "Not a Number";
  } else if (quantity<0 && !Number.isInteger(quantity)) {
      return "Negative Inventory and not an Integer";
  } else if (quantity <0) {
      return "Negative Inventory";
  } else if(!Number.isInteger(quantity)) {
      return "Not an Integer";
  } else {
    return""; //no errors
  }
}

//function to generate rows with validationQuantity
function generateItemRows() {

// get the table element to populate
  let table = document.getElementById("invoiceTable");

  // clear the table content
  table.innerHTML ='';
  let hasErrors = false; 

  // Loop through itemData and quantity arrays
  for(let i=0;i<itemData.length;i++){
    let item = itemData[i];
    let itemQuantity = quantity[item.quantityIndex];

    //Validate the quantity
    let validationMessage = validateQuantity(itemQuantity); 

    // If there are validation errors, display the item with an error message
    if(validationMessage !== "") { 
        hasErrors = true;
        let row = table.insertRow();
        row.insertCell(0).innerHTML = item.brand;
        row.insertCell(1).innerHTML = validationMessage;
    } else if(itemQuantity > 0) { 
        //calculate extended price if quantity is valid and positive
       let extendedPrice = item.price * itemQuantity; 
        subtotal += extendedPrice;

        // display the item with the calculated extended price
        let row = table.insertRow();
        row.insertCell(0).innerHTML = item.brand;
        row.insertCell(1).innerHTML = itemQuantity;
        row.insertCell(2).innerHTML = "$" + item.price.toFixed(2);
        row.insertCell(3).innerHTML = "$"+extendedPrice.toFixed(2);

    }
  }
}