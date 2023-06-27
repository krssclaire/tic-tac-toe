const Player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    return { getName, getSymbol };
}

const Gameboard = (() => {
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    return gameBoard;
})();

/*
const playerOne = Player('X');
const playerTwo = Player('O');
*/

//const displayController = (() => { })();

/*
> Organization Scheme

player
gameboard
renderContent -> from array to webpage
displayController -> on the right place of the grid on the DOM
                    Note: no places already taken
checkWin -> win / game over / tie
input Players
start/restart 


*/