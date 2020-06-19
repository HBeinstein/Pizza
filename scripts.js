function Pizza(size, sauce, toppings) {
  this.size = size
  this.sauce = sauce
  this.toppings = toppings
  this.totalPrice = 0;
}

Pizza.prototype.calcSizePrice = function() {
  if(this.size === "small") {
    this.totalPrice += 10;
  } else if(this.size === "medium") {
    this.totalPrice += 12; 
  } else if (this.size === "large") {
    this.totalPrice += 14;
  } else {
    console.log("error");
  }
}

Pizza.prototype.calcSaucePrice = function() {
  if(this.sauce === "pesto") {
    this.totalPrice += 2;
  }
}

Pizza.prototype.calcToppingPrice = function() {
  this.totalPrice += this.toppings.length * .5;
}



$(document).ready(function() {

  joesPizza = new Pizza("medium", "pesto", ["mushrooms", "basil", "tomato", "garlic"])
  
  joesPizza.calcSizePrice();
  joesPizza.calcSaucePrice();
  joesPizza.calcToppingPrice();
  console.log(joesPizza);
  
});