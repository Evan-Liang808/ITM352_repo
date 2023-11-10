let express = require('express');
let app = express();

// part 2.2a Add a route for GET requests to the path '/test'
app.get('/test', function (request, response) {
    response.send('GET request to path /test - sal says hey');
});

app.all('*', function (request, response, next) {
    console.log(request.method + ' to path ' + request.path);
    next();
});

app.use(express.urlencoded({ extended: true }));

//part 3a 
/*
app.post("/process_form", function (request, response) {
    //response.send(request.body); 
    var q = request.body['qty_textbox'];
    if (typeof q != 'undefined') {
        response.send(`Thank you for purchasing ${q} things!`);
    } else {
        response.send('Invalid quantity specified.');
    }
 });
*/
 app.post("/process_form", function (request, response) {
    let q = parseInt(request.body['qty_textbox']);
    console.log("the input value is:"+q);
    let validationMessage = validateQuantity(q);
    
    if (validationMessage === "") {
        response.send(`Thank you for purchasing ${q} things!`);
    } else {
        response.send(validationMessage);
    }
});

function validateQuantity(quantity) {
    let errorMessage = "";
  
    switch (true) {
        case isNaN(quantity):
            errorMessage = "Not a number. Please enter a non-negative quantity to order.";
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

//part 2c
app.use(express.static(__dirname + '/public'));

app.listen(8080, () => console.log(`listening on port 8080`));