
/**
 * 编程语言中，一般固定值称为字面量 下面总共总结了五种字面量 
 */
function myFunction () {
	//声明多个变量
	var lastname="rong", firstname="peng",age=20,job="engineer";
	var careener;
	document.getElementById("xx").innerHTML="xx 你好，引用外部方法。";
	//① 常数字面量
	PI=3.14159;
	console.log(PI);
	//② 字符串 字面量
	var str="AAAA Jack";
	//输出字符串
	console.log(str);
	//③数组字面量
	var array1=[40, 100, 1, 5, 25, 10];
	console.log(array1);
	//④ 自定义 对象字面量，并赋值给变量
	var object1={firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
	console.log(object1);
//	console.printaa();
	console.log(sumAB(12,45))
	console.log( 16+ "Volvo");
	//重新声明js变量，并不会报错，而且后来的定义不赋值并不会覆盖原来定义的值
	var carname="Volvco";
	var carname;
	console.log(carname);
	datetype();
	
}
/**
 * javaScript 用友数字，字符串，布尔，数组，对象 ,空（NULL），未定义（undefined ）集中数据类型。 
 * 声明变量时候可以向如下方式标识一个变量的数据类型。但是js是动态类型语言 这些声明其实没有用，在代码中可以随时改变它的数据类型。
 * var carname=new String;
	var x=      new Number;
	var y=      new Boolean;
	var cars=   new Array;
	var person= new Object;
 */
function datetype(){
	//数字
	var x1=34.00;
	var x2=34;
	var y=123e5;
	var z=123e-5;
	
	console.log(x1 + "<br>")
	console.log(x2 + "<br>")
	console.log(y + "<br>")
	console.log(z + "<br>")
	//字符串类型
	var answer="It's alright";
	console.log(answer);
	var answer="He is called 'Johnny'";
	console.log(answer);
	var answer='He is called "Johnny"';
	console.log(answer);
	// 布尔类型
	  z=true;
	console.log(z);
	z=false;
	console.log(z);
	//数组
	var cars=new Array();
	cars[0]="BMW";
	cars[1]="BT";
	cars[2]="SBAU";
	for(var i=0; i<cars.length; i++){
		console.log(cars[i]);
	}
	//声明一个对象
	var person={
		name:"vincent",
		age:45,
		id:4234234,
		job:"software Engineer"
	};
	// 获取对象属性两种方式
	console.log(person.name);
	console.log(person["age"]);
	// 赋值null 清空person变量的数据
	person=null;
	console.log(person);
	person=undefined;
	console.log(person);
	//声明integer 是一个数字类型，但是下面我马上赋值一个字符串给他也是OK的。
	var integer= new Number;
	console.log(integer);
	integer="sdfd";
	console.log(integer);
}
// ⑤ 函数字面量 定义一个函数。
function sumAB(A,B){return A*B;};
/**
 *  JS 对应对象的解释是拥有方法和属性的数据就是对象。
 */