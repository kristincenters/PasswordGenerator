//activate and locate on-page button
var generateBtn = document.querySelector("#generate");

// defined arrays
var upperCaseLtrs = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z","Y","Z"];
var lowerCaseLtrs = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChars = ["!","@","#","$","%","^","&","*","(",")"];
var numerals = ["0","1","2","3","4","5","6","7","8"];
var allArrayCriteria = [];

//variables
var randomPassword;
var upperCaseInput;
var lowerCaseInput;
var specCharInput;
var numericInput;
var pwdLength;
var password;



//write password function
function generatePassword() {
    var pwdLength = prompt("Enter a number of characters for your password between 8 nd 128"); 
    if (pwdLength >= 8 && pwdLength <=128) {
        var pwdLengthNumber = parseInt(pwdLength)
        }
    }
    //generate all criteria array and validate prompts from users
    var upperCaseInput = confirm("Include uppercase letters?");
    if (upperCaseInput === true) {
        upperCaseInput = upperCaseLtrs
        for (i = 0; i < upperCaseInput.length; i++) {
        allArrayCriteria.push(upperCaseInput[i]); 
        }
    }
    var lowerCaseInput = confirm("Include lowercase letters?");
    if (lowerCaseInput === true) {
        lowerCaseInput = lowerCaseLtrs
        for (i = 0; i < upperCaseInput.length; i++) {
        allArrayCriteria.push(lowerCaseInput[i]); 
        }
    }
    var specCharInput = confirm("Include special characters?");
    if (specCharInput === true) {
        specCharInput = specialChars
        for (i = 0; i < specCharInput.length; i++) {
        allArrayCriteria.push(specCharInput[i]); 
        }
    }
    var numericInput = confirm("Include numbers?");
    if (numericInput === true) {
        numericInput = numerals
        for (i = 0; i < numerals.length; i++) {
        allArrayCriteria.push(numerals[i]); 
        }
    }
  
console.log(allArrayCriteria)
//alert user if at least one criteria is not met
    //if (upperCaseInput === false && lowerCaseInput === false && specCharInput === false && numericInput === false) ;
    //alert("You must choose at least one criteria, please try again.")
    //}
    var randomPassword = ""
    for (i = 0; i < pwdLength; i++) {
    randomPassword = allArrayCriteria[Math.floor(Math.random() * allArrayCriteria.length)];
    var randomPassword = randomPassword.concat(randomPassword)
    }
//write password to the #password input box
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");  
    passwordText.value = password;  

return randomPassword;    
}
//activate the button 
generateBtn.addEventListener("click", writePassword);