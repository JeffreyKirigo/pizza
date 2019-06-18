function placeOrder(size, crust, topping,access) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.access=access;
  this.price = 0;
}
var totalPrice = [];

var pizzaSize = ["Large", "Medium", "Small"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-Free"];
var pizzaTopping = ["Pepperoni", "Onions", "Extra-Cheese", "Black-Olives", "Green-pepper"];
var pizzaAccess = ["pick", "delivery"];

placeOrder.prototype.pizzaCost = function () {
  if (this.size === pizzaSize[0]) {
    this.price += 1000;
  }
  else if (this.size === pizzaSize[1]) {
    this.price += 800;
  }
  else if (this.size === pizzaSize[2]) {
    this.price += 600;
  }

  if (this.crust === pizzaCrust[0]) {
    this.price += 200;
  }
  else if (this.crust === pizzaCrust[1]) {
    this.price + 150;
  }
  else if (this.crust === pizzaCrust[2]) {
    this.price += 100;
  }

  if (this.topping === pizzaTopping[0]) {
    this.price += 100;
  }
  else if (this.topping === pizzaTopping[1]) {
    this.price += 150;
  }
  else if (this.topping === pizzaTopping[2]) {
    this.price += 100;
  }
  else if (this.topping === pizzaTopping[3]) {
    this.price += 150;
  }
  else if (this.topping === pizzaTopping[3]) {
    this.price += 100;
  }
  if (this.access === pizzaAccess[0]){
    this.price +=0;
  }
  else if(this.access ===pizzaAccess[1]){
    this.price +=200;
  }
  return this.price;
}

placeOrder.prototype.costOfDelivery = function () {
  return this.deliveryFee;
}
placeOrder.prototype.totalCost = function () {
  var shoppingCartTotal = 0;
  for (var order = 0; order < totalPrice.length; order++) {
    shoppingCartTotal += totalPrice[order];
  }
  return shoppingCartTotal;
}
$(document).ready(function () {
  $("input#placeOrder").click(function (event) {
    event.preventDefault();
    var sizes = $("select#sizes").val();
    var crusts = $("select#crusts").val();
    var toppings = $("select#tops").val();
    var access = $("select#pickit").val();
    var newPizzas = new placeOrder(sizes, crusts, toppings,access);
    newPizzas.pizzaCost();
    totalPrice.push(newPizzas.price);
    $("#sizey").text("pizza :" + sizes);
    $("#crustey").text("crusts :" + crusts);
    $("#toopie").text("topping :" + toppings);
    $("#pickie").text("This is how you Access your order :" + access);
    $("#costie").text("total cost :" + newPizzas.totalCost());
  });
});
