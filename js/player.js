let player;

function Player(classType, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}
let PlayerMoves = {
    calcAttack: function () {
        //Who attacks first?!
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
                //Player Attacks!
                let playerAttack = function () {
                    console.log('sdfds');
                    let calcBaseDamage;
                    if (player.mana > 0) {
                        calcBaseDamage = player.strength * player.mana / 1000;
                    } else {
                        calcBaseDamage = player.strength * player.agility / 1000;
                    }
                    //variable of the damage
                    let offsetDamage = Math.floor(Math.random() * Math.floor(10));
                    let calcOutputDamage = calcBaseDamage + offsetDamage;
                    //How many times we kick!
                    let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10 / 2) + 1);
                    let attackValues = [calcOutputDamage, numberOfHits];
                    return attackValues;
                }
                //Enemy Attacks!
                let enemyAttack = function () {
                    let calcBaseDamage;
                    if (enemy.mana > 0) {
                        calcBaseDamage = enemy.strength * enemy.mana / 1000;
                    } else {
                        calcBaseDamage = enemy.strength * enemy.agility / 1000;
                    }
                    //variable of the damage
                    let offsetDamage = Math.floor(Math.random() * Math.floor(10));
                    let calcOutputDamage = calcBaseDamage + offsetDamage;
                    //How many times we kick!
                    let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10 / 2) + 1);
                    let attackValues = [calcOutputDamage, numberOfHits];
                    return attackValues;
                }
                //Get Player/Enemy  health to change later 
                let getPlayerHealth = document.querySelector(".health-player");
                let getEnemyHealth = document.querySelector(".health-enemy");
                //Inicaite Attacks!
                if (getPlayerSpeed >= getEnemySpeed) {
                    let playerAttackValues = playerAttack();
                    let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                    enemy.health = enemy.health - totalDamage;
                    alert('You hit ' + playerAttackValues[0] + ' damage ' + playerAttackValues[1] + ' times.');
                    if (enemy.health <= 0) {
                        alert("You Won!");
                        getPlayerHealth.innerHTML = 'Health: ' + player.health;
                        getEnemyHealth.innerHTML = 'Health: 0'
                    } else {
                        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                        //Enemy Attacks!
                        let enemyAttackValues = enemyAttack();
                        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                        player.health = player.health - totalDamage;
                        alert('Enemy hit ' + enemyAttackValues[0] + ' damage ' + enemyAttackValues[1] + ' times.');
                        if (player.health <= 0) {
                            alert("HAHAHAHA YOU LOOSE!");
                            getPlayerHealth.innerHTML = 'Health: 0';
                            getEnemyHealth.innerHTML = 'Health:' + enemy.health;
                        } else {
                            getPlayerHealth.innerHTML = 'Health: ' + player.health;
                        }
                    }
                }
        
    }
}