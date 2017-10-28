console.log("connected");

var cubFtTotal = document.querySelector("#cubFtTotal");
var cubMtrTotal = document.querySelector("#cubMtrTotal");
var pcsTotal = document.querySelector("#pcsTotal");

var loungeTotArr = [];
var studyTotArr = [];
var diningTotArr = [];
var kitchenTotArr = [];
var nurseryTotArr = [];
var bedroomTotArr = [];
var gardenTotArr = [];
var loftTotArr = [];
var otherTotArr = [];
var additionalTotArr = [];

var loungeQtArr = [];
var studyQtArr = [];
var diningQtArr = [];
var kitchenQtArr = [];
var nurseryQtArr = [];
var bedroomQtArr = [];
var gardenQtArr = [];
var loftQtArr = [];
var otherQtArr = [];
var additionalQtArr = [];

var loungeTotal = 0;
var studyTotal = 0;
var diningTotal = 0;
var kitchenTotal = 0;
var nurseryTotal = 0;
var bedroomTotal = 0;
var gardenTotal = 0;
var loftTotal = 0;
var otherTotal = 0;
var additionalTotal = 0;

var loungeQtTotal = 0;
var studyQtTotal = 0;
var diningQtTotal = 0;
var kitchenQtTotal = 0;
var nurseryQtTotal = 0;
var bedroomQtTotal = 0;
var gardenQtTotal = 0;
var loftQtTotal = 0;
var otherQtTotal = 0;
var additionalQtTotal = 0;

roomTotal("lounge", loungeTotArr, loungeQtArr, "loungeTotal", "loungeQtTotal");
roomTotal("study", studyTotArr, studyQtArr, "studyTotal", "studyQtTotal");
roomTotal("dining", diningTotArr, diningQtArr, "diningTotal", "diningQtTotal");
roomTotal("kitchen", kitchenTotArr, kitchenQtArr, "kitchenTotal", "kitchenQtTotal");
roomTotal("nursery", nurseryTotArr, nurseryQtArr, "nurseryTotal", "nurseryQtTotal");
roomTotal("bedroom", bedroomTotArr, bedroomQtArr, "bedroomTotal", "bedroomQtTotal");
roomTotal("garden", gardenTotArr, gardenQtArr, "gardenTotal", "gardenQtTotal");
roomTotal("loft", loftTotArr, loftQtArr, loftTotal, "loftQtTotal");
roomTotal("other", otherTotArr, otherQtArr, "otherTotal", "otherQtTotal");
roomTotal("additional", additionalTotArr, additionalQtArr, "additionalTotal", "additionalQtTotal");

function roomTotal(id, Sum, qSum, Total, Qt) {

  var v = "#" + id;
  console.log("#loft is " + v + " loftTotArr is " + Sum + " loftTotal is" + Total);
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

    Vol[i].addEventListener("keyup", function() { // Adds function to Vol inputs
      //var sum = 0;
      for (var i = 0; i < Vol.length; i++) {
        te[i].value = Vol[i].value * Qty[i].value; //Calculates sum of each row

        Sum[i] = Number(te[i].value); //Adds to array
        qSum[i] = Number(Qty[i].value);

        //  sum += Sum[i];
      }
      //console.log("sum = 10 = " + sum);
      //console.log("loftSum is " + Total);
      //Total = sum;
      //////////////////////////
      //console.log("sum =" + sum)
      //console.log("Total is " + Total + " and sum is " + sum);
      //console.log("Sum is " + Sum);
      //Total == sum;
      totalSum(Total);
      totalQt(Qt);
      totalCub();
      totalQtFin();
      cubMtrConvert();

    })
    Qty[i].addEventListener("keyup", function() { // Adds function to Qty inputs
      //var sum = 0;
      for (var i = 0; i < Vol.length; i++) {
        te[i].value = Vol[i].value * Qty[i].value; //Calculates sum of each row

        Sum[i] = Number(te[i].value); //Adds to array
        qSum[i] = Number(Qty[i].value);

        //  sum += Sum[i];
      }
      //console.log("sum = 10 = " + sum);
      //console.log("loftSum is " + Total);
      //Total = sum;
      //////////////////////////
      //console.log("sum =" + sum)
      //console.log("Total is " + Total + " and sum is " + sum);
      //console.log("Sum is " + Sum);
      //Total == sum;
      totalSum(Total);
      totalQt(Qt);
      totalCub();
      totalQtFin();
      cubMtrConvert();

    })
    ////////////
  }
}

