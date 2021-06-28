'use strict';

const options = ['Rock', 'Paper', 'Scissors'];

// Metodo juego de la pc
const computerPlay = (options) => {
    let choice = Math.floor(Math.random() * (options.length));
    let choiceOne = options[choice];
    return choiceOne;

}

//console.log(computerPlay(options));

// Metodo Juego de persona
const playerPlay = () => {
    let choice = prompt('Choose your game option: Rock, Paper or Scissors! Choose well..');
    return choice;
}

// Metodo Juego por ronda
const playRound = (playerSelector, computerSelector) => {
    let str = `Player choose: ${playerSelector} Pc choose: ${computerSelector}`;
    console.log(str);
    //choose Rock
    if(playerSelector == 'Rock' && computerSelector == 'Rock') {
        return "It's a tie!";
    }else if (playerSelector == 'Rock' && computerSelector == 'Paper') {
        return "You lose! Paper beats Rock";
    } else if (playerSelector == 'Rock' && computerSelector == 'Scissors') {
        return "You win! Rock beats scissors";
    }
    //Choose Paper
    else if(playerSelector == 'Paper' && computerSelector == 'Rock') {
        return "You win! Paper beats Rock";
    }else if(playerSelector == 'Paper' && computerSelector == 'Paper') {
        return "It's a tie!";
    }else if(playerSelector == 'Paper' && computerSelector == 'Scissors') {
        return "You lose! Scissors beats Paper";
    }
    //Choose Scissors
    else if(playerSelector == 'Scissors' && computerSelector == 'Rock') {
        return "You lose! Rock beats Scissors";
    }else if(playerSelector == 'Scissors' && computerSelector == 'Paper') {
        return "You win! Scissors beats Paper";
    }else if(playerSelector == 'Scissors' && computerSelector == 'Scissors') {
        return "It's a tie!";
    }

}

const playerSelector = playerPlay();
const computerSelector = computerPlay(options);
console.log(playRound(playerSelector, computerSelector));