
//fight function
var fight = function(enemy){
    console.log(enemy);
    while(enemy.health> 0 && playerInfo.health > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //if skip is chosen
        if(promptFight == "skip" || promptFight == "SKIP"){
            var confirmSkip = window.confirm(" Are you sure you'd like to quit?");
            //if true exit fight
            if(confirmSkip){
                window.alert(playerInfo.name+ " has decided to skip this fight. Goodbye!");
                //subtract playermoney
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerMoney", playerInfo.money);
                break;
            }
         }
            //subtract playerAttack from enemyHealth
            enemy.health = Math.max(0, enemy.health - playerInfo.attack);
            console.log(playerInfo.name +" attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );
        //check enemyHealth
        if(enemy.health <= 0){
            window.alert(enemy.name+ " has died!");
            break;
        }
        else{
            window.alert(enemy.name +" still has " + enemy.health + " health left.");
        }
        //subtract enemyAttack from playerHealth
        var damage = randomNumber(enemy.attack -3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );
        //check playerHealth
        if(playerInfo.health <= 0){
            window.alert(playerInfo.name + " has died!");
            playerInfo.money = playerInfo.money + 20;
            break;
        }
        else{
            window.alert(playerInfo.name + " still has " + playerInfo.health +" health left.");
        }
    }
};
//fight();
// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

//startgame function
var startGame = function(){
    //reset stats
    playerInfo.reset(); //call reset() to reset player stats
    for(var i = 0; i < enemyInfo.length; i++){
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators!  Round " + (i + 1));
            //pick new enemy
            var pickedEnemyObj = enemyInfo[i];
            //reset enemyHealth before starting new fight between 20-60
            pickedEnemyObj.health = randomNumber(40, 60);
            //pass new enemy into fight
            fight(pickedEnemyObj);  
            //if this isnt the last enemy, option to shop
            if(playerInfo.health > 0 && i < enemyInfo.length -1){
                var storeConfirm = window.confirm("The fight is over, visit the shop before next round?");
                if(storeConfirm){
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
          }
    }
    endGame();
};
//endgame function
var endGame = function(){
     window.alert("The game has now ended. Let's see how you did!");
    if(playerInfo.health > 0){
        window.alert("Great job, you've survived the game! you now have a score of " + playerInfo.money + ".");
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
//shop function
var shop = function(){
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."); 
    switch(shopOptionPrompt){
        case "REFILL":
        case "refill":
          playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option, please do better.");
            shop();
            break;
    }
};

var randomNumber =function(min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};
//get valid player name
var getPlayerName = function(){
    var name = "";
    while(name === null || name === "" ){
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name;
  };
//player stats
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        if(this.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 doll hairs");
            this.health += 20;
            this.money -= 7;
        }
        else{
         window.alert("too poor!");   
        } 
    },
    upgradeAttack: function(){
        if(this.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 doll hairs");
            this.attack += 6;
            this.money -= 7;      
    }
    else{
        window.alert("Too poor!");
    }
  }
};
//robot stats
var enemyInfo  = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    },
];

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

//****UR AT THE PART IN THE LESSON THAT ADDS SHIT TO THE RESET MINI FUNCITON */