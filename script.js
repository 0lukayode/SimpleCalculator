function getScreen2(){
	return document.getElementById("screen2").innerText;
}
function printScreen2(x){
	document.getElementById("screen2").innerText=x;
}
function getScreen1(){
	return document.getElementById("screen1").innerText;
}
function printScreen1(x){	
		document.getElementById("screen1").innerText=x;
}

//Operator Click
var operators = document.getElementsByClassName("operator");
for(item of operators){
	item.addEventListener('click',function(){
		if(this.id=="clear"){
			location.reload();
		}
		else if(this.id=="delete"){
			var display1=getScreen1().toString();
			if(display1){
				//if display1 has a value
				display1= display1.slice(0, -1);
				printScreen1(display1);
			}
		}
		else{
			var display1=getScreen1();
			var display2=getScreen2();
			
				display2=display2+display1;
				if(this.value=="="){
					var result=eval(display2);
					printScreen1(result);
					printScreen2(display2);
					printScreen2("");
				}
				else{
					display2=display2+this.value;
					printScreen2(display2);
					printScreen1("");
				}	
	}
});
}


//Number Click
var numbers = document.getElementsByClassName("number");
for(item of numbers){
	item.addEventListener('click',function(){
	var display1=(getScreen1());
		if (display1=="") {
		var value= this.value;
		if (value==".") {
			display1="0";
			display1=display1+this.value;
			printScreen1(display1);
		}else{
			display1=display1+this.value;
			printScreen1(display1);
		}	
	} else if(display1.includes(".")){
		var value= this.value;
		if (value==".") {
			printScreen1(display1);
		}else{
			display1=display1+this.value;
			printScreen1(display1);
		}					
	}else{
		display1=display1+this.value;
		printScreen1(display1);
	}
	
	});
}
//Invalid Expression
window.onerror = function(){
      alert("INPUT VALID EXPRESSION");
      display1 = "";
      display2 = "";
      printScreen1("");
      printScreen2("");
      console.clear();
	  location.reload();
  }
