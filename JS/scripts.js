function Pizza(size, sauce, toppings) {
  this.size = size
  this.sauce = sauce
  this.toppings = toppings
  this.totalPrice = 0;
}

Pizza.prototype.calcTotalPrice = function() {
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


$(document).ready(function() {

});