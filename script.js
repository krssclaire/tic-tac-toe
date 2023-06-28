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
Pseudo code

Player { name, symbol }
Gameboard { 
    logical gameboard x DOM gameboard
}

game {
    let input text;
    let activePlayer = playerOne
    let playerX, playerO, start btn;
    starts onclick of 'Start game' button

    game on turn {
        toggle active player and make stuff happen on turn 
    }

    check winner / tie {
        let winningCombo

        if (winning combo) {
            display winner message 
            make winner window appear
        } 
    }
}

renderContent {

    make windows appear / disappear

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