const Player = (name, symbol) => {
    const getName = () => {
        if (name === '') {
            return name = `Player ${symbol}`;
        } else {
            return name;
        }
    }
    return { 
        getName, 
        symbol 
    };
};

// Example
const person = Player('ash', 'X');
//console.log(person.getName());

const displayWindows = (() => {
    const form = document.querySelector('form');
    const startBtn = document.querySelector('#start');
    const playerWindow = document.querySelector('.player-window');
    const newGameBtn = document.querySelector('#new-game');
    const winnerWindow = document.querySelector('.winner-window');
    
    const hidePlayerWindow = () => playerWindow.style.display = 'none';
    const showWinnerWindow = () => winnerWindow.classList.remove('invisible');
    const hideWinnerWindow = () => winnerWindow.classList.add('invisible');
    
    startBtn,addEventListener('click', (e) => {
        if(form.checkValidity()) {
            e.preventDefault();
            console.log('Player window hidden');
            hidePlayerWindow();
        }
    });
    newGameBtn.addEventListener('click', hideWinnerWindow);
    
    return {
        hideWinnerWindow,
        showWinnerWindow
    }  
})();

const Gameboard = (() => {
    let board = [
        '', '', '', 
        '', '', '', 
        '', '', ''
    ];
    return { board };
})();

const gameFlow = (() => { })();

/*
Pseudo code

Gameboard { 
    logical gameboard x DOM gameboard
}

game {
    let input text;
    let activePlayer = playerOne
    let playerX, playerO;

    game on turn {
        toggle active player and make stuff happen on turn 
    }

    check winner / tie {
        let winningCombo

        if (winning combo) {
            display winner message 
        } else if (no cell is empty){
            tie
        }
        make winner window appear
    }

    reset {
        reset board
    }
}

renderBoard {


    displayController {
        addEvent listener on cells
        users can play on turn
        position os symbol based on gameboard indexes
    }


}

*/

/*
> Code Organization Scheme
get players names -> game -> round results

player
gameboard
renderContent -> from array to webpage
displayController -> on the right place of the grid on the DOM
                    Note: no places already taken
checkWin -> win / game over / tie
input Players
start/restart 
*/