import { itemData, quantity } from './Products.js';

const params = new URL(document.location).searchParams;

let quantity=[];

for (let i = 0; i < itemData.length; i++) {
    let quantityValue = params.get(`quantity${i}`);
    if (quantityValue !== null) {
        quantity[itemData[i].quantityIndex] = Number(quantityValue);
    }
}
//Compute subtotal
let subtotal=0;
let shipping = 0; 
let tax_rate = 0.0575;
let tax=0;
let total = 0;

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
function validateQuantity(quantity) {
    let errorMessage = "";
    switch (true) {
        case isNaN(quantity):
            errorMessage = "Not a number.";
            break;
        case quantity < 0 && !Number.isInteger(quantity):
            errorMessage = "Negative inventory and not an Integer. Please enter a non-negative quantity to order.";
            break;
        case quantity < 0:
            errorMessage = "Negative inventory. Please enter a non-negative quantity to order.";
            break;
        case !Number.isInteger(quantity):
            errorMessage = "Not an Integer. Please enter a non-negative quantity to order.";
            break;
        default:
            errorMessage = ""; // No errors
            break;
    }
    return errorMessage;
  }

//function to generate rows with validationQuantity
function generateItemRows() {

// get the table element to populate
  let table = document.getElementById("invoiceTable");
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
    let extendedPrice = item.price * itemQuantity; 
    subtotal += extendedPrice;

    // display the item with the calculated extended price
    let row = table.insertRow();
    row.insertCell(0).innerHTML = item.brand;
    row.insertCell(1).innerHTML = itemQuantity;
    row.insertCell(2).innerHTML = "$" + item.price.toFixed(2);
    row.insertCell(3).innerHTML = "$"+extendedPrice.toFixed(2);
}}}

if (!hasErrors) {
    document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);
  }
