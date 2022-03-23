// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // Declaring variables for the input options selected by the user
    var totalCharacters;
    var numbersSelected;
    var specialSelected;
    var uppercaseSelected;
    var lowercaseSelected;

    // Creates variable const (variables that maintain constant values) arrays for the characters to be included on the random password generator
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
    const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // Declares variables to concatenate the user inputs and the final selected password
    var concatOptions = [];
    var finalPassword = [];

    // receive user's input on the number of characters and validats that its range is between 8-128
    totalCharacters = prompt("How many characters would you like to be included in your random password" + "\n Choose between 8 and 128 characters");

    if (totalCharacters < 8 || totalCharacters > 128) {
        totalCharacters = prompt("Your selection is not valid." + "\nPlease choose a number between 8 and 128 for the number of characters you want included on your random password.");

        numbersSelected = confirm("Would you like to include \"numbers\" in your random password?");
        specialSelected = confirm("Would you like to include \"special characters\" in your random password?");
        uppercaseSelected = confirm("Would you like to include \"upper case letters\" in your random password?");
        lowercaseSelected = confirm("Would you like to include \"lower case letters\" in your random password?");

        // start receiving the user's received options and concatanaiting them 
        if (numbersSelected) {
            concatOptions = concatOptions.concat(numbers);
        }

        if (specialSelected) {
            concatOptions = concatOptions.concat(special);
        }
        if (uppercaseSelected) {
            concatOptions = concatOptions.concat(uppercase);
        }

        if (lowercaseSelected) {
            concatOptions = concatOptions.concat(lowercase);
        }

    } else {
        numbersSelected = confirm("Would you like to include \"numbers\" in your random password?");
        specialSelected = confirm("Would you like to include \"special characters\" in your random password?");
        uppercaseSelected = confirm("Would you like to include \"upper case letters\" in your random password?");
        lowercaseSelected = confirm("Would you like to include \"lower case letters\" in your random password?");


        // start receiving the user's received options and concatanaiting them 
        if (numbersSelected) {
            concatOptions = concatOptions.concat(numbers);
        }

        if (specialSelected) {
            concatOptions = concatOptions.concat(special);
        }
        if (uppercaseSelected) {
            concatOptions = concatOptions.concat(uppercase);
        }

        if (lowercaseSelected) {
            concatOptions = concatOptions.concat(lowercase);
        }
    };
    // create the random password from the concateneted elements using for length the the total number of charachters selected
    for (var i = 0; i < totalCharacters; i++) {
        finalPassword.push(concatOptions[Math.floor(Math.random() * concatOptions.length)]);
    }

    //console.log("finalPassword:", finalPassword)
    //console.log("concatOptions:", concatOptions)
    return finalPassword.join("");
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);