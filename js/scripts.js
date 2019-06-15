function pizza(size, crust, toppings, delivery) {
  this.pizzaSize = size;
  this.pizzaCrust = crust;
  this.pizzaTops = toppings;
  this.pizzaAccess = delivery;
}

$(document).ready(function () {
  $("placeOrder").click(function () { 
   
    
  
  var sizes = $("select.sizes").change(function () {
    var selectedSize = $(this).children("option:selected").val();

  });
  var crusts = $("select.crusts").change(function () {
    var selectedCrust = $(this).children("option:selected").val();
  });
  var tops = $("select.tops").change(function () {
    var selectedTops = $(this).children("option:selected").val();
  });
  var accesses = $("select.access").change(function () {
    var selectedAccess = $(this).children("option:selected").val();
  });
  var newPizza = new pizza(sizes,crusts,tops,accesses);
  $("ul").append("<li><span>" + newPizza.selectedSize + "</span></li>");
});
  

});
