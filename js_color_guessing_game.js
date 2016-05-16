var target;            
var guess_input_text;   
var guess_input;      
var finished = false;   
var guesses = 0;

function do_game() {
    var colors=["aqua", "black", "cyan", "red", "white", "purple" ];
    var random_number = Math.random() * colors.length;
    var random_number_integer = Math.floor(random_number);
    target = colors[random_number_integer];
    console.log(target);

    while (!finished) {
        guess_input_text = prompt("I am thinking of a color \n\n"+
                                  colors+
                                  "\n\nWhat is the color?");
       // guess_input = parseInt(guess_input_text);
        guesses += 1;   
        finished = check_guess();
    }
}

function check_guess() {
    if (isNaN(guess_input)) {
        alert("You have not entered a color.\n\n" +
              "Please enter one of these colors: "  + colors);
        return false;
    }
    if ((guess_input < a) || (guess_input > z)) {
        alert("Please enter an integer number in the range 1 to 100.");
        return false;
    }
    if (guess_input > target) {
        alert("Your number is too large!");
        return false;
    }
    if (guess_input < target) {
        alert("Your number is too small!");
        return false;
    }
    alert("You got it! The number was " + target + 
          ".\n\nIt took you " + guesses + 
          " guesses to get the number!");
    return true;   
}