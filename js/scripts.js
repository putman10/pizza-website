// Business Logic
function Receipt (userName) {
  this.name = userName;
  // totalCost = pizza + pizza
}

function Pizza (userName, proteins, veggies) {
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
$("#pizza-customizer").fadeIn(2000);
  $("#start-order").click(function() {
    var userName = $("input#user-name").val();
    var receipts = new Receipt(userName);
    var proteins = [];
    var veggies = [];
    $("#user-name-fields").hide();
    $("span#user-name-span").text(userName);
    // $("#pizza-customizer").fadeIn(2000);
console.log(veggies);

    $(".col-md-2").click(function() {
      var $this = $(this).attr('class');
console.log($this);
      $(this).toggleClass("selected-topping");
      $(this. img).toggleClass("select");
      // var veggies = $(this).attr('id');

      if ($this.is('.selected-topping')) {
       veggies.push($(this).attr('id'));
      } else {
       veggies.splice[$(this).attr('id')];
      }
    });

    $("#add-to-cart").click(function() {
      var pizza = new Pizza(userName, proteins, veggies);
    });
  });

});
