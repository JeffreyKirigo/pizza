
function pizza(size, crust, toppings) {
  this.pizzaSize = size;
  this.pizzaCrust = crust;
  this.pizzaTops = toppings;
  this.pizzaPrice = 0;
}

var pizzaSize = ["Large", "Medium", "Small"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-Free"];
var pizzaTops = ["Pepperoni", "Extra-Cheese", "Green-pepper", "Black-Olives"];
var cost = [];


/**pizza size to pizza sizes */

pizza.prototype.price = function () {
  if (this.pizzaSize === pizzaSize[0]) {
    pizzaPrice +=1000;
  }
  else if (this.pizzaSize === pizzaSize[1]) {
    pizzaPrice +=800;
  }
  else if (this.pizzaSize === pizzaSize[2]) {
    pizzaPrice +=600;
  }

  /*pizza crust to pizza size to pizza price */

  if (this.pizzaCrust === pizzaCrust[0]) {
    pizzaPrice +=150;
  }
  else if (this.pizzaCrust === pizzaCrust[1]) {
    pizzaPrice +=100;
  }
  else if (this.pizzaCrust === pizzaCrust[2]) {
    pizzaPrice +=50;
  }

  /**pizza size to pizza toppings */

  if (this.pizzaTops === pizzaTops[0]) {
    pizzaPrice +=150;
  }
  else if (this.pizzaTops === pizzaTops[1]) {
    pizzaPrice +=100;
  }
  else if (this.pizzaTops === pizzaTops[2]) {
    pizzaPrice +=50;
  }
  else if (this.pizzaTops === pizzaTops[3]) {
    pizzaPrice +=50;
  }
  return this.pizzaPrice;
}

pizza.prototype.deliveryCost = function () {
  return this.deliveryCharges;
}

pizza.prototype.grandTotal = function () {
  var checkoutCartTotal = this.pizzaPrice;

  for (var order = 0; order < cost.length; order++ ) {
    checkoutCartTotal += cost[order];
  }
  return checkoutCartTotal;
}

$(document).ready(function () {
  $("#placeOrder").click(function (e) {
    e.preventDefault();



    var sizes = $("select.sizes").val(); 
    var crusts = $("select.crusts").val();
    var tops = $("select.tops").val();


    var newPizzas = new pizza(sizes, crusts, tops);
    newPizzas.price();
    cost.push(newPizzas.pizzaPrice);
    $(".sizey").text("Sizes: " + sizes);
    $(".crustey").text("Crusts: " + crusts);
    $(".toopie").text("Toppings: " + tops);
    $(".costie").text("Cost: " + newPizzas.grandTotal());
  });
});
  // size = $("select.sizes").change(function () {
  //   var selectedSize = $(this).children("option:selected").val();
  //   $("ul").append("<li><span>" + selectedSize + "</span></li>");
  // });
  // var crusts = $("select.crusts").change(function () {
  //   var selectedCrust = $(this).children("option:selected").val();
  //   $("ul").append("<li><span>" + selectedCrust + "</span></li>");
  // });
  // var tops = $("select.tops").change(function () {
  //   var selectedTops = $(this).children("option:selected").val();
  //   $("ul").append("<li><span>" + selectedTops + "</span></li>");
  // });
  // var accesses = $("select.access").change(function () {
  //   var selectedAccess = $(this).children("option:selected").val();
  //   $("ul").append("<li><span>" + selectedAccess + "</span></li>");
  // });

