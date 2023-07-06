const Player = (symbol) => {
    return { symbol };
};

const Gameboard = (() => {
    let board = [
        '', '', '', 
        '', '', '', 
        '', '', ''
    ];
    return { board };
})();

// Display players window and winner window
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
    /*
    const resetBoard = () => {
        Gameboard.board = ['', '', '', '', '', '', '', '', ''];
        gameFlow.cells.forEach(cell => cell.textContent = '');
        gameFlow.freeSpots = 9;
    };
    */
    const resetBoard = () => window.location.reload();

    const playerXName = () => playerXInput.value;
    const playerOName = () => playerOInput.value;

    startBtn,addEventListener('click', (e) => {
        if(form.checkValidity()) {
            e.preventDefault();
            hidePlayerWindow();
        }
    });
    newGameBtn.addEventListener('click', () => {
        hideWinnerWindow();
        resetBoard();
    });
    
    return {
        hideWinnerWindow,
        showWinnerWindow, 
        resetBoard,
        playerXName, 
        playerOName
    }  
})();

const gameFlow = (() => {
    const turnMessage = document.querySelector('#turn-message');
    const winnerMessage = document.querySelector('#winner-message');
    const cells = document.querySelectorAll('.field');
    const playerX = Player('X');
    const playerO = Player('O');
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],    // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],    // Columns
        [0, 4, 8], [2, 4, 6]                // Diagonals
    ];
    let activePlayer = playerX;
    let freeSpots = 9;
    
    const playerTurn = () => {
        if (activePlayer === playerX) {
            activePlayer = playerO;
            turnMessage.textContent = `${displayWindows.playerOName()}'s turn`
        } else  {
            activePlayer = playerX;
            turnMessage.textContent = `${displayWindows.playerXName()}'s turn`
        }
    };

    const decreaseFreeSpots = () => freeSpots -=1;

    const checkWinner = () => {
        winningCombos.forEach(space => {
            if (
                Gameboard.board[space[0]] === activePlayer.symbol &&
                Gameboard.board[space[1]] === activePlayer.symbol &&
                Gameboard.board[space[2]] === activePlayer.symbol
            ) {
                console.log('we have a winner');
                displayWindows.showWinnerWindow();
                winnerMessage.textContent = 'we have a winner';
            } else if (freeSpots == 0) {
                displayWindows.showWinnerWindow();
                winnerMessage.textContent = 'It is a tie!';
            }
        });
    };

    /*
    check winner / tie {
        let winningCombo

        if (winning combo) {
            display winner message 
        } else if (no cell is empty){
            tie
        }
        make winner window appear
    }
    */

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            if (!cell.textContent == '') return;
            cell.textContent = activePlayer.symbol;
            console.log(activePlayer.symbol);
            Gameboard.board[index] = cell.textContent;
            console.log(Gameboard.board);
            decreaseFreeSpots();
            console.log(`Free spots: ${freeSpots}`);
            checkWinner();
            playerTurn();
        });
    });

    return { 
        cells,
        freeSpots
    }
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