console.log("connected");

var cubFtTotal = document.querySelector("#cubFtTotal");
var cubMtrTotal = document.querySelector("#cubMtrTotal");
var pcsTotal = document.querySelector("#pcsTotal");

var tableTotal = {
  lounge: 0,
  study: 0,
  dining: 0,
  kitchen: 0,
  nursery: 0,
  bedroom: 0,
  garden: 0,
  loft: 0,
  other: 0,
  additional: 0
};
var tableQtTotal = {
  lounge: 0,
  study: 0,
  dining: 0,
  kitchen: 0,
  nursery: 0,
  bedroom: 0,
  garden: 0,
  loft: 0,
  other: 0,
  additional: 0
};
roomTotal("lounge");
roomTotal("study");
roomTotal("dining");
roomTotal("kitchen");
roomTotal("nursery");
roomTotal("bedroom");
roomTotal("garden");
roomTotal("loft");
roomTotal("other");
roomTotal("additional");

function roomTotal(id) {

  var v = "#" + id;

  var Vol = document.querySelectorAll(v + " .vol input");
  var Qty = document.querySelectorAll(v + " .qty input");
  var te = document.querySelectorAll(v + " .total input");
  var rw = document.querySelectorAll(v + " tr");

  for (var i = 0; i < rw.length; i++) { ///////////// Adds grey background to every 2nd row.
    console.log("4 tr rows for loft is " + rw.length);
    if ((i % 2) === 0) {
      rw[i].classList.add('bgd-grey');
    } else {}
  }
  /////////////
  for (var i = 0; i < Vol.length; i++) {

    Vol[i].addEventListener("click", function() { //highlights the value when clicked
      this.select();
    })

    Qty[i].addEventListener("click", function() {
      this.select();
    })
    ////////////

    Vol[i].addEventListener("keyup", function() { // Adds function to Qty inputs
      var sum = 0;
      var qsum = 0;
      for (var i = 0; i < Vol.length; i++) {
        te[i].value = Vol[i].value * Qty[i].value; //Calculates sum of each row

        sum += Number(te[i].value);
        console.log("sum is " + sum);
        qsum += Number(Qty[i].value);
        console.log("qsum is " + qsum);
      }
      //console.log("sum = 10 = " + sum);
      //console.log("loftSum is " + Total);
      tableTotal[id] = sum;
      console.log("tableTotal is " + sum);
      tableQtTotal[id] = qsum;
      console.log("tableQtyTotal is " + qsum);
      //////////////////////////
      //console.log("sum =" + sum)
      //console.log("Total is " + Total + " and sum is " + sum);
      //console.log("Sum is " + Sum);
      //Total == sum;
      //totalSum(Total);
      totalCub();
      totalQtFin();
      cubMtrConvert();

    })
    Qty[i].addEventListener("keyup", function() { // Adds function to Qty inputs
      var sum = 0;
      var qsum = 0;
      for (var i = 0; i < Vol.length; i++) {
        te[i].value = Vol[i].value * Qty[i].value; //Calculates sum of each row

        sum += Number(te[i].value);
        console.log("sum is " + sum);
        qsum += Number(Qty[i].value);
        console.log("qsum is " + qsum);
      }
      //console.log("sum = 10 = " + sum);
      //console.log("loftSum is " + Total);
      tableTotal[id] = sum;
      console.log("tableTotal is " + sum);
      tableQtTotal[id] = qsum;
      console.log("tableQtyTotal is " + qsum);
      //////////////////////////
      //console.log("sum =" + sum)
      //console.log("Total is " + Total + " and sum is " + sum);
      //console.log("Sum is " + Sum);
      //Total == sum;
      //totalSum(Total);
      totalCub();
      totalQtFin();
      cubMtrConvert();

    })
    ////////////
  }
}

function totalCub() {
  cubFtTotal.value = Number(tableTotal["lounge"]) + Number(tableTotal["study"]) + Number(tableTotal["dining"]) + Number(tableTotal["kitchen"]) + Number(tableTotal["nursery"]) + Number(tableTotal["bedroom"]) + Number(tableTotal["garden"]) + Number(tableTotal["loft"]) + Number(tableTotal["other"]) + Number(tableTotal["additional"]);
}

function totalQtFin() {
  pcsTotal.value = tableQtTotal["lounge"] + tableQtTotal["study"] + tableQtTotal["dining"] + tableQtTotal["kitchen"] + tableQtTotal["nursery"] + tableQtTotal["bedroom"] + tableQtTotal["garden"] + tableQtTotal["loft"] + tableQtTotal["other"] + tableQtTotal["additional"];
  console.log(cubFtTotal);
}

function cubMtrConvert() {
  cubMtrTotal.value = parseFloat(cubFtTotal.value / 35.31).toFixed(2);;
}
