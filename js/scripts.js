// Business Logic
function Receipt (userName) {
  this.name = userName;
  // totalCost = pizza + pizza
}

function Pizza (userName, size, proteins, veggies) {
  this.name = userName;
  this.size = size;
  this.proteins = proteins;
  this.veggies = veggies;
}


Pizza.prototype.calculateCost = function() {
  console.log(this.size);
  if (this.size === "1") {
    return (((this.veggies).length) * 1) + (((this.proteins).length) * 1.50) + 15;
  } else if (this.size === "2") {
    return(((this.veggies).length) * 1) + (((this.proteins).length) * 1.50) + 17;
  } else {
    return(((this.veggies).length) * 1) + (((this.proteins).length) * 1.50) + 20;
  }
  return
}

// Create a pizza object constructor with properties for toppings and size.
//




// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

// User Interface Logic

$(document).ready(function() {

  $("#start-order").click(function() {
    var userName = $("input#user-name").val();
    var receipts = new Receipt(userName);
    var proteins = [];
    var veggies = [];
    $("#user-name-fields").hide();
    $("span#user-name-span").text(userName);
    $("#pizza-customizer").fadeIn();



    $("#protein .col-md-2").click(function() {
      var $this = $(this);
      $(this).toggleClass("selected-topping");

      if ($this.hasClass('selected-topping')) {
       proteins.push($(this).attr('id'));
       $(".proteins-selected").html("<b>Proteins:</b>  " + proteins.join(', ') + "<br>");
      } else {
        proteins.splice(proteins.indexOf($(this).attr('id')), 1);
        $(".proteins-selected").html("<b>Proteins:</b> " + proteins.join(', ') + "<br>");
      }

      return proteins
    });

    $("#veggies .col-md-2").click(function() {
      var $this = $(this);
      $(this).toggleClass("selected-topping");

      if ($this.hasClass('selected-topping')) {
       veggies.push($(this).attr('id'));
       $(".veggies-selected").html("<b>Veggies:</b>  " + veggies.join(', ') + "<br>");
      } else {
        veggies.splice(veggies.indexOf($(this).attr('id')), 1);
        $(".veggies-selected").html("<b>Veggies:</b>  " + veggies.join(', ') + "<br>");
      }

      return veggies
    });

    $("#add-to-cart").click(function() {
      var size = $('input[name="size"]:checked').val();
      var pizza = new Pizza(userName, size, proteins, veggies);
      $("#protein .col-md-2").removeClass("selected-topping");
      $("#veggies .col-md-2").removeClass("selected-topping");
      proteins = [];
      veggies = [];
      var cost = pizza.calculateCost();

      $(".proteins-selected").text("");
      $(".veggies-selected").text("");
      $(".price").text(cost);

debugger;
      if (pizza.proteins.length == 0 && pizza.veggies.length == 0) {
        $(".proteins-final").text("cheese");
      } else if (pizza.proteins.length > 0 && pizza.veggies.length == 0) {
        $(".proteins-final").text(pizza.proteins.join(', '));
      } else if (pizza.proteins.length == 0 && pizza.veggies.length > 0) {
        $(".proteins-final").text("");
        $(".veggies-final").text(pizza.veggies.join(', '));
      } else {
        $(".proteins-final").text(pizza.proteins.join(', ') + ", ");
        $(".veggies-final").text(pizza.veggies.join(', '));
      }

      $("#results").fadeIn();

    });
  });

});
