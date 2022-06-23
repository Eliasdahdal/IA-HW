var weight = [];
let countW = 0;
let countB = 0;
let MaxItem;
function getMaxItem() {
  MaxItem = document.getElementById("inputTextMaxItem").value;
  document.getElementById("inputBtWeight").disabled=false;
  document.getElementById("inputBtBenefit").disabled=false;
}

function pushDataWeight() {
  if (countW < MaxItem ){
  countW++;
  // get value from the input text
  var inputText = document.getElementById("inputTextWeight").value;
  // append data to the array
  weight.push(inputText);
  var pval = "";
  for (i = 0; i < weight.length; i++) {
    pval = pval + weight[i] + " , ";
  }
  // display array data
  document.getElementById("ItemWeightText").innerHTML = pval;
      } else {
        document.getElementById("inputBtWeight").disabled=true;
      }

}

var Benefit = [];
function pushDataBenefit() {
    if (countB < MaxItem ){
      countB++;
      // get value from the input text
  var inputText = document.getElementById("inputTextBenefit").value;
  // append data to the array
  Benefit.push(inputText);
  var pval = "";
  for (i = 0; i < Benefit.length; i++) {
    pval = pval + Benefit[i] + " , ";
  }
  // display array data
  document.getElementById("ItemBenefittText").innerHTML = pval;
    }
    else {
        document.getElementById("inputBtBenefit").disabled=true;
      }
}


$(document).ready(function () {
    $("#view").click(function () {
      const MaxWeight = document.getElementById("inputTextMaxWeight").value;
      const WeightArr = weight;
      const BenefitArr = Benefit;

      $.ajax({
        url: "",
        type: "get",
        data: {
          MaxWeight: MaxWeight,
          MaxItem: MaxItem,
          "WeightArr[]": WeightArr,
          "BenefitArr[]": BenefitArr,
        },
        success: function (response) {
          $("#result").empty().append(response.result);
        },
      });
    });
});
