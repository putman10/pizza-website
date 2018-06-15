// Business Logic
function Reciept (userName) {
  this.name = userName;
  // totalCost = pizza + pizza
}

function Pizza () {
  this.size = "";
  this.toppings = [];
  this.cost = "";
}


Pizza.prototype.calculateCost = function() {
  return (cost)
}

// Create a pizza object constructor with properties for toppings and size.
//




// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

// User Interface Logic

$(document).ready(function() {

  $("#start-order").click(function() {
    var userName = $("input#user-name").val();
    var reciepts = new Reciept(userName);
    $("#user-name-fields").hide();
    $("span#user-name-span").text(userName);
    $("#pizza-customizer").fadeIn(2000);

    $(".col-md-2").click(function() {
      $(this).toggleClass("selected-topping");
    });
  });

});
