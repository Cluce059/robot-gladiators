var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 10;

var fight = function(){
    window.alert("Welcome to Robot Gladiators!");
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName +" attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    if(enemyHealth <= 0){
        window.alert(enemyName + "has died!");
    }
    else{
        window.alert(enemyName +" still has " + enemyHealth + " health left.");
    }
};
fight();