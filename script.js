// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["+", "-", "&", "||", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?"];
var password = lowercase;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}


function generatePassword(){
    var length = prompt('how long do you want your password to be?');
    while (length < 8){
        alert('must be greater than 8 characters');
        length = prompt('how long do you want your password to be?');
    }

    var special = confirm('Do you want any special characters');
/*     alert(special);
 */    if (special == true) { password += specialCharacters;
        }
    /* alert(password); */

    var numbers = confirm('Do you want any numbers');
    if (numbers == true) {password += numeric;
        }

    /* alert(password);  */

    var upper = confirm('Do you want any upper case letters');
    if (upper == true) {password += uppercase;
        }
  
    alert(password)  
    var actual=[];
    var randchar;

    alert(password)
    for(var index = 0;index<length;index++){
        
        randchar=password[Math.floor(Math.random() * password.length+1)];
        actual.push(randchar);
        console.log(actual);
    }
    alert('The password I have stored is : '+actual);


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
