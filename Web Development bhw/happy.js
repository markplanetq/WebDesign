
let sum = 0;
let arr = [1, 2, 3, 5, 7, 11, 13];
for (let i=0; i<arr.length; i++) { // classic loop
    sum += arr[i];
}

console.log(sum);
alert(sum);

myArray = ['a', 'b', 'c'];
delete myArray[1];

alert( myArray);
// ['a', undefined, 'c']
						
myArray.splice(1, 1);
// ['a', 'c']
alert(myArray)




function foo()
{
  var fooargs = 'num: ' + arguments.length + '\n';
  fooargs += 'arg0: ' + arguments[0] + '\n';
  fooargs += 'arg1: ' + arguments[1] + '\n';
  alert( fooargs );
}
foo( "test", 2, 2 );


const kelvin = 293; //declaring a variable for kelvin
let Celsius = kelvin - 273;// getting a celcius temp
let Fahrenheit = Celsius * (9/5) + 32;// getting a Fahrenheit temp
fahrenheit = Math.floor(Fahrenheit);// rounding a Fahrenheit temp
let Temperature = Fahrenheit;
console.log('The temperature is: ' + Temperature + ' degrees Fahrenheit');

var myvalue;
alert( 'myvalue: ' + myvalue );

var test = 3/"abc";
alert( 'test:' + test);

function maker(name, where, grade)
{
    var it = {};
    it.name = name;
    it['goto']=where;
    it.grade=grade;
    return it;
}
myobj = maker('abc', 'happy', 22);