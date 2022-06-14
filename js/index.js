var inputRate = document.querySelectorAll('input[type="radio"]');
var labelRateP = document.querySelectorAll("label p");
var numberRate = document.querySelector(".rate-selection p span");


for (let i=0; i<inputRate.length; i++) {
    inputRate[i].addEventListener("change", function() {
    numberRate.innerHTML = labelRateP[i].innerHTML;
    });
}
function submit () {
    if (numberRate.innerHTML > 0) {
        document.querySelector(".rating-state").style.display="none";
        document.querySelector(".thank-state").style.display="flex";
    }
}