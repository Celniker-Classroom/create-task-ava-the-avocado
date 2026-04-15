//Game State
let secretWord = ""
let dashed = []


//Levels
const easyWords = ["Pancakes", "Eggs", "Benedict", "Waffles", "French Toast", "Omelet", "Breakfast Burrito", "Chilaquiles"];
const mediumWords = ["Tacos", "Burger", "Sandwich", "Salad", "Pizza", "Nachos", "Burrito", "Gyro"];
const hardWords = ["Sushi", "Pasta", "Steak", "Kabob", "Fish", "Roasted Chicken", "Fajitas", "Lamb Chops"];


// random dish

function startGame(chosenLevel) {
    let selectedList = [];



    if (chosenLevel === "e"){
        selectedList = easyWords;
        secretWord = easyWords[Math.floor(Math.random() * easyWords.length)];
    }
    else if (chosenLevel === "m"){
        selectedList = mediumWords;
        secretWord = mediumWords[Math.floor(Math.random() * mediumWords.length)];
    }
    else {
        selectedList = hardWords;
        secretWord = hardWords[Math.floor(Math.random() * hardWords.length)];            //getting a random word from the specific list
    }

    dashed = []; 
    for(let i = 0; i < selectedList.length; i++){
        dashed.push(selectedList[i]);
    }

    document.getElementById("word-display").innerHTML = 
        "<p>Options were: " + dashed.join(", ") + "</p>" + 
        "<h2>Enjoy eating: " + secretWord + "!</h2>";

}


document.getElementById("playBtn").addEventListener("click", function() {
    let level = document.querySelector('input[name="level"]:checked').id;
        startGame(level);
});