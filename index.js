const bttPlay = document.getElementById('bttPlay');
const secTimer = document.getElementById('secTimer');
let timerId;
bttPlay.addEventListener("click",resetGameAndStart);

function resetGameAndStart(){
    document.getElementById("point").style.background = "none";
    infinitTimer();

}

function infinitTimer(){
    secTimer.innerText = 5;
    timerId = setInterval(() => {
        decrementValue();
    }, 1000);
}

function decrementValue(){
    if(secTimer.innerText == 0){
        clearInterval(timerId);
        return;
    }
    secTimer.innerText -= 1;
}


class Game {
    constructor() {
        this.enemyChoice = null;
        this.UserChoice = null;
    }

    getEnemyChoice() {
        const randomValue = Math.floor(Math.random() * 3) + 1;

        switch (randomValue) {
            case 1:
                this.enemyChoice = "Rock";
                break;
            case 2:
                this.enemyChoice = "Paper";
                break;
            case 3:
                this.enemyChoice = "Scissor";
                break;
        }
    }

    CompareChoices() {
        if (this.enemyChoice == this.UserChoice) {
            // Considerar Empate
        }
        else if (this.enemyChoice == "Rock") {
            if (this.UserChoice == "Scissor") {
                // inimigo ganha
            }
            else {
                // usuario ganha
            }
        }
        else if (this.enemyChoice == "Paper") {
            if (this.UserChoice == "Rock") {
                // inimigo ganha
            }
            else {
                // usuário ganha
            }
        }
        else if (this.enemyChoice == "Scissor") {
            if (this.UserChoice == "Paper") {
                // inimigo ganha
            }
            else {
                // usuário ganha
            }
        }
    }

    getUserChoice(e) {

    }
}

const game = new Game();
game.getEnemyChoice();