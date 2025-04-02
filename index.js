class Game {
    constructor() {
        this.enemyChoice = null;
        this.UserChoice = null;
        this.timerId;

        this.bttPlay = document.getElementById('bttPlay');
        this.secTimer = document.getElementById('secTimer');
        this.points = document.querySelectorAll('.point');
        
        bttPlay.addEventListener("click", this.resetGameAndStart.bind(this));

        document.querySelectorAll('.buttons').forEach( button => {
            button.addEventListener("click", (e) => this.getUserChoice(e));
        });
    }

    getEnemyChoice() {
        const randomValue = Math.floor(Math.random() * 3) + 1;

        switch (randomValue) {
            case 1:
                this.enemyChoice = "Rock"; break;
            case 2:
                this.enemyChoice = "Paper"; break;
            case 3:
                this.enemyChoice = "Scissor"; break;
        }
    }

    getUserChoice(e){
        this.UserChoice = e.target.dataset.choice;
        this.getEnemyChoice();
        this.CompareChoices();
    }

    CompareChoices() {
        if (this.enemyChoice == this.UserChoice) {
            this.draw();
        }
        else if (this.enemyChoice == "Rock") {
            if (this.UserChoice == "Scissor") {
                this.enemyPoint();
            }
            else {
                this.userPoint();
            }
        }
        else if (this.enemyChoice == "Paper") {
            if (this.UserChoice == "Rock") {
                this.enemyPoint();
            }
            else {
                this.userPoint();
            }
        }
        else if (this.enemyChoice == "Scissor") {
            if (this.UserChoice == "Paper") {
                this.enemyPoint();
            }
            else {
                this.userPoint();
            }
        }
    }

    draw(){
        console.log("draw")
    }

    enemyPoint(){
        console.log("enemypoint")
    }

    userPoint(){
        console.log("userpoint")
    }

    resetGameAndStart(){
        this.infinitTimer();
    }

    infinitTimer(){
        secTimer.innerText = 5;
        this.timerId = setInterval(() => {
            this.decrementValue();
        }, 1000);
    }

    decrementValue(){

        if(secTimer.innerText == 0){
            clearInterval(this.timerId);
            return;
        }

        secTimer.innerText -= 1;
    }

}

const game = new Game();