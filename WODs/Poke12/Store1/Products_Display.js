//define store name and push it to the DOM in the top title
const store_name="Evan";
top_title.innerHTML=(store_name + "'s Used Smart Phone Store");

bottom_title.innerHTML=("Your one stop shop for used phones - "+store_name+"'s");


//initialize hits and spins and send to the DOM
let hits=0;
let spins=0;
//let wins;
let over_half=false;
hits_span.innerHTML=hits;
spins_span.innerHTML=spins;

/*
let name1 = "HTC";
let price1 = 40.00;
let image1 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg";

let name2 = "Apple";
let price2 = 75.00;
let image2 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg";

let name3 = "Nokia";
let price3 = 35.00;
let image3 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg";

let name4 = "Samsung";
let price4 = 45.00;
let image4 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg";

let name5 = "Blackberry";
let price5 = 10.00;
let image5 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg";

*/


//poke 9 3.
const product1 = {
    brand: "HTC",
    price:40.00,
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg",
};

const product2 = {
    brand:"Apple",
    price:75.00,
    image:"http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg",
};

const product3 = {
    brand:"Nokia",
    price:35.00,
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg",
};

const product4 = {
    brand:"Samsung",
    price:45.00,
    image:"http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg",
};

const product5 = {
    brand:"Blackberry",
    price:10.00,
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg",
};
//poke 9 4.
const products = [product1, product2, product3, product4, product5]

//poke 9 5.




for (let i=0; i < products.length; i++) {
    const product = products[i];
    document.querySelector('.main').innerHTML += `
    <section class="item">
        <h2>${product.brand}</h2>
        <p>$${product.price}</p>
        <img src="${product.image}" onmouseover="changeClassName(this);" onclick="resetClassName(this);" />
        <label id="quantity${i}_label" for="quantity${i}">Quantity Desired</label>
        <input type="text" name="quantity${i}" id="quantity${i}">
    </section>`;
}


//this should be two functions or more but... it changes the item name to rotate for the images and updates
function changeClassName(element) {
    if(element.className=='item'){
        spins=spins+1;
        element.className = 'item rotate';
    } 
    //spins=spins+1; 
    if(spins<2*hits&&hits<spins){
        //wins=true;
        over_half=true;
    } else {
        //wins=false;
    }
    //win_span.innerHTML=wins;
    win_span.innerHTML=over_half;
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=(hits/spins).toFixed(2);
   // -- Winning progress depends on hits/spins
hits_spins_ratio = hits/spins;
let progress;
/*if ( hits_spins_ratio > 0 ) {
    progress = 'On your way!';
    if ( hits_spins_ratio >= 0.25 ) {
        progress = 'Almost there!';
        if ( hits_spins_ratio >= 0.5 ) {
            if( hits < spins) { 
                progress = 'You win!';
            }
        }
    }
}
else {
    progress = 'Get going!' ;
} */
if ( hits_spins_ratio >= 0.5 && hits<spins) {
    if( hits < spins) { 
        progress = 'You win!';
    }
    } else if (hits_spins_ratio>=0.25){
        progress='Almost there!';
    } else if (hits_spins_ratio>0) {
        progress='On your way!';
    }
    else{
        progress ='Get going!';
    }
    win_span.innerHTML=progress;
}


//this should be two functions or more but... it changes the item name by removing the rotate for the images and
function resetClassName(element){
    if(element.className=='item rotate'){
        element.className='item';
        hits=hits+=2;
    } else{
        changeClassName(element);
    }
   
    
    if(spins<2*hits&&hits<spins){
        //wins=true;
        over_half=true;
    } else {
        //wins=false;
    }
    //win_span.innerHTML=wins;
    win_span.innerHTML=over_half;
    spins_span.innerHTML=spins;
    hit_spin_span.innerHTML=(hits/spins).toFixed(2)
    
     // -- Winning progress depends on hits/spins
     let hits_spins_ratio = hits/spins;
     let progress
     /*if ( hits_spins_ratio > 0 ) {
         progress = 'On your way!';
         if ( hits_spins_ratio >= 0.25 ) {
             progress = 'Almost there!';
             if ( hits_spins_ratio >= 0.5 ) {
                 if( hits < spins) { 
                     progress = 'You win!';
                 }
             }
         }
     }
     else {
         progress = 'Get going!' ;
     }*/
 
     if(hits_spins_ratio >= 0.5 && hits<spins) {
             progress='You win!';
     } else if(hits_spins_ratio >= 0.25) {
         progress='Almost there!';
     } else if(hits_spins_ratio>0) {
         progress='On your way!';
     }
     else {
         progress='Get going!';
     }
     win_span.innerHTML=progress;
 

}