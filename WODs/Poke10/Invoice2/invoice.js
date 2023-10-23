import { itemData, quantity } from './Products.js';

// Calculate extended prices for each item using a loop and increment subtotal as it goes
let extendedPrices = [];
let subtotal=0;
for (let i = 0; i < itemData.length; i++) {
  let item = itemData[i];
  let itemQuantity = quantity[item.quantityIndex];
  let extendedPrice = item.price * itemQuantity;
  subtotal+=extendedPrice;
  extendedPrices.push(extendedPrice);
}

// Calculate tax
let taxRate = 0.0575; // 5.75%
let taxAmount = subtotal * taxRate;

// Calculate total
let total = subtotal + taxAmount;

let table = document.getElementById('invoiceTable');

// Calculate shipping based on sub-total
let shippingCharge = 0;

if (subtotal <= 50) {
    shippingCharge = 2;
} else if (subtotal <= 100) {
    shippingCharge = 5;
} else {
    shippingCharge = subtotal * 0.05; 
}
// Calculateshipping
total = subtotal + taxAmount + shippingCharge;

for (let i = 0; i < itemData.length; i++) {
    let row = table.insertRow();
    row.insertCell(0).innerHTML = itemData[i].brand;
    row.insertCell(1).innerHTML = quantity[itemData[i].quantityIndex];
    row.insertCell(2).innerHTML = '$' + itemData[i].price.toFixed(2);
    row.insertCell(3).innerHTML = '$' + extendedPrices[i].toFixed(2);
}

function validateQuantity(quantity){
   if(isNaN(quantity)){
       return "Not a Number";
   }else if (quantity<0 && !Number.isInteger(quantity)){
       return "Negative Inventory and not an Integer";
   }else if (quantity <0){
       return "Negative Inventory";
   }else if(!Number.isInteger(quantity)){
       return "Not an Integer";
   }else{
       return"";
   }
 
 }

 function generateItemRows(){
   let table = document.getElementById("invoiceTable");
   table.innerHTML =''; //clears table content
   let hasErrors = false; 
   //loop through itemData and quantity arrays
   for(let i=0;i<itemData.length;i++){
     let item = itemData[i];
     let itemQuantity = quantity[item.quantityIndex];
     let validationMessage = validateQuantity(itemQuantity); //validates quantity
     if(validationMessage !== ""){ //displays errors when validating quantity
         hasErrors = true;
         let row =table.insertRow();
         row.insertCell(0).insertHTML = item.brand;
         row.insertCell(1).innerHTML = validationMessage;
     } else if(itemQuantity >0){ //calculates extended price if valid
        let extendedPrice = item.price * itemQuantity; 
         subtotal += extendedPrice;
     }}}

// Set the subtotal, tax, and total cells
document.getElementById('total_cell').innerHTML = `$${total.toFixed(2)}`;
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + taxAmount.toFixed(2);
document.getElementById('shipping_cell').innerHTML = '$' +shippingCharge.toFixed(2);
