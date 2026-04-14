//Game State
let secretWord = ""
let dashed = []


//Levels
const easyWords = ["Dog", "Cat", "Bat", "Bus", "Age", "Pet", "Ball", "Act"];
const mediumWords = ["Heart", "Sound", "Cabin", "Daisy", "Karma", "Nacho", "Nails", "Radio"];
const hardWords = ["Pizzazz", "Quizzes", "Grizzly", "Puzzler", "Zombify", "Squeeze", "Quickly", "Squeaky"];


// ____

function startGame() {
    let level = document.querySelector('input[name="level"]:checked').id;  //finds which level was picked

    if (level === "e"){
        secretWord = easyWords[Math.floor(Math.random() * easyWords.length)];
    }
    else if (level === "m"){
        secretWord = mediumWords[Math.floor(Math.random() * mediumWords.length)];
    }
    else {
        secretWord = hardWords[Math.floor(Math.random() * hardWords.length)];            //getting a random word from the specific list
    }

    dashed = [];
    for(let i = 0; i<secretWord.length; i++){
        dashed.push("_");
    }
document.getElementById("word-display").innerHTML = "<p>Guess the word: " + dashed.join(" ") + "</p>";
    }


document.getElementById("playBtn").onclick = startGame;