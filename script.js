
var enter;
var confirmNum;
var confirmChar;
var confirmUcase;
var confirmLcase;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

num = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];
var choices;

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
 
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
      enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {
      confirmNum = confirm("Will this contain numbers?");
      confirmChar = confirm("Will this contain special characters?");
      confirmUcase = confirm("Will this contain Uppercase letters?");
      confirmLcase = confirm("Will this contain Lowercase letters?");
  };

  // Else if for 4 negative options
  if (!confirmChar && !confirmNum && !confirmUcase && !confirmLcase) {
      choices = alert("You must choose a criteria!");

  }
  // First if statement that uses user input prompts to determine choices
  // Else if for 4 positive options
  else if (confirmChar && confirmNum && confirmUcase && confirmLcase) {

      choices = character.concat(num, alpha, alpha2);
  }
  // Else if for 3 positive options
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
  // Else if for 2 positive options 
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
  // Else if for 1 positive option. for all 3 else ifs
  else if (confirmChar) {
      choices = character;
  }
  else if (confirmNum) {
      choices = number;
  }
  else if (confirmLcase) {
      choices = alpha;
  }
  // space var for the  uppercase conversion
  else if (confirmUcase) {
      choices = space.concat(alpha2);
  };

  //  user generated amount of length
  var password = [];

  // start random selection variables and random selection for all vars:
 
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
 console.log(confirmChar)
 console.log(confirmLcase)
 console.log(confirmNum)
 console.log(confirmUcase)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


