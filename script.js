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
//const person = Player('ash', 'X');
//console.log(person.getName());

const Gameboard = (() => {
    let board = [
        '', '', '', 
        '', '', '', 
        '', '', ''
    ];
    return { board };
})();

const displayWindows = (() => {
    const form = document.querySelector('form');
    const startBtn = document.querySelector('#start');
    const playerWindow = document.querySelector('.player-window');
    const newGameBtn = document.querySelector('#new-game');
    const winnerWindow = document.querySelector('.winner-window');
    const playerXInput = document.querySelector('#player-x');
    const playerOInput = document.querySelector('#player-o');
    
    const hidePlayerWindow = () => playerWindow.style.display = 'none';
    const showWinnerWindow = () => winnerWindow.classList.remove('invisible');
    const hideWinnerWindow = () => winnerWindow.classList.add('invisible');
    const resetBoard = () => Gameboard.board = ['', '', '', '', '', '', '', '', ''];
    const playerXName = () => playerXInput.value;
    const playerOName = () => playerOInput.value;

    startBtn,addEventListener('click', (e) => {
        if(form.checkValidity()) {
            e.preventDefault();
            hidePlayerWindow();
        }
    });
    newGameBtn.addEventListener('click', hideWinnerWindow);
    
    return {
        hideWinnerWindow,
        showWinnerWindow, 
        resetBoard,
        playerXName, 
        playerOName
    }  
})();

const gameFlow = (() => {
    const cells = document.querySelectorAll('.field');
    const playerX = Player(displayWindows.playerXName(), 'X');
    const playerO = Player(displayWindows.playerOName(), 'O');
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],    // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],    // Columns
        [0, 4, 8], [2, 4, 6]                // Diagonals
    ];
    let activePlayer = playerX;
    
    const playerTurn = () => {
        activePlayer === playerX ? activePlayer = playerO : activePlayer = playerX;
    }

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            cell.textContent = activePlayer.symbol;
            playerTurn();
            Gameboard.board[index] = cell.textContent;
            console.log(Gameboard.board);
            console.log(activePlayer.symbol);
        });
    });

    return { }
})();

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