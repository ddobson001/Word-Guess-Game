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
let maxTries = 4;
// Choose word randomly
let randomWord = Math.floor(Math.random() * word.length);
let choosenWord = word[randomWord];
let rightWord = [];
let wrongWord = [];
let underScore = [];

// DOM Manipulation
let docUnderScore = document.getElementsByClassName(`underScore`);
let docRightGuess = document.getElementsByClassName(`rightGuess`);
let docWrongGuess = document.getElementsByClassName(`wrongGuess`);

//Main
// ==================================================================================

console.log(rightWord);
// Create underscores based on legnth of word
let generateUnderscore = () => {
    for (let i = 0; i < choosenWord.length; i++) {
        underScore.push(`_`)
            ;
    }
    return underScore;
}

// Get users guess
document.addEventListener(`keypress`, (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    //if User guess is right
    if (choosenWord.indexOf(keyword) > -1) {
        // replace underscore with right letter
        underScore[choosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(` `);
        docRightGuess[0].innerHTML = rightWord;
        // check to see if user word matches guesses
        if (underScore.join(``) == choosenWord) {
            alert(`You Win`);
        }
    }
    else {
        wrongWord.push(keyword);
        docUnderScore[0].innerHTML = underScore.join(` `);
        docWrongGuess[0].innerHTML = wrongWord;
    }
});

docUnderScore[0].innerHTML = generateUnderscore().join(``);
// Check if guess is right
// if right right push to right array
// if wrong push to wrong array




