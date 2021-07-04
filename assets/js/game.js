//valid gight or skip input checker
var fightOrSkip = function(){
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP");
    //conditional recursive
    promptFight = promptFight.toLowerCase();
    if(promptFight === "" || promptFight === null){
        window.alert("You need to provide a valid answer - what am I the answer machine?")
        return fightOrSkip();
    }
    if(promptFight === "skip"|| promptFight == "SKIP"){
        var confirmSkip =  window.confirm("Are you sure you'd like to quit?");
        if(confirmSkip){
            window.alert(playerInfo.name + " has decided to pussy out this battle, bye!");
            //subtract 10 money for pussying out
            playerInfo.playerMoney =  playerInfo.money - 10;
            shop();
            return true;
        }
    }
};

var fight = function(enemy) {
    // keep track of who goes first
    var isPlayerTurn = true;
    // randomly change turn order
    if (Math.random() > 0.5) {
      isPlayerTurn = false;
    }
  
    while (playerInfo.health > 0 && enemy.health > 0) {
      if (isPlayerTurn) {
        // ask player if they'd like to fight or skip using fightOrSkip function
        if (fightOrSkip()) {
          // if true, leave fight by breaking loop
          break;
        }
  
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
  
        // remove enemy's health by subtracting the amount we set in the damage variable
        enemy.health = Math.max(0, enemy.health - damage);
        console.log( playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );
  
        // check enemy's health
        if (enemy.health <= 0) {
          window.alert(enemy.name + " has died!");
  
          // award player money for winning
          playerInfo.money = playerInfo.money + 20;
  
          // leave while() loop since enemy is dead
          break;
        } else {
          window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        // player gets attacked first
      } else {
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
  
        // remove player's health by subtracting the amount we set in the damage variable
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
          enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );
  
        // check player's health
        if (playerInfo.health <= 0) {
          window.alert(playerInfo.name + " has died!");
          // leave while() loop if player is dead
          break;
        } else {
          window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
      }
      // switch turn order for next round
      isPlayerTurn = !isPlayerTurn;
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
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 1 = 'REFILL, 2= 'UPGRADE', 3 = 'LEAVE'"); 
    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch(shopOptionPrompt){
        case 1:
          playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
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
            window.alert("Restoring player's health by 6 for 7 doll hairs");
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