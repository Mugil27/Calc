function getHistory(){
    return document.getElementById("history-value").innerHTML;
}
function printHistory(num){
     document.getElementById("history-value").innerHTML =num;
}
function getOutput(){
    return document.getElementById("output-value").innerHTML;
 }
 function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerHTML=num;
	}
	else{
		document.getElementById("output-value").innerHTML=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");//string value
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));//replaceComma
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){ //attaches an event handler to the document , when the user clicks .
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history+=output;
				if(this.id=="="){
					var result=eval(history);//evaluates the expression
					printOutput(result);
					printHistory("");
				}
				else{
					history+=this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output+=this.id;
			printOutput(output);
		}
	});
}