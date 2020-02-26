//activate button
var generateBtn = document.querySelector("#generate");

// variables
var upperCaseLtrs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLtrs = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!()@[]_`{|}~%*@";
var numerals = "0123456789";

//on click button starts user questions and performs if statements to build the array of all characters, 
    //user input variables
function generatePassword() {
    var passwordInputValue;
    var upperCaseInput = confirm("Include uppercase letters?");
    var lowerCaseInput = confirm("Include lowercase letters?");
    var specCharInput = confirm("Include special characters?");
    var numericInput = confirm("Include numbers?");
    var allCriteriaArray = [];
    var pLength = prompt("Enter a number of characters for your password between 8 nd 128"); 
    if (pLength >= 8 && pLength <=128) {
    passwordInputValue = parseInt(pLength)   
    }
    console.log(pLength)

//input validated by true method
if (upperCaseInput === true) {
        for (i = 0; i < upperCaseInput.length; i++) {
        allCriteriaArray.push(upperCaseInput.CharAt[i]); 
        }
    }
if (lowerCaseInput === true) {
        for (i = 0; i < upperCaseInput.length; i++) {
        allCriteriaArray.push(lowerCaseInput.charAt[i]); 
        }
    }
if (specCharInput === true) {
        for (i = 0; i < specCharInput.length; i++) {
        allCriteriaArray.push(specCharInput.charAt[i]); 
        }
    }
if (numericInput === true) {

        for (i = 0; i < numerals.length; i++) {
        allCriteriaArray.push(numerals.charAt[i]); 
        }
    }
console.log(allCriteriaArray)

 //alert user if at least one criteria is not met
    if (upperCaseInput === false && lowerCaseInput === false && specCharInput === false && NumericInput === false) {
        alert("You must choose at least one criteria, please try again.")
    }
//Choose random letters from the array containing a random selection of the variables
    var randomPassword = "";
    for (i = 0; i < passwordInputValue; i++) {
    randomPassword += allCriteriaArray[Math.floor(Math.random() * allCriteriaArray.length)];  
    }

    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
        
        }
var password = "";
//write the password to the page
console.log(password);
return password;
}