let gameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "Warrior":
                player = new Player(classType, 200, 0, 200, 100, 100)
                break;
            case "Rogue":
                player = new Player(classType, 100, 0, 100, 150, 200)
                break;
            case "Mage":
                player = new Player(classType, 100, 200, 50, 100, 100)
                break;
            case "Hunter":
                player = new Player(classType, 200, 0, 50, 200, 100)
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<div class="avatar-container"><img src="images/avatar-player/' +
        classType.toLowerCase() + '.jpg" class="img-avatar"> <div><h3>' + classType 
        +'</h3><p class="health-player">Health:' + player.health + '</p>' +
        '<p>Mana:' + player.mana + '</p>' +
        '<p>Strength:' + player.strength + '</p>' +
        '<p>Aagility:' + player.agility + '</p>' +
        '<p>Speed:' + player.speed + '</p></div></div>';
    },
    setPreFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        
        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Search for a enemy!</a>';
       
        getActions.style.visibility = "visible";
       

    },
    setFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        let getArena = document.querySelector(".arena");
        //Create Enemy!
        let enemy00 = new Enemy("Goblin", 100,0,50,150,200);
        let enemy01 = new Enemy("Troll", 200,0,100,200,100);
        let chooseRandomEnemy = Math.floor(Math.random() *Math.floor(2));
        //console.log(chooseRandomEnemy);
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1: 
            enemy=enemy01;
                break;
        }
        getEnemy.style.visibility = "visible";
        getArena.style.visibility = "visible";
        getHeader.innerHTML = '<p>Task: Choose your move!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!!</a>';
        getEnemy.innerHTML =  '<img src="images/avatar-enemies/'+
        enemy.enemyType.toLowerCase() + '.jpg" class="img-avatar"> <div><h3>' + enemy.enemyType 
        +'</h3><p class="health-enemy" >Health:' + enemy.health + '</p>' +
        '<p>Mana:' + enemy.mana + '</p>' +
        '<p>Strength:' + enemy.strength + '</p>' +
        '<p>Aagility:' + enemy.agility + '</p>' +
        '<p>Speed:' + enemy.speed + '</p></div>';
    }
}