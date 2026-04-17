//Game State
let secretWord = ""



//const levels                                                                                                                             constant list never changes
const Breakfast = ["Pancakes", "Eggs", "Benedict", "Waffles", "French Toast", "Omelet", "Breakfast Burrito", "Chilaquiles"];
const Lunch = ["Tacos", "Burger", "Sandwich", "Salad", "Pizza", "Nachos", "Burrito", "Gyro"];
const Dinner = ["Sushi", "Pasta", "Steak", "Kebab", "Fish", "Roasted Chicken", "Fajitas", "Lamb Chops"];

 
//Levels                                                                                                        for loop deletes variables
let easyWords = ["Pancakes", "Eggs", "Benedict", "Waffles", "French Toast", "Omelet", "Breakfast Burrito", "Chilaquiles"];
let mediumWords = ["Tacos", "Burger", "Sandwich", "Salad", "Pizza", "Nachos", "Burrito", "Gyro"];
let hardWords = ["Sushi", "Pasta", "Steak", "Kebab", "Fish", "Roasted Chicken", "Fajitas", "Lamb Chops"];


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


   for(let i = 0; i < selectedList.length; i++){
        if (selectedList[i] === secretWord) {
            selectedList.splice(i, 1);}                                    // Removes the picked word from the list
        }

    if (easyWords.length === 0) {
        easyWords = [...Breakfast]; 
    } 
    if (mediumWords.length === 0) {     // restoring the list but i had to use AI overview in google to learn about [... Name of the list]
        mediumWords = [...Lunch];
    } 
    if (hardWords.length === 0) {
        hardWords = [...Dinner];
    }


    document.getElementById("word-display").innerHTML = 
        "<h2>Enjoy eating: " + secretWord + "!</h2>";                          //saying it

}


document.getElementById("playBtn").addEventListener("click", function() {
    let level = document.querySelector('input[name="level"]:checked').id;               //making the choose button work when clicked
        startGame(level);
});