var v1Input = document.querySelector("#value1Input");
var v2Input = document.querySelector("#value2Input");
var result = document.querySelector("#percentOutput");
var calcButton = document.getElementById("calculate");
var clearButton = document.getElementById("clear");

calcButton.addEventListener("click", function(){
	//Get the numbers the user entered
	let v1 = v1Input.value;
	let v2 = v2Input.value;

	//Run the calculation
	result.value = percentCalc(v1, v2);
});

clearButton.addEventListener("click", function(){
	//Reset values of inputs
	v1Input.value = "";
	v2Input.value = "";
	result.value = "";
});

//Function to calculate the percent change
//Takes 2 arguments as inputs and outputs a percentage, rounded to the tenths place
function percentCalc(v1, v2){
	return (((v2 - v1) / Math.abs(v1)) * 100).toFixed(1);
}