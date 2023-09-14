var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton =document.querySelector(".calculate");
var result = document.querySelector(".result");
var BMI, Height, Weight;

function myfunction(){
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight * height;
    alert("Your Wide is :"+ BMI);
}