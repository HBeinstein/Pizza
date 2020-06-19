function Pizza(size, sauce) {
  this.size = size
  this.sauce = sauce
  this.toppings = []
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
  if(this.sauce === "pesto"|| this.sauce === "alfredo") {
    this.totalPrice += 2;
  }
}

Pizza.prototype.calcToppingPrice = function() {
  this.totalPrice += this.toppings.length;
}

$(document).ready(function() {
    $("#pizza-selection-form").submit(function() {
      event.preventDefault()
      newUserPizza = new Pizza($("#pizza-size").val(), $("#pizza-sauce").val())
      
      $("input:checkbox[name=topping]:checked").each(function(){
        newUserPizza.toppings.push($(this).val());
      });

      newUserPizza.calcSizePrice();
      newUserPizza.calcSaucePrice();
      newUserPizza.calcToppingPrice();
      console.log(newUserPizza);

      $(".form-container-original").hide();
      $("#pizza-price").append(`<p>Your total pizza price will be: $${newUserPizza.totalPrice}!</p>`)
      $(".form-container-displayed-price").show();
    });

    $( "#get-more-pizza" ).click(function() {
      location.reload();
    });
});