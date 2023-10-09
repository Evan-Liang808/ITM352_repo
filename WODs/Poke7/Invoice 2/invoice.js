//Product 1
let item1 = 'Gillette Sensor 3 Razor';
let quantity1 = 2;
let price1 = 1.23;
let extended_price1 = quantity1*price1;
//Product 2
let item2 = 'Barbasol Shaving Cream';
let quantity2 = 1;
let price2 = 2.64;
let extended_price2 = quantity2*price2;
//Product 3
let item3 = 'Nautica Cologne';
let quantity3 = 1;
let price3 = 6.17;
let extended_price3 = quantity3*price3;
//Product 4
let item4 = 'Rubbing Alcohol';
let quantity4 = 3;
let price4 = .98;
let extended_price4 = quantity4*price4;
//Product 5
let item5 = 'Colgate Classic Toothbrush';
let quantity5 = 12;
let price5 = 1.89;
let extended_price5 = quantity5*price5;

//calculate subtotal
let subTot = (extended_price1+extended_price2+extended_price3+extended_price4+extended_price5);

//calculate tax
let tax = (subTot*0.0575);

//calculate shipping
let shipping;
if (subTot<=50)
{
   shipping=2;
}
else if  (subTot<=100)
{
   shipping=5;
}
else{
   shipping=subTot*.05;
}

//calculate final total
let total = tax+shipping+subTot;

//item row 1
var row = invoiceTable.insertRow();
   row.insertCell().innerHTML = item1; 
   row.insertCell().innerHTML = quantity1;
   row.insertCell().innerHTML = price1.toFixed(2);
   row.insertCell().innerHTML = extended_price1;
//item row 2
var row = invoiceTable.insertRow();
   row.insertCell().innerHTML = item2; 
   row.insertCell().innerHTML = quantity2;
   row.insertCell().innerHTML = price2.toFixed(2);
   row.insertCell().innerHTML = extended_price2;
//item row 3
var row = invoiceTable.insertRow();
   row.insertCell().innerHTML = item3; 
   row.insertCell().innerHTML = quantity3;
   row.insertCell().innerHTML = price1.toFixed(3);
   row.insertCell().innerHTML = extended_price3;
//item 4
var row = invoiceTable.insertRow();
   row.insertCell().innerHTML = item4; 
   row.insertCell().innerHTML = quantity4;
   row.insertCell().innerHTML = price1.toFixed(4);
   row.insertCell().innerHTML = extended_price4;
//item 5
var row = invoiceTable.insertRow();
   row.insertCell().innerHTML = item5; 
   row.insertCell().innerHTML = quantity5;
   row.insertCell().innerHTML = price1.toFixed(5);
   row.insertCell().innerHTML = extended_price5;

   //fill in values for footer rows
document.getElementById("subtotal_cell").innerHTML = "$" + subTot.toFixed(2);
document.getElementById("tax_cell").innerHTML = "$" + tax.toFixed(2);
document.getElementById("shipping_cell").innerHTML = "$" + shipping.toFixed(2);
document.getElementById("total_cell").innerHTML = "$" + total.toFixed(2);

