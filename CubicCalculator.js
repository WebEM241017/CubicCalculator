console.log("connected");

var cubFtTotal = document.querySelector("#cubFtTotal");
var cubMtrTotal = document.querySelector("#cubMtrTotal");
var pcsTotal = document.querySelector("#cubFtTotal");

var loungeSum = [];
var studySum = [];
var diningSum = [];
var kitchenSum = [];
var nurserySum = [];
var bedroomSum = [];
var gardenSum = [];
var loftSum = [];
var otherSum = [];
var additionalSum = [];

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

roomTotal("lounge", loungeSum, loungeTotal);
roomTotal("study", studySum, studyTotal);
roomTotal("dining", diningSum, diningTotal);
roomTotal("kitchen", kitchenSum, kitchenTotal);
roomTotal("nursery", nurserySum, nurseryTotal);
roomTotal("bedroom", bedroomSum, bedroomTotal);
roomTotal("garden", gardenSum, gardenTotal);
roomTotal("loft", loftSum, loftTotal);
roomTotal("other", otherSum, otherTotal);
roomTotal("additional", additionalSum, additionalTotal);

function roomTotal(id, Sum, Total) {

  var v = "#" + id;

  var Vol = document.querySelectorAll(v + " .vol input");
  var Qty = document.querySelectorAll(v + " .qty input");
  var te = document.querySelectorAll(v + " .total input");
  var rw = document.querySelectorAll(v + " tr");

  for (var i = 0; i < Vol.length; i++) {
    console.log(rw.length); ///////////// Adds grey background to every 2nd row.
    if ((i % 2) === 0) {
      rw[i].classList.add('bgd-grey');
    } else {
      console.log("fail");
    }
    /////////////
    Vol[i].addEventListener("click", function() { //highlights the value when clicked
      this.select();
    })

    Qty[i].addEventListener("click", function() {
      this.select();
    })
    ////////////
    Vol[i].addEventListener("keyup", function() { // Adds function to Vol inputs
 for (var i = 0; i < Vol.length; i++) {
        te[i].value = Vol[i].value * Qty[i].value;
        Sum[i] = Number(te[i].value);                     // Adds value of each total to array
        console.log(te[i].value);
        console.log(Sum);

        Total += Number(Sum[i]);
        console.log("value of "+ Total+ " "+i+" is "+Sum[i]);
      }
      totalSum(Total);
      total();
      cubMtrConvert()
    })
    Qty[i].addEventListener("keyup", function() { // Adds function to Vol inputs

      for (var i = 0; i < Vol.length; i++) {
        te[i].value = Vol[i].value * Qty[i].value;
        Sum[i] = Number(te[i].value);
        console.log(te[i].value);
        console.log(Sum);

        Total += Number(Sum[i]);
        console.log("value of "+ Total+ " "+i+" is "+Sum[i]);
      }
      totalSum(Total);
      total();
      cubMtrConvert();
    })
    ////////////
  }
}



function total() {
  cubFtTotal.value = Number(loungeTotal + studyTotal + diningTotal + kitchenTotal + nurseryTotal + bedroomTotal + gardenTotal + loftTotal + otherTotal + additionalTotal);
}

function totalSum(Total){

if (Total == loungeTotal){
  for (var i = 0; i < loungeSum.length; i++) {
    loungeTotal += Number(loungeSum[i]);
    console.log("value of "+ loungeSum+ " "+i+" is "+loungeSum[i]);
  }
}
else if (Total == studyTotal){
  for (var i = 0; i < studySum.length; i++) {
    studyTotal += Number(studySum[i]);
    console.log("value of "+ studySum+ " "+i+" is "+studySum[i]);
  }
}
else if (Total == diningTotal){
  for (var i = 0; i < diningSum.length; i++) {
    diningTotal += Number(diningSum[i]);
    console.log("value of "+ diningSum+ " "+i+" is "+diningSum[i]);
  }
}
else if (Total == kitchenTotal){
  for (var i = 0; i < kitchenSum.length; i++) {
    kitchenTotal += Number(kitchenSum[i]);
    console.log("value of "+ kitchenSum+ " "+i+" is "+kitchenSum[i]);
  }
}
else if (Total == nurseryTotal){
  for (var i = 0; i < nurserySum.length; i++) {
    nurseryTotal += Number(nurserySum[i]);
    console.log("value of "+ nurserySum+ " "+i+" is "+nurserySum[i]);
  }
}
else if (Total == bedroomTotal){
  for (var i = 0; i < bedroomSum.length; i++) {
    bedroomTotal += Number(bedroomSum[i]);
    console.log("value of "+ bedroomSum+ " "+i+" is "+bedroomSum[i]);
  }
}
else if (Total == gardenTotal){
  for (var i = 0; i < gardenSum.length; i++) {
    gardenTotal += Number(gardenSum[i]);
    console.log("value of "+ gardenSum+ " "+i+" is "+gardenSum[i]);
  }
}
else if (Total == loftTotal){
  for (var i = 0; i < loftSum.length; i++) {
    loftTotal += Number(loftSum[i]);
    console.log("value of "+ loftSum+ " "+i+" is "+loftSum[i]);
  }
}
else if (Total == otherTotal){
  for (var i = 0; i < otherSum.length; i++) {
    otherTotal += Number(otherSum[i]);
    console.log("value of "+ otherSum+ " "+i+" is "+otherSum[i]);
  }
}
else if (Total == additionalTotal){
  for (var i = 0; i < additionalSum.length; i++) {
    additionalTotal += Number(additionalSum[i]);
    console.log("value of "+ additionalSum+ " "+i+" is "+additionalSum[i]);
  }
}
else {
  console.log("not lounge");
}
  }
function cubMtrConvert(){
  cubMtrTotal.value = parseFloat(cubFtTotal.value / 35.31).toFixed(2);;
}