function totalCub() {
  cubFtTotal.value = Number(loungeTotal + studyTotal + diningTotal + kitchenTotal + nurseryTotal + bedroomTotal + gardenTotal + loftTotal + otherTotal + additionalTotal);
}

function totalQtFin() {
  pcsTotal.value = Number(loungeQtTotal + studyQtTotal + diningQtTotal + kitchenQtTotal + nurseryQtTotal + bedroomQtTotal + gardenQtTotal + loftQtTotal + otherQtTotal + additionalQtTotal);
}

function totalSum(Total) {
  console.log("activated and Total is " + Total);
  if (Total == "loungeTotal") {
    var sum = 0;
    for (var i = 0; i < loungeTotArr.length; i++) {
      sum += Number(loungeTotArr[i]);
    }
    loungeTotal = sum;
  } else if (Total == "studyTotal") {
    var sum = 0;
    for (var i = 0; i < studyTotArr.length; i++) {
      sum += Number(studyTotArr[i]);
      console.log("value of " + studyTotArr + " " + i + " is " + studyTotArr[i]);
    }
    studyTotal = sum;
  } else if (Total == "diningTotal") {
    var sum = 0;
    for (var i = 0; i < diningTotArr.length; i++) {
      sum += Number(diningTotArr[i]);
      console.log("value of " + diningTotArr + " " + i + " is " + diningTotArr[i]);
    }
    diningTotal = sum;
  } else if (Total == "kitchenTotal") {
    var sum = 0;
    for (var i = 0; i < kitchenTotArr.length; i++) {
      sum += Number(kitchenTotArr[i]);
      console.log("value of " + kitchenTotArr + " " + i + " is " + kitchenTotArr[i]);
    }
    kitchenTotal = sum;
  } else if (Total == "nurseryTotal") {
    var sum = 0;
    for (var i = 0; i < nurseryTotArr.length; i++) {
      sum += Number(nurseryTotArr[i]);
      console.log("value of " + nurseryTotArr + " " + i + " is " + nurseryTotArr[i]);
    }
    nurseryTotal = sum;
  } else if (Total == "bedroomTotal") {
    var sum = 0;
    for (var i = 0; i < bedroomTotArr.length; i++) {
      sum += Number(bedroomTotArr[i]);
      console.log("value of " + bedroomTotArr + " " + i + " is " + bedroomTotArr[i]);
    }
    bedroomTotal = sum;
  } else if (Total == "gardenTotal") {
    var sum = 0;
    for (var i = 0; i < gardenTotArr.length; i++) {
      sum += Number(gardenTotArr[i]);
      console.log("value of " + gardenTotArr + " " + i + " is " + gardenTotArr[i]);
    }
    gardenTotal = sum;
  } else if (Total == "loftTotal") {
    console.log("loftTotal is activated");
    var sum = 0;
    for (var i = 0; i < loftTotArr.length; i++) {
      sum += Number(loftTotArr[i]);
      console.log("value of " + loftTotArr + " " + i + " is " + loftTotArr[i]);
    }
    loftTotal = sum;
  } else if (Total == "otherTotal") {
    var sum = 0;
    for (var i = 0; i < otherTotArr.length; i++) {
      sum += Number(otherTotArr[i]);
      console.log("value of " + otherTotArr + " " + i + " is " + otherTotArr[i]);
    }
    otherTotal = sum;
  } else if (Total == "additionalTotal") {
    var sum = 0;
    for (var i = 0; i < additionalTotArr.length; i++) {
      sum += Number(additionalTotArr[i]);
      console.log("value of " + additionalTotArr + " " + i + " is " + additionalTotArr[i]);
    }
    additionalTotal = sum;
  } else {
    console.log("not lounge");
  }
}

