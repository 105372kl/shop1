var products = [["#","Desc ","Stock","Price"],["__","______","____","_____"]];
var cart = [];
var money = 10;
var myStuff = [];

function goShopping(){
    showItems();
    let toBuy = prompt("Item Number to buy?");
    let buyItem = [products[toBuy][1],products[toBuy][3]];
    cart.push(buyItem);
        let buy = confirm("You want to buy a "+buyItem[0] + " for $"+buyItem[1]);
    if (buy == true){
        products[toBuy][2]--;
        let due = products[toBuy][3];
        money -= due;
        alert("You have $"+ money +" left");
        myStuff.push(cart);
        cart = [];
    }
}

function showCart() {
    let cartBox = cart.getElementById("cart");
    cartBox.innerHTML = cart.join("  ");
}

function shop(){
    alert(products);
    let index = prompt("Which product?");
    let quantity = prompt("Buy how many?");
    let old = products[index][2];
    let newq = old - quantity;
    products[index][2] = newq;
}

function showItems(){
    let storeMenu = "Shopping List \n";
    for (let count = 0; count < products.length; count++){
       storeMenu += products[count].join("         ")+"\n";  // NOTE WE FIXED THIS
    }
    alert(storeMenu);
}

function stockShelves(){
  let index = products.length-1;
  let name = prompt("Next item?");
  let quantity = parseInt(prompt("How many"));
  let price = prompt("How much?");
  let nextItem = [index,name,quantity,price];
  products.push(nextItem);
}