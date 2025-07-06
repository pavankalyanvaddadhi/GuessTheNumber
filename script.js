let x = Math.floor((Math.random() * 20) + 1);
let score = 20;
let highscore = 0;
const check = () => {


    if (score >= 1) {
        if (document.getElementById("input").value < x) {
            document.getElementById("message").textContent = "Too low!"
            score = score - 1;
            document.getElementById("score").textContent = score;
        }


        if (!document.getElementById("input").value) {
            document.getElementById("message").textContent = "Enter a number!";
        }


        if (document.getElementById("input").value > x) {
            document.getElementById("message").textContent = "Too high!";
            score = score - 1;
            document.getElementById("score").textContent = score;
        }


        if (document.getElementById("input").value == x) {
            document.getElementById("message").textContent = "Correct Guess!";
            document.body.style.background = "#48a648";
            document.getElementById("number").textContent = x;

            if (score > highscore) {
                highscore = score
                document.getElementById("highscore").textContent = highscore;
            }

        }
    }

    if (score < 1) {
        document.getElementById("message").textContent = "You lost the game!";
        document.body.style.background = "#761a1a";
    }
}


const reset = () => {
    x = Math.floor((Math.random() * 20) + 1);
    document.getElementById("score").textContent = "20"
    document.getElementById("number").textContent = "?";
    document.body.style.background = "#222";
    document.getElementById("input").value = "";
    document.getElementById("message").textContent = "Start guessing...";
}

