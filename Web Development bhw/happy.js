
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