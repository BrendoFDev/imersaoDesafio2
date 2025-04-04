class Game {
    constructor() {
        this.GameStarted = false;
        this.enemyChoice;
        this.UserChoice;
        this.timerId;
        this.rounds = 1;
        this.useSpanPoint = document.querySelector("#userPoint span#point");
        this.enemySpanPoint = document.querySelector("#enemyPoint span#point");
        
        
        this.bttPlay = document.getElementById('bttPlay');
        this.secTimer = document.getElementById('secTimer');
        this.points = document.querySelectorAll('.point');

        bttPlay.addEventListener("click", this.resetGameAndStart.bind(this));

        document.querySelectorAll('.buttons').forEach(button => {
            button.addEventListener("click", (e) => this.getUserChoice(e));
        });
    }


    getUserChoice(e) {
        this.UserChoice = e.target.dataset.choice;
        this.setUserChoiceColor();
        this.getEnemyChoice();
        this.CompareChoices();
    }

    getEnemyChoice() {
        const choices = ["enemyRock","enemyPaper", "enemyScissor"];
        
        const randomValue = Math.floor(Math.random() * 2);
        this.enemyChoice = choices[randomValue];
        console.log(randomValue);
    }

    setUserChoiceColor(){
        console.log(this.UserChoice)
        const bttUser = document.querySelector(`#${this.UserChoice}`);

        bttUser.style.border = "2px solid green";
        bttUser.style.boxShadow = "1px 1px 10px green";
    }

    setEnemyChoiceColor() {
        console.log(this.enemyChoice);
        const bttEnemy = document.querySelector(`#${this.enemyChoice}`);

        bttEnemy.style.border = "2px solid red";
        bttEnemy.style.boxShadow = "1px 1px 10px red";
    }

    CompareChoices() {
        if (this.enemyChoice == this.UserChoice) {
            this.draw();
        }
        else if (this.enemyChoice == "enemyRock") {
            if (this.UserChoice == "Scissor") {
                this.enemyPoint();
            }
            else {
                this.userPoint();
            }
        }
        else if (this.enemyChoice == "enemyPaper") {
            if (this.UserChoice == "Rock") {
                this.enemyPoint();
            }
            else {
                this.userPoint();
            }
        }
        else if (this.enemyChoice == "enemyScissor") {
            if (this.UserChoice == "Paper") {
                this.enemyPoint();
            }
            else {
                this.userPoint();
            }
        }
    }

    draw() {
        this.userSpanPoint.innerText +=1;
        this.enemySpanPoint.innerText +=1;
    }

    enemyPoint() {
        this.enemySpanPoint.innerText +=1;
    }

    userPoint() {
        this.userSpanPoint.innerText +=1;
    }

    resetGameAndStart() {
        this.infinitTimer();
    }

    infinitTimer() {
        this.secTimer.innerText = 5;
        this.timerId = setInterval(() => {
            this.decrementValue();
        }, 1000);
    }

    decrementValue() {
        secTimer.innerText -= 1;
        if (this.secTimer.innerText == 0 && this.rounds != 3) {
            clearInterval(this.timerId);
            this.setEnemyChoiceColor();
            this.interval();
            
        }
        else if (this.secTimer.innerText == 0 && this.rounds == 3) {
            this.rounds = 1;
            clearInterval(this.timerId);
            this.resetGameAndStart();
            return;
        }
    }

    interval(){
        setTimeout(()=>{
            this.resetEnemyChoice();
            this.resetUserChoice();
            this.infinitTimer();
        },3000);
    }

    resetEnemyChoice() {
        const bttEnemy = document.querySelector(`#${this.enemyChoice}`);
        if (!bttEnemy) return;

        bttEnemy.style.border = "2px solid white";
        bttEnemy.style.boxShadow = "none";
    }

    resetUserChoice(){
        const bttUser = document.querySelector(`#${this.UserChoice}`);
        if (!bttUser) return;

        bttUser.style.border = "2px solid white";
        bttUser.style.boxShadow = "none";
    }
    
}

const game = new Game();