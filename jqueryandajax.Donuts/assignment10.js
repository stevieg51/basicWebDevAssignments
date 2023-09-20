$(document).ready(function () {
  fetch("donut.json")
    .then((input) => input.json())
    .then(function x(ij) {
      var incrim = 1;
      var batter = " ";

      numBatters = ij.batters.length;
      for (i = 0; i < numBatters; i++) {
        batter +=
          '<option value="' + incrim + '">' + ij.batters[i].type + "</option> ";
        incrim++;
      }

      incrim = 1;
      var topping = " ";
      numToppings = ij.toppings.length;
      for (i = 0; i < numToppings; i++) {
        topping +=
          '<option value="' +
          incrim +
          '">' +
          ij.toppings[i].type +
          "</option> ";
        incrim++;
      }

      var type = ' ';
      numTypes = ij.types.length;
      for (i = 0; i < numTypes; i++) {
        type +=
          '<option value="' + incrim + '">' + ij.types[i].name + "</option> ";
        incrim++;
      }

      var topprice = 0;

      //gets specific topping in option
      $("#toppering").click(function () {
        var theTopping = $("#toppering option:selected").text();
        // console.log(theTopping);
        for (i = 0; i < numToppings; i++)
          if (ij.toppings[i].type === theTopping) {
            topprice = parseFloat(ij.toppings[i].price);
          }
      });

      var batPrice = 0;
      //gets specific batter in option
      $("#battering").click(function () {
        var theBatter = $("#battering option:selected").text();
        // console.log(theBatter);
        for (i = 0; i < numBatters; i++)
          if (ij.batters[i].type === theBatter) {
            batPrice = parseFloat(ij.batters[i].price);
          }
      });

      var typePrice = 0;
      $("#dTypes").click(function () {
        var thetype = $("#dTypes option:selected").text();
        // console.log(theBatter);
        for (i = 0; i < numTypes; i++)
          if (ij.types[i].name === thetype) {
             typePrice = parseFloat(ij.types[i].price);
          }
      });

      var total = 0;
      $("#theMain").click(function () {
        total = batPrice + topprice +typePrice;
        $("#price").html(total);
        console.log(total);
        $("#price").attr("class", "animate__animated animate__bounce");
      });



      $("#dTypes").html(type)
      $("#battering").html(batter);
      $("#toppering").html(topping);
      $("#price").html(total);
    });
});
