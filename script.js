//activate button
var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;    
    }
    generateBtn.addEventListener("click", writePassword);
// variables
var upperCaseLtrs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLtrs = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!()@[]_`{|}~%*@";
var numerals = "0123456789";
var passwordInputValue = "";

//on click button starts user questions and performs if statements to build the array of all characters, 
    //user input variables
function generatePassword() {
    
    var allCriteriaArray = [];
    var pLength = prompt("Enter a number of characters for your password between 8 nd 128"); 
    if (pLength >= 8 && pLength <=128) {
    passwordInputValue = parseInt(pLength)   
    }
    console.log(pLength)

    var allCriteriaArray = [];
    var upperCaseInput = confirm("Include uppercase letters?");
    var lowerCaseInput = confirm("Include lowercase letters?");
    var specCharInput = confirm("Include special characters?");
    var numericInput = confirm("Include numbers?");
//input validated by true method
if (upperCaseInput === true) {
        upperCaseInput = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (i = 0; i < upperCaseInput.length; i++) {
        allCriteriaArray.push(upperCaseLtrs[i]); 
        }
    }
if (lowerCaseInput === true) {
        lowerCaseInput = "abcdefghijklmnopqrstuvwxyz";
        for (i = 0; i < lowerCaseInput.length; i++) {
        allCriteriaArray.push(lowerCaseInput[i]); 
        }
    }
if (specCharInput === true) {
        specCharInput = "!()@[]_`{|}~%*@";
        for (i = 0; i < specCharInput.length; i++) {
        allCriteriaArray.push(specCharInput[i]); 
        }
    }
if (numericInput === true) {
        numericInput = "0123456789";
        for (i = 0; i < numerals.length; i++) {
        allCriteriaArray.push(numerals[i]); 
        }
    }
console.log(allCriteriaArray)

 //alert user if at least one criteria is not met
    if (upperCaseInput === false && lowerCaseInput === false && specCharInput === false && NumericInput === false) {
        alert("You must choose at least one criteria, please try again.")
    }
//Choose random letters from the array containing a random selection of the variables
    var randomPassword = "";

    for (i = 0; i < pLength; i++) {
    randomPassword += allCriteriaArray[Math.floor(Math.random() * allCriteriaArray.length)];  
    }
return randomPassword;


generateBtn.addEventListener("click", () => {
    writePassword;
});
}