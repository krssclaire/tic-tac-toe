const Player = (symbol) => {
    return { symbol };
};

const Gameboard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];
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
    const resetVirtualBoard = () => {
        Gameboard.board = ['', '', '', '', '', '', '', '', ''];
    };
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
        resetVirtualBoard();
        gameFlow.resetBoard();
    });
    
    return {
        hideWinnerWindow,
        showWinnerWindow, 
        resetVirtualBoard,
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
            turnMessage.textContent = `${displayWindows.playerOName()}'s turn`;
        } else  {
            activePlayer = playerX;
            turnMessage.textContent = `${displayWindows.playerXName()}'s turn`;
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
                if (activePlayer == playerX) {
                    winnerMessage.textContent = `${displayWindows.playerXName()} is the winner`;
                } else {
                    winnerMessage.textContent = `${displayWindows.playerOName()} is the winner`;
                }
            } else if (freeSpots == 0) {
                displayWindows.showWinnerWindow();
                winnerMessage.textContent = 'It is a tie!';
            }
        });
    };

    const resetBoard = () => {
        cells.forEach(cell => cell.textContent = '');
        freeSpots = 9;
        activePlayer = playerX;
        turnMessage.textContent = `${displayWindows.playerXName()}'s turn`;
    }

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
        resetBoard
    }
})();