//activate and locate on-page button
var generateBtn = document.querySelector("#generate");

// defined arrays
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z","Y","Z"];
console.log(upperCase.length);
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")"];
var numbers = ["0","1","2","3","4","5","6","7","8"];

//variables
var allArrayCriteria;
var randomPassword;
var upperCaseInput;
var lowerCaseInput;
var specCharInput;
var pwdLength;
var password;

// Write password to the #password input box
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");  
    passwordText.value = password;  
}

//write password function
//load and validate prompts from users
function generatePassword() {
    var pwdLength = prompt("Enter a number of characters for your password between 8 and 128");
    console.log(pwdLength);
    var upperCaseInput = confirm("Include uppercase letters?");
    console.log(upperCaseInput);
    var lowerCaseInput = confirm("Include lowercase letters?");
    console.log(lowerCaseInput);
    var specCharInput = confirm("Include special characters?");
    console.log(specCharInput)
    var NumericInput = confirm("Include numbers?");
    console.log(NumericInput)
    }


 //alert user if at least one criteria is not met
    if (upperCaseInput === false && lowerCaseInput === false && specCharInput === false && NumericInput === false) {
    alert("You must choose at least one criteria, please try again.")
    }
    //conditionals 
    if (pwdLength >= 8 && pwdLength <=128) {
    var pwdLength = parseInt(charCount);
    alert("Invalid number, try again")
    }
    var upperCaseInput = confirm("Include uppercase letters?");
    if (upperCaseInput === true) {
        upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z","Y","Z"];
        for (i = 0; i < upperCaseInput.length; i++) 
        AllCriteria.push(upperCaseInput[i]); 
    }
    if (lowerCaseInput === true) {
        lowerCase = "abcdefghijklmnopqrstuvwxyz";
        for (i = 0; i < lowerCaseInput.length; i++) 
        AllCriteria.push(lowerCaseInput[i]);
    }

    for (i = 0; i < pwdLength; i++) {
    var displayedPassword = AllCriteria[Math.floor(Math.random() * AllCriteria.length)];
    var randomPassword = randomPassword.concat(AllCriteria)
//create password string
    //for (i = 0; i <PwdLength)
}

//activate the button 
generateBtn.addEventListener("click", writePassword);