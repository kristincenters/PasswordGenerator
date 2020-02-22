// Assignment Code

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var generate = prompt("Enter the number of characters for your password");
console.log();

var upperCase = confirm("Include uppercase letters?");

var lowerCase = confirm("Include lowercase letters?");

var specChar = confirm("Include special characters?");

var num = confirm("Include numbers?");

var passwordText = document.write("#password");


for (var i = 0; i < upperCase.length; i++) {
  console.log(upperCase[i])
}

// Write password to the #password input
function generatePassword() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   document.getElementById('password').innerHTML = upperCase;
  }

// Add event listener to generate button

