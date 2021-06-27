var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto" , "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyNames){
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if(promptFight === "fight" || promptFight === "FIGHT"){
        //subtract playerAttack from enemyHealth
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName +" attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );
    //check enemyHealth
    if(enemyHealth <= 0){
        window.alert(enemyNames + " has died!");
    }
    else{
        window.alert(enemyNames +" still has " + enemyHealth + " health left.");
    }
    //subtract enemyAttack from playerHealth
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    //check playerHealth
    if(playerHealth <= 0){
        window.alert(playerName + " has died!");
    }
    else{
        window.alert(playerName + " still has " + playerHealth +" health left.");
    }

    }else if(promptFight == "skip" || promptFight == "SKIP"){
       var confirmSkip = window.confirm(" Are you sure you'd like to quit?");
       if(confirmSkip){
           window.alert(playerName + " has decided to skip this fight. Goodbye!");
           //subtract playermoney
           playerMoney = playerMoney - 2;
       }
       else{
           fight();
       }
    }
    else{
        window.alert("You need to choose a valid option. Try again!");
    }
};
//fight();
// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
for(var i = 0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}