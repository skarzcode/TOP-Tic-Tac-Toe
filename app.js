
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

    let hasEnded = false;

    let counter = 0;


    const checkifWon = (player, boardContainer,gameEnded,playerCelebrate) => {
            if (GameBoard.board[0] == player.sign && GameBoard.board[1] == player.sign && GameBoard.board[2] == player.sign) {
                boardContainer.classList.remove("displayContainer");
                gameEnded.style.display = 'block';
                playerCelebrate.innerHTML = `${player.Name} has Won.`;
                hasEnded = true;
               
            } 
            else if (GameBoard.board[3] == player.sign && GameBoard.board[4] == player.sign && GameBoard.board[5] == player.sign) {
                boardContainer.classList.remove("displayContainer");
                gameEnded.style.display = 'block';
                playerCelebrate.innerHTML = `${player.Name} has Won.`;
                GameBoard.hasEnded = true;
               
               
            }
            else if(GameBoard.board[6] == player.sign && GameBoard.board[7] == player.sign && GameBoard.board[8] == player.sign) {
                boardContainer.classList.remove("displayContainer");
                gameEnded.style.display = 'block';
                playerCelebrate.innerHTML = `${player.Name} has Won.`;
                GameBoard.hasEnded = true;
               
            }
            else if(GameBoard.board[0] == player.sign && GameBoard.board[3] == player.sign && GameBoard.board[6] == player.sign) {
                boardContainer.classList.remove("displayContainer");
                gameEnded.style.display = 'block';
                playerCelebrate.innerHTML = `${player.Name} has Won.`;
                GameBoard.hasEnded = true;
               
            }
            else if(GameBoard.board[1] == player.sign && GameBoard.board[4] == player.sign && GameBoard.board[7] == player.sign) {
                boardContainer.classList.remove("displayContainer");
                gameEnded.style.display = 'block';
                playerCelebrate.innerHTML = `${player.Name} has Won.`;
                GameBoard.hasEnded = true;
               
            }
            else if(GameBoard.board[2] == player.sign && GameBoard.board[5] == player.sign && GameBoard.board[8] == player.sign) {
                boardContainer.classList.remove("displayContainer");
                gameEnded.style.display = 'block';
                playerCelebrate.innerHTML = `${player.Name} has Won.`;
                GameBoard.hasEnded = true;
               
            }
            else if(GameBoard.board[0] == player.sign && GameBoard.board[4] == player.sign && GameBoard.board[8] == player.sign) {
                boardContainer.classList.remove("displayContainer");
                gameEnded.style.display = 'block';
                playerCelebrate.innerHTML = `${player.Name} has Won.`;
                GameBoard.hasEnded = true;
            }
            else if(GameBoard.board[2] == player.sign && GameBoard.board[4] == player.sign && GameBoard.board[6] == player.sign) {
            boardContainer.classList.remove("displayContainer");
            gameEnded.style.display = 'block';
            playerCelebrate.innerHTML = `${player.Name} has Won.`;
            GameBoard.hasEnded = true;
            } 
            else{
                GameBoard.counter += 1;
                console.log(GameBoard.counter);
            }

            if (GameBoard.counter >= 9){
                console.log("draw");
                GameBoard.hasEnded = true;
            };
    //      else if (!(GameBoard.board[0] == player.sign && GameBoard.board[1] == player.sign && GameBoard.board[2] == player.sign)) {
    //        console.log()
           
    //     } 
    //     else if (GameBoard.board[3] == player.sign && GameBoard.board[4] == player.sign && GameBoard.board[5] == player.sign) {
    //         boardContainer.classList.remove("displayContainer");
    //         gameEnded.style.display = 'block';
    //         playerCelebrate.innerHTML = `${player.Name} has Won.`;
    //         hasEnded = true;
           
           
    //     }
    //     else if(GameBoard.board[6] == player.sign && GameBoard.board[7] == player.sign && GameBoard.board[8] == player.sign) {
    //         boardContainer.classList.remove("displayContainer");
    //         gameEnded.style.display = 'block';
    //         playerCelebrate.innerHTML = `${player.Name} has Won.`;
    //         hasEnded = true;
           
    //     }
    //     else if(GameBoard.board[0] == player.sign && GameBoard.board[3] == player.sign && GameBoard.board[6] == player.sign) {
    //         boardContainer.classList.remove("displayContainer");
    //         gameEnded.style.display = 'block';
    //         playerCelebrate.innerHTML = `${player.Name} has Won.`;
    //         hasEnded = true;
           
    //     }
    //     else if(GameBoard.board[1] == player.sign && GameBoard.board[4] == player.sign && GameBoard.board[7] == player.sign) {
    //         boardContainer.classList.remove("displayContainer");
    //         gameEnded.style.display = 'block';
    //         playerCelebrate.innerHTML = `${player.Name} has Won.`;
    //         hasEnded = true;
           
    //     }
    //     else if(GameBoard.board[2] == player.sign && GameBoard.board[5] == player.sign && GameBoard.board[8] == player.sign) {
    //         boardContainer.classList.remove("displayContainer");
    //         gameEnded.style.display = 'block';
    //         playerCelebrate.innerHTML = `${player.Name} has Won.`;
    //         hasEnded = true;
           
    //     }
    //     else if(GameBoard.board[0] == player.sign && GameBoard.board[4] == player.sign && GameBoard.board[8] == player.sign) {
    //         boardContainer.classList.remove("displayContainer");
    //         gameEnded.style.display = 'block';
    //         playerCelebrate.innerHTML = `${player.Name} has Won.`;
    //         hasEnded = true;
           
    //     }
    //     else if(GameBoard.board[2] == player.sign && GameBoard.board[4] == player.sign && GameBoard.board[6] == player.sign) {
    //     boardContainer.classList.remove("displayContainer");
    //     gameEnded.style.display = 'block';
    //     playerCelebrate.innerHTML = `${player.Name} has Won.`;
    //     hasEnded = true;
    // } 
    }

    return {
        board,
        gameCell,
        checkifWon,
        hasEnded,
        counter
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
   let x = Math.floor(Math.random() * (GameBoard.gameCell.length - 1));
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
    let emptyCell = false;
    let counter = 0;
    

    const CPUrender = () => {
        player1.Name = prompt("What is your Name");
        boardContainer.classList.add("displayContainer");
        startGameContainer.classList.add("hideContainer"); 
        GameBoard.gameCell.forEach((cell) => {
            cell.addEventListener("click", function () { 
                let i = 0;
                const num = cell.id;
                if (playersGo == true && GameBoard.board[num] == "") {
                    cell.innerHTML = player1.sign;
                    GameBoard.board[num] = cell.innerHTML;
                    console.log(GameBoard.board)
                    playersGo = false;
                    emptyCell = false;
                    GameBoard.checkifWon(player1,boardContainer,gameEnded,playerCelebrate,GameBoard.counter);
                    if(GameBoard.hasEnded == true){

                    } else{
                    const cpuTurn = ()=>{
                        while (playersGo == false && emptyCell == false && GameBoard.hasEnded == false ){
                            let index = randomindex();
                            let print = false;
                            if(GameBoard.board[index] == ""){
                        GameBoard.gameCell[index].innerHTML = "O";
                        GameBoard.board[index] = "O";
                        setTimeout(() => {
                            GameBoard.checkifWon(player3,boardContainer,gameEnded,playerCelebrate,GameBoard.counter);
                        }, 2000);
                        emptyCell = true;
                        playersGo = true;
                        }};
                       
                       
                    };
                    

                    setTimeout(cpuTurn, 2000);
        
                    
                }
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