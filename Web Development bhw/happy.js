
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


function isFruit(x) {
  if ( x == "apple" || x == "fig" || x == "pear" ) 
  { return true; }            
  return false;
}


function normaliseURL(url) {}
  url = url.trim();
  if ( url.length == 0 ) return "";
  var i = url.indexOf("://");
  var j = url.indexOf("/", i + 3);
  var access_method = "";
  var hostname = "";
  if ( i != -1 ) {
    access_method = url.substring(0, i).toLowerCase() + "://";
    if ( j != -1 )
        hostname = url.substring(i + 3, j).toLowerCase();
  } else {
    j=0;
  }
  

var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
}

if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
  

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImageJS = document.getElementById('lolcatImage');
  
  if (time == partytime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);


var userName = prompt("What is your name?");

// Display a personalized greeting
if (userName) {
  alert("Hello, " + userName + "! Welcome to our website!");
} else {
  alert("Hello, guest! Welcome to our website!");
}




