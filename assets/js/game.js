var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;

var playerAttack = 10;


// Logging Multiple Values

console.log(playerName, playerAttack, playerHealth);


var enemyName = "Roborto";

var enemyHealth = 50;

var enemyAttack = 12;

// Create Function Declaration

var fight = function() {
    window.alert("Welcome to Robot Gladiators!")

// Subtract the value of "playerAttack" from the value of "enemyHealth" and use that result to update the value in the "enemyHealth" Variable

// Log a resulting message to the console so we know that it worked.

console.log(
    playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining."
)

// Subtract the value of "enemyAttack" from the value of "playerHealth" and use that result to update the value in the "playerHealth" Variable.

playerHealth = playerHealth -enemyAttack;

// Log a resulting message to the console so we know that it worked.

enemyName = "attcked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining."

};

// Execute Function Declaration

fight();

