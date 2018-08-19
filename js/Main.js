// 4. In JS: Create an array of 5 strings. Make sure to capitalize some of the letters in your strings.

var money = ["Washington", "LincoLN", "Hamilton", "JackSON", "grant", "Franklin" ]
// 5. In JS: Loop through the array. Change each string to lowercase, and then add them to a new array.

var moneyArray = []
/// for loops, var i=0; i < variables.length; i++)

for (var i=0; i < money.length; i++) {
	moneyArray.push(money[i].toLowerCase());
};
console.log(moneyArray);

// 6.  In JS: Loop through the new array (all lowercase strings) and log the first and last character of each string to the console.

for (var i=0; i < moneyArray.length; i++){
	console.log ("First Letter is: " + moneyArray[i].charAt(0),"Last Letter is:" + moneyArray[i].charAt(moneyArray[i].length - 1));
};


// 7. In JS: Create a variable and store your name in it. Using the split method and a loop, log each letter of your name to the console.

//set variable
var name = "Jason Huey"; 
//split function
var splitName = name.split("");

//loop function and log 
for (var i=0; i < splitName.length; i++){
	console.log(splitName[i]);
};

//8 .In JS: Using the join method, put your name back together and replace all occurrences of one letter with another. (ie: replace all a's with y's)

splitName = splitName.join(" ");
console.log (splitName.replace(/J/g, "x" ));

// 10. In JS: Create a function that will get the user's input, test it against the standard regular expression for emails, and log the result in the console.

function validateEmail() {
	var userEmail = document.getElementById("email")
	var regEx = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;	
	//test the email
	console.log(regEx.test(userEmail.value));
};

document.getElementById("submit").addEventListener("click",validateEmail);