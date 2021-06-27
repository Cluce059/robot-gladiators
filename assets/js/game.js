var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto" , "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName){
    while(enemyHealth > 0 && playerHealth > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //if skip is chosen
        if(promptFight == "skip" || promptFight == "SKIP"){
            var confirmSkip = window.confirm(" Are you sure you'd like to quit?");
            //if true exit fight
            if(confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract playermoney
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
         }
            //subtract playerAttack from enemyHealth
            enemyHealth = enemyHealth - playerAttack;
            console.log(playerName +" attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
        //check enemyHealth
        if(enemyHealth <= 0){
            window.alert(enemyName + " has died!");
            break;
        }
        else{
            window.alert(enemyNames +" still has " + enemyHealth + " health left.");
        }
        //subtract enemyAttack from playerHealth
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        //check playerHealth
        if(playerHealth <= 0){
            window.alert(playerName + " has died!");
            playerMoney = playerMoney + 20;
            break;
        }
        else{
            window.alert(playerName + " still has " + playerHealth +" health left.");
        }
    }
};
//fight();
// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
var startGame = function(){
    //reset stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++){
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators!  Round " + (i + 1));
            //pick new enemy
            var pickedEnemyName = enemyNames[i];
            //reset enemyHealth before starting new fight
            enemyHealth = 50;
            debugger;
            //pass new enemy into fight
            fight(pickedEnemyName);  
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
          }
    }
    endGame();
};
var endGame = function(){
     window.alert("The game has now ended. Let's see how you did!");
    if(playerHealth > 0){
        window.alert("Great job, you've survived the game! you now have a score of " + playerMoney + ".");
    }
    else{
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if(playAgainConfirm){
        startGame();
    }
    else{
        window.alert("Thank you for playing robot gladiators! come back soon!");
    }
};
startGame();

//wrap logic in startGame() function
//call endGame() when player dies or there are no more enemies
// - display player stats
// - prompt for replay
// - call startgame() if yes
//if playerhealth <= 0, window.prompt would you like to play again?/
//if enemyHealth <= 0, exit and present shop
// - prompt "do you wan to shop?"
// - ^ need shop() function