function person(a,b){
	this.name = a ;
	this.DOB = b;
	this.greet = function(){
		return ("My name is "+ this.name +  
		"\nand My birthday is " + this.DOB + ".");
	};
	return this;
}
var person1 = person("toan","17/1/1997");
var inf = person1.greet();
console.log(inf);
module.export= "inf";

