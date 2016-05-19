var target;            
var guess_input_text;     
var finished = false;   
var guesses = 0;
var colors = ["aqua", "black", "cyan", "red", "white", "purple" , "green", "gray", "ivory", "khaki"];

function do_game() {
    
    var random_number = Math.random() * (colors.length-1);
    var random_number_integer = Math.floor(random_number);
    target = colors[random_number_integer];
    //document.getElementById("demo").innerHTML = target;

    while (!finished) {
        guess_input_text = prompt("I am thinking of one of these colors: \n\n"+
                                  colors+
                                  "\n\n What color I am thinking of?");
        guesses += 1;  
        finished = check_guess();
    }
}

function check_guess() {
    
    if ((guess_input_text < "a") || (guess_input > "z")) {
        alert("Sorry, I dont recognize your color");
        return false;
    }

    if (guess_input_text > target) {
        alert("Your color is alphabetically higher than mine");
        return false;
    }

    if (guess_input_text < target) {
        alert("Your color is alphabetically lower than mine!");
        return false;
    }

    myBody=document.getElementsByTagName("body")[0];
    myBody.style.background=target;

    alert("You got it! The color was " + target + 
          ".\n\nIt took you " + guesses + 
          " guesses to get the number!");
    
    return true;   
}