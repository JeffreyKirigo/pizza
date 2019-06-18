
function pizza(size, crust, toppings) {
  this.pizzaSize = size;
  this.pizzaCrust = crust;
  this.pizzaTops = toppings;
  this.pizzaPrice = 0;
}
var cost = [];
var pizzaSize = ["Large", "Medium", "Small"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-Free"];
var pizzaTops = ["Pepperoni", "Onions", "Black-Olives", "Green-pepper"];

pizza.prototype.price = function () {
  if (this.pizzaSize === pizzaSize[0]) {
    pizzaPrice += 1000;
  }
  else if (this.pizzaSize === pizzaSize[1]) {
    pizzaPrice += 800;
  }
  else if (this.pizzaSize === pizzaSize[2]) {
    pizzaPrice += 600;
  }
  if (this.pizzaCrust === pizzaCrust[0]) {
    pizzaPrice += 150;
  }
  else if (this.pizzaCrust === pizzaCrust[1]) {
    pizzaPrice += 100;
  }
  else if (this.pizzaCrust === pizzaCrust[2]) {
    pizzaPrice += 50;
  }

  if (this.pizzaTops === pizzaTops[0]) {
    pizzaPrice += 150;
  }
  else if (this.pizzaTops === pizzaTops[1]) {
    pizzaPrice += 100;
  }
  else if (this.pizzaTops === pizzaTops[2]) {
    pizzaPrice += 50;
  }
  else if (this.pizzaTops === pizzaTops[3]) {
    pizzaPrice += 50;
  }
  return this.pizzaPrice;
}

pizza.prototype.deliveryCost = function () {
  return this.deliveryCharges;
}

pizza.prototype.grandTotal = function () {
  var checkoutCartTotal = 0;

  for (var order = 0; order < cost.length; order++) {
    checkoutCartTotal += cost[order];
  }
  return checkoutCartTotal;
}

$(document).ready(function () {
  $("#placeOrder").click(function () {

    var sizes = $("select.sizes").val();
    var crusts = $("select.crusts").val();
    var tops = $("select.tops").val();
    var newPizzas = new pizza(sizes, crusts, tops);
    cost.push(newPizzas.pizzaPrice);
    newPizzas.price();
    $("#sizey").text("Sizes: " + sizes);
    $("#crustey").text("Crusts: " + crusts);
    $("#toopie").text("Toppings: " + tops);
    $("#costie").text("Cost: " + newPizzas.grandTotal());
  });
});


