// Assignment Code
// constant characters to pull from

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var number = "0123456789"
var symbol = "!?#@$%&*()"


var generateBtn = document.querySelector("#generate");
// function to create password criteria
function generatePassword() {

  var length = prompt('Choose between 8 and 128 characters');

if (length <8 || length > 128) {
  alert('please use a value between 8 and 128!')
  location.reload(); //will reload page if incorrect values are submitted
}

  var upper = confirm('Uppercase?');
  var lower = confirm('Lowercase?');
  var numeric = confirm('Numbers?');
  var spSymbols = confirm('Special Symbols? (!, ?, #, &, etc)');

if (upper + lower + numeric + spSymbols === 0) {
  alert('You must have at least one character type selected for your password! Please try again')
  location.reload(); //will reload page if none of the needed option are selected
};

 var passwordEnd = '';
  
 console.log(upper, lower, numeric, spSymbols, passwordEnd)
//building the lines to randomize
if (lower === true) {
  passwordEnd += lowerCase;
}

if (numeric === true) {
  passwordEnd += number;
}

if (spSymbols === true) {
  passwordEnd += symbol;
}

if (upper === true) {
  passwordEnd += upperCase;
}

console.log(passwordEnd)

  var pass = [''];
//for loop to get the right amount of characters
  for (var i = 0; i < length; i++) {
    pass += passwordEnd.charAt(Math.floor(Math.random() * passwordEnd.length))
    console.log(pass)
  }
  
return pass; //this is where i put my final password in the paragraph in the page.
    

}

function writePassword() {
  var pass = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

