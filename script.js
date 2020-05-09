
var enter;
var confirmNum;
var confirmChar;
var confirmUcase;
var confirmLcase;
// variable
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

num = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];
var choices;
// array

var toUpper = function (x) {
  return x.toUpperCase();
};
alpha2 = alpha.map(toUpper);

var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
 
  enter = parseInt(prompt("How many characters would you like your password to have? Choose between 8 and 128"));
  if (!enter) {
      alert("This needs an input in order to work");
  } else if (enter < 8 || enter > 128) {
      enter = parseInt(prompt(" Choose between 8 and 128"));

  } else {
      confirmNum = confirm("Do you want this to contain numbers?");
      confirmChar = confirm("Do you want this to contain special characters?");
      confirmUcase = confirm("Do you want this to contain Uppercase letters?");
      confirmLcase = confirm("Do you want this to contain Lowercase letters?");
  };


  if (!confirmChar && !confirmNum && !confirmUcase && !confirmLcase) {
      choices = alert("You must choose a criteria!");

  }

  else if (confirmChar && confirmNum && confirmUcase && confirmLcase) {

      choices = character.concat(num, alpha, alpha2);
      console.log(choices)
  }

  else if (confirmChar && confirmNum && confirmUcase) {
      choices = character.concat(num, alpha2);
  }
  else if (confirmChar && confirmNum && confirmLcase) {
      choices = character.concat(number, alpha);
  }
  else if (confirmChar && confirmLcase && confirmUcase) {
      choices = character.concat(alpha, alpha2);
  }
  else if (confirmNum && confirmLcase && confirmUcase) {
      choices = number.concat(alpha, alpha2);
  }
 
  
  else if (confirmChar && confirmNum) {
      choices = character.concat(number);

  } else if (confirmChar && confirmLcase) {
      choices = character.concat(alpha);

  } else if (confirmChar && confirmUcase) {
      choices = character.concat(alpha2);
  }
  else if (confirmLcase && confirmNum) {
      choices = alpha.concat(number);

  } else if (confirmLcase && confirmUcase) {
      choices = alpha.concat(alpha2);

  } else if (confirmNum && confirmUcase) {
      choices = number.concat(alpha2);
  }

  else if (confirmChar) {
      choices = character;
  }
  else if (confirmNum) {
      choices = number;
  }
  else if (confirmLcase) {
      choices = alpha;
  }

  else if (confirmUcase) {
      choices = space.concat(alpha2);
  };


  var password = [];


  
  for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
  }
  var ps = password.join("");
  UserInput(ps);
  return ps;
}
  function UserInput(ps) {
    document.getElementById("password").textContent = ps;


}
console.log(num)
console.log(alpha)
console.log(alpha2)
console.log(character)



generateBtn.addEventListener("click", writePassword);


