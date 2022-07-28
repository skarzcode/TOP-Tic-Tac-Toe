
const player = (Name, sign) => {
    const printSign = () => sign;
    return {
        Name,
        sign,
        printSign
    }
};





const GameBoard = (() => {

    const board = ["", "", "",
        "", "", "",
        "", "", ""
    ];

    const gameCell = document.querySelectorAll(".Cell");


    const checkifWon = (player, boardContainer,gameEnded) => {
            if (GameBoard.board[0] == player.sign && GameBoard.board[1] == player.sign && GameBoard.board[2] == player.sign) {
                console.log(`${player.Name} has won`);
                boardContainer.classList.remove("displayContainer");
                gameEnded.style.display = 'block';
               
            }
            if (GameBoard.board[3] == player.sign && GameBoard.board[4] == player.sign && GameBoard.board[5] == player.sign) {
                console.log(`${player.Name} has won`);
                boardContainer.classList.remove("displayContainer");
                gameEnded.style.display = 'block';
               
            }
            if (GameBoard.board[6] == player.sign && GameBoard.board[7] == player.sign && GameBoard.board[8] == player.sign) {
                console.log(`${player.Name} has won`);
                boardContainer.classList.remove("displayContainer");
                gameEnded.style.display = 'block';
               
            }
            if (GameBoard.board[0] == player.sign && GameBoard.board[3] == player.sign && GameBoard.board[6] == player.sign) {
                console.log(`${player.Name} has won`);
                boardContainer.classList.remove("displayContainer");
                gameEnded.style.display = 'block';
               
            }
            if (GameBoard.board[1] == player.sign && GameBoard.board[4] == player.sign && GameBoard.board[7] == player.sign) {
                console.log(`${player.Name} has won`);
                boardContainer.classList.remove("displayContainer");
                gameEnded.style.display = 'block';
               
            }
            if (GameBoard.board[2] == player.sign && GameBoard.board[5] == player.sign && GameBoard.board[8] == player.sign) {
                console.log(`${player.Name} has won`);
                boardContainer.classList.remove("displayContainer");
                gameEnded.style.display = 'block';
               
            }
            if (GameBoard.board[0] == player.sign && GameBoard.board[4] == player.sign && GameBoard.board[8] == player.sign) {
                console.log(`${player.Name} has won`);
                boardContainer.classList.remove("displayContainer");
                gameEnded.style.display = 'block';
               
            }
            if (GameBoard.board[2] == player.sign && GameBoard.board[4] == player.sign && GameBoard.board[6] == player.sign) {
            console.log(`${player.Name} has won`);
            boardContainer.classList.remove("displayContainer");
            gameEnded.style.display = 'block';
           
        }
    };

    return {
        board,
        gameCell,
        checkifWon
    };

})();

const Game = (() => {

    const input1 = document.querySelector(".player1Value");
const input2 = document.querySelector(".player2Value");
const startGame = document.querySelector(".startGameBtn");
const startGameContainer = document.querySelector(".startGame");
const boardContainer = document.querySelector(".boardContainer");
const gameEnded = document.querySelector(".gameEnded");
const playerCelebrate = document.querySelector(".playerCelebrate")
const restartGame = document.querySelector(".restart");
const randomindex = () => {
   let x = Math.floor(Math.random() * GameBoard.gameCell.length-1);
   return x;
};



const player1 = player("", "X");
const player2 = player("", "O");
const player3 = player("CPU","O");

const cpuMove = () =>{
    let index = randomindex();
    do {
        index = randomindex;
        GameBoard.board[index] = "O";
        GameBoard.gameCell.innerHTML = GameBoard.board[index];
    } while(GameBoard.gameCell[index] == "X");
    
};
   



    const start = () => {

    startGame.addEventListener("click", function(){
        if(input1.value && input2.value){
        player1.Name = input1.value;
        player2.Name = input2.value;
        boardContainer.classList.add("displayContainer");
        startGameContainer.classList.add("hideContainer");
        
        
        };
    })
};  
restartGame.addEventListener("click", function(){
    location.reload();
})

    let playersGo = true;

    const CPUrender = () => {
        boardContainer.classList.add("displayContainer");
        startGameContainer.classList.add("hideContainer"); 
        GameBoard.gameCell.forEach((cell) => {
            cell.addEventListener("click", function () { 
                const num = cell.id;
                if (playersGo == true && GameBoard.board[num] == "") {
                    cell.innerHTML = player1.sign;
                    GameBoard.board[num] = cell.innerHTML;
                    console.log(GameBoard.board)
                    playersGo = false;
                    GameBoard.checkifWon(player1,boardContainer,gameEnded);
                    playerCelebrate.innerHTML = `${player1.Name} has Won.`;
                    const cpuTurn = ()=>{
                        if (playersGo == false){
                            let index = randomindex();
                            GameBoard.board[index] = "O";
                            GameBoard.gameCell[index].innerHTML = "O"
                            playersGo = true
                        }
                    };
                    setInterval(cpuTurn, 1000);
                   
                }

                
               

        })})}


    const PVPrender = () => {
        start();
        GameBoard.gameCell.forEach((cell) => {
            cell.addEventListener("click", function () {
                const num = cell.id;
                if (playersGo == true && GameBoard.board[num] == "") {
                    cell.innerHTML = player1.sign;
                    GameBoard.board[num] = cell.innerHTML;
                    console.log(GameBoard.board)
                    playersGo = false;
                    GameBoard.checkifWon(player1,boardContainer,gameEnded);
                    playerCelebrate.innerHTML = `${player1.Name} has Won.`;
                } else if (playersGo == false && GameBoard.board[num] == "") {
                    cell.innerHTML = player2.sign;
                    GameBoard.board[num] = cell.innerHTML;
                    console.log(GameBoard.board)
                    playersGo = true;
                    GameBoard.checkifWon(player2,boardContainer,gameEnded);
                    playerCelebrate.innerHTML = `${player2.Name} has Won.`;
                }
            })
        })
    };



    return {
        PVPrender, start,CPUrender
    };

})();







// Game.PVPrender();
Game.CPUrender();





//   console.log(`i'm ${player1.Name} and my sign is ${player1.sign}`);
//   console.log(`i'm ${player2.Name} and my sign is ${player2.sign}`);

//   GameBoard.board[0] = player1.printSign();
//   GameBoard.board[1] = player2.printSign();

//   console.log(GameBoard.board);