function totalQt(Qt) {
  console.log("Qt value is " + Qt);
  if (Qt == "loungeQtTotal") {
    var sum = 0;
    for (var i = 0; i < loungeQtArr.length; i++) {
      sum += Number(loungeQtArr[i]);
    }
    loungeQtTotal = sum;
  } else if (Qt == "studyQtTotal") {
    var sum = 0;
    for (var i = 0; i < studyQtArr.length; i++) {
      sum += Number(studyQtArr[i]);
      console.log("value of " + studyQtArr + " " + i + " is " + studyQtArr[i]);
    }
    studyQtTotal = sum;
  } else if (Qt == "diningQtTotal") {
    var sum = 0;
    for (var i = 0; i < diningQtArr.length; i++) {
      sum += Number(diningQtArr[i]);
      console.log("value of " + diningQtArr + " " + i + " is " + diningQtArr[i]);
    }
    diningQtTotal = sum;
  } else if (Qt == "kitchenQtTotal") {
    var sum = 0;
    for (var i = 0; i < kitchenQtArr.length; i++) {
      sum += Number(kitchenQtArr[i]);
      console.log("value of " + kitchenQtArr + " " + i + " is " + kitchenQtArr[i]);
    }
    kitchenQtTotal = sum;
  } else if (Qt == "nurseryQtTotal") {
    var sum = 0;
    for (var i = 0; i < nurseryQtArr.length; i++) {
      sum += Number(nurseryQtArr[i]);
      console.log("value of " + nurseryQtArr + " " + i + " is " + nurseryQtArr[i]);
    }
    nurseryQtTotal = sum;
  } else if (Qt == "bedroomQtTotal") {
    var sum = 0;
    for (var i = 0; i < bedroomQtArr.length; i++) {
      sum += Number(bedroomQtArr[i]);
      console.log("value of " + bedroomQtArr + " " + i + " is " + bedroomQtArr[i]);
    }
    bedroomQtTotal = sum;
  } else if (Qt == "gardenQtTotal") {
    var sum = 0;
    for (var i = 0; i < gardenQtArr.length; i++) {
      sum += Number(gardenQtArr[i]);
      console.log("value of " + gardenQtArr + " " + i + " is " + gardenQtArr[i]);
    }
    gardenQtTotal = sum;
  } else if (Qt == "loftQtTotal") {
    console.log("loftQtTotal is activated");
    var sum = 0;
    for (var i = 0; i < loftQtArr.length; i++) {
      sum += Number(loftQtArr[i]);
      console.log("value of " + loftQtArr + " " + i + " is " + loftQtArr[i]);
    }
    loftQtTotal = sum;
    console.log("value of loftQtTotal is " + loftQtTotal);
  } else if (Qt == "otherQtTotal") {
    var sum = 0;
    for (var i = 0; i < otherQtArr.length; i++) {
      sum += Number(otherQtArr[i]);
      console.log("value of " + otherQtArr + " " + i + " is " + otherQtArr[i]);
    }
    otherQtTotal = sum;
  } else if (Qt == "additionalQtTotal") {
    var sum = 0;
    for (var i = 0; i < additionalQtArr.length; i++) {
      sum += Number(additionalQtArr[i]);
      console.log("value of " + additionalQtArr + " " + i + " is " + additionalQtArr[i]);
    }
    additionalQtTotal = sum;
  } else {
    console.log("not lounge 3");
  }

}

function cubMtrConvert() {
  cubMtrTotal.value = parseFloat(cubFtTotal.value / 35.31).toFixed(2);;
}
