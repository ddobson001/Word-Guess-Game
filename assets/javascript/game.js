//Global Variables
// ==================================================================================
// create an array of words
let word = [
    `bulbasaur`,
    `Charmander`,
    `squirtle`,
    `butterfree`,
    `pidgeotto`,
    `clefairy`,
    `vulpix`,
    `jigglypuff`,
    `alakazam`,
    `geodude`,
    `haunter`,
    `koffing`,
    `eevee`,
    `pikachu`,
    `mew`,
    `magikarp`,
];
//Set limit on tries
let guesses = 4;

// Choose word randomly
let randomWord = Math.floor(Math.random() * word.length);
let choosenWord = word[randomWord];
let wrongWord = [];

// DOM Manipulation
let docUnderScore = document.getElementsByClassName(`underScore`);
let docRightGuess = document.getElementsByClassName(`rightGuess`);
let docWrongGuess = document.getElementsByClassName(`wrongGuess`);

docUnderScore.innerHTML = generateUnderscore().join(``);
var newUnderscoreArray = generateUnderscore();
console.log(newUnderscoreArray);

//Main
// ==================================================================================

// Create underscores based on legnth of word
function generateUnderscore() {
    let underScore = [];
    for (let i = 0; i < choosenWord.length; i++) {
        underScore.push(`_`);
    }
    return underScore;
}


// Get users guess
document.addEventListener(`keypress`, (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    //if User guess is right
    if  (choosenWord.indexOf(keyword) > -1) {
        // replace underscore with right letter
        for (var i = 0; i < choosenWord.length; i++ ) {
            if (choosenWord[i] == keyword) {
                underScore[i] = keyword;
                docUnderScore.innerHTML = underScore.join(` `);
            } 
        } 
    }
    else {
        wrongWord.push(keyword);
        docWrongGuess.innerHTML = wrongWord;
        guesses--;
        document.getElementById("guesses-left").innerHTML = guesses;
    }
});

// Check if guess is right
// if right right push to right array
// if wrong push to wrong array




