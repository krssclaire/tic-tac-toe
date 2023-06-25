const Gameboard = (() => {
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    return gameBoard;
})();

const Player = (symbol) => {
    const getSymbol = () => symbol;
    return { getName, getSymbol };
}

/*
const playerOne = Player('X');
const playerTwo = Player('O');
*/

//const displayController = (() => { })();