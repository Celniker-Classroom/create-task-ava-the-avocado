
let secretWord = ""
let favorites = [];


const Breakfast = ["Pancakes", "Eggs", "Benedict", "Waffles", "French Toast", "Omelet", "Breakfast Burrito", "Chilaquiles"];
const Lunch = ["Tacos", "Burger", "Sandwich", "Salad", "Pizza", "Nachos", "Burrito", "Gyro"];
const Dinner = ["Sushi", "Pasta", "Steak", "Kebab", "Fish", "Roasted Chicken", "Fajitas", "Lamb Chops"];

 
let easyWords = ["Pancakes", "Eggs", "Benedict", "Waffles", "French Toast", "Omelet", "Breakfast Burrito", "Chilaquiles"];
let mediumWords = ["Tacos", "Burger", "Sandwich", "Salad", "Pizza", "Nachos", "Burrito", "Gyro"];
let hardWords = ["Sushi", "Pasta", "Steak", "Kebab", "Fish", "Roasted Chicken", "Fajitas", "Lamb Chops"];



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
        secretWord = hardWords[Math.floor(Math.random() * hardWords.length)];         
    }

   for(let i = 0; i < selectedList.length; i++){
        if (selectedList[i] === secretWord) {
            selectedList.splice(i, 1);}                                  
        }

    if (easyWords.length === 0) {
        easyWords = [...Breakfast]; 
    } 
    if (mediumWords.length === 0) {    
        mediumWords = [...Lunch];
    } 
    if (hardWords.length === 0) {
        hardWords = [...Dinner];
    }

    document.getElementById("word-display").innerHTML = 
        "<h2>Enjoy eating: " + secretWord + "!</h2>";                       

}


document.getElementById("playBtn").addEventListener("click", function() {
    let level = document.querySelector('input[name="level"]:checked').id;             
        startGame(level);
});

document.getElementById("favBtn").addEventListener("click", function(){
    if (secretWord !== ""){
        favorites.push(secretWord);
        updateFavorites();
    }
});




function updateFavorites() {
    let list = document.getElementById("favorites-list");
    list.innerHTML = "";

    for (let i = 0; i < favorites.length; i++) {
        let li = document.createElement("li");
        li.textContent = favorites[i];
        list.appendChild(li);
    }
}