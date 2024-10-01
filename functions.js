function splitBill(inTotal, inTip, inNo) {
    var bill = Number(document.getElementById(inTotal).value);
    var tip = Number(document.getElementById(inTip).value);
    var people = Number(document.getElementById(inNo).value);
    tip = tip / 100;
    tip = bill * tip;
    var total = bill + tip;
    document.getElementById(output).innerHTML = (total / people);
}

document.getElementById("splitbill").onclick = function() {
    splitBill(inputTotal, tipSelected, inputPeople);
}

function getTip(clicked) {
    var tipSelected = Number(clicked);
}