function pizza(size, crust, toppings, delivery) {
  this.pizzaSize = size;
  this.pizzaCrust = crust;
  this.pizzaTops = toppings;
  this.pizzaAccess = delivery;
}
var pizzaPrice;
var crustPrice;
var topPrice;
var deliveryPrice;
var total;

$(document).ready(function () {
  var size = $("select.sizes").change(function () {
    var selectedSize = $(this).children("option:selected").val();
    $("ul").append("<li><span>" + selectedSize + "</span></li>");
  });
  var crusts = $("select.crusts").change(function () {
    var selectedCrust = $(this).children("option:selected").val();
    $("ul").append("<li><span>" + selectedCrust + "</span></li>");
  });
  var tops = $("select.tops").change(function () {
    var selectedTops = $(this).children("option:selected").val();
    $("ul").append("<li><span>" + selectedTops + "</span></li>");
  });
  var accesses = $("select.access").change(function () {
    var selectedAccess = $(this).children("option:selected").val();
    $("ul").append("<li><span>" + selectedAccess + "</span></li>");
  });
 

var newPizza = new pizza(sizes, crusts, tops, accesses);
pizza.prototype.total=function(){
if (selectedAccess = Delivered){
  deliveryPrice  = 200;

if (selectedSize = Large){
pizzaPrice = 1000;
crustPrice = 100;
topPrice = 150;
}
else if (selectedSize = Medium){
  pizzaPrice = 1000;
crustPrice = 100;
topPrice = 100;
}
else if (selectedSize = Small){
  pizzaPrice = 600;
crustPrice = 100;
topPrice = 50;
}
}
else {
  alert("Pick A pizza size")
}
}

 
});