// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["+", "-", "&", "||", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?"];
var password=lowercase;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}


function generatePassword(){
//Prompt asking user pwd length and lenght must be greater than 8

    var length = prompt('How long do you want your password to be?');
    while (length < 8){
        alert('Your password must be greater than 8 characters!');
        length = prompt('How long do you want your password to be?');
    }

//boolean for special charachters add var i=0 add ech charchter individually special charachters to the pwd push adds special charachters to passwords 
    var question = confirm('Do you want any special characters?');
    if (question == true) { 
            for(var i =0; i<specialCharacters.length;i++){
                password.push(specialCharacters[i]);
            }
        }

    var question2 = confirm('Do you want any numbers?');
    if (question2 == true) {
        for(var i =0; i<numeric.length;i++){
            password.push(numeric[i]);
         }
        }


    var question3 = confirm('Do you want any upper case letters?');
    if (question3 == true) {
        for(var i =0; i<uppercase.length;i++){
            password.push(uppercase[i]);
            }
        }
  
// holds the password
    var actual=[];

// selects randomly the charachters in our password and adds them to our password
    for(var index = 0;index<length;index++){
        
        actual.push(password[Math.floor(Math.random() * password.length+1)]);
        
    }
    // .join turns it into srting and return prints it 
    result=actual.join('');

    return result;
    }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

