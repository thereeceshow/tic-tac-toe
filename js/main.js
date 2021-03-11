class Board {
    constructor() { // Model
        this.boardArray = []
        this.tileClick = this.tileClick.bind(this);
        this.turnCount = 0
        this.xIsNeg = -3
        this.myModal = new bootstrap.Modal(document.getElementById('myModal'));
        this.winner = ''
        this.xyScore = [0,0]
    }
    render() {
        let mainDiv = document.getElementById('mainDiv')
        let title = document.createElement('h1');
        title.setAttribute('class', 'mx-5 justify-content-center text-center');
        title.setAttribute('id', 'title')
        title.innerText = 'Galactic Tic-Tac-Toe';
        mainDiv.appendChild(title);
        let board = document.createElement('div');
        board.setAttribute('class', 'row mx-1 p-3 justify-content-center');
        board.setAttribute('id', 'board');
        mainDiv.appendChild(board);
        let backUpNewBtn = document.createElement('button');
        backUpNewBtn.setAttribute('class', 'btn btn-dark mx-5 justify-content-center text-center');
        backUpNewBtn.setAttribute('id', 'backUpNewBtn')
        backUpNewBtn.innerText = 'New Game';
        title.appendChild(backUpNewBtn);
        backUpNewBtn.addEventListener('click', this.newGame.bind(this))

        for (let i = 0; i < 9; i++) {
            const tileObject = new Tile(i);
            let tileHtml = document.createElement('div');
            tileHtml.setAttribute('class', 'col-4 py-5 square text-center');
            tileHtml.setAttribute('id', i);
            tileHtml.addEventListener('click', e => this.tileClick(i)); // <---- access local members in an object you need to use 'this'
            board.appendChild(tileHtml);
            tileObject.html = tileHtml
            this.boardArray.push(tileObject)
    
        }

    }
    tileClick(index) {
        //console.log(index);
        if (this.boardArray[index].locked === false) {
            this.turnCount++
            this.boardArray[index].usedTile(this.turnCount);
            this.boardArray[index].locked = true;
            if (this.turnCount >= 5) {
                this.winCondition()
            }
        }
    }

    newGame() {
        this.turnCount = 0
        this.xIsNeg = ''
        this.myModal = new bootstrap.Modal(document.getElementById('myModal'));
        this.winner = ''
        console.log(this.boardArray)
        let lockDiv = document.getElementById('board')
        lockDiv.classList.remove('gameOver')


        for (let i = 0; i < 9; i++) {
            this.boardArray[i].html.innerHTML = ''
            this.boardArray[i].html.classList.remove('bg-success')
            this.boardArray[i].displayState = ''
            this.boardArray[i].id = i
            this.boardArray[i].locked = false
        }

    }


    winnerIs(winner) {
        let lockDiv = document.getElementById('board')
        lockDiv.classList.add('gameOver');
        let modalTitle = document.getElementById('modalTitle');
        if (winner === 3) {
            modalTitle.innerHTML = ('WINNER</br><i class="position-absolute top-50 start-50 translate-middle fab fa-empire fa-3x text-dark"></i>')

        } else {
            modalTitle.innerHTML = ('WINNER</br><i class="position-absolute top-50 start-50 translate-middle fab fa-rebel fa-3x text-dark"></i>')
        }
        this.myModal.show()
        let newGameBtn = document.getElementById('newGameBtn');
        newGameBtn.addEventListener('click', this.newGame.bind(this))
        

    }

    winCondition() {
        if (this.turnCount % 2 === 0) {
            this.xIsNeg = 3
        } else {
            this.xIsNeg = -3
        }

        let lockDiv = document.getElementById('board')

        if (this.boardArray[0].displayState + this.boardArray[1].displayState + this.boardArray[2].displayState == this.xIsNeg) {
            this.boardArray[0].html.classList.add('bg-success')
            this.boardArray[1].html.classList.add('bg-success')
            this.boardArray[2].html.classList.add('bg-success')
            lockDiv.classList.add('gameOver')
            this.winnerIs(this.xIsNeg)

        } else if (this.boardArray[3].displayState + this.boardArray[4].displayState + this.boardArray[5].displayState == this.xIsNeg) {
            this.boardArray[3].html.classList.add('bg-success')
            this.boardArray[4].html.classList.add('bg-success')
            this.boardArray[5].html.classList.add('bg-success')
            lockDiv.classList.add('gameOver')
            this.winnerIs(this.xIsNeg)

        } else if (this.boardArray[6].displayState + this.boardArray[7].displayState + this.boardArray[8].displayState == this.xIsNeg) {
            this.boardArray[6].html.classList.add('bg-success')
            this.boardArray[7].html.classList.add('bg-success')
            this.boardArray[8].html.classList.add('bg-success')
            lockDiv.classList.add('gameOver')
            this.winnerIs(this.xIsNeg)

        } else if (this.boardArray[0].displayState + this.boardArray[3].displayState + this.boardArray[6].displayState == this.xIsNeg) {
            this.boardArray[0].html.classList.add('bg-success')
            this.boardArray[3].html.classList.add('bg-success')
            this.boardArray[6].html.classList.add('bg-success')
            lockDiv.classList.add('gameOver')
            this.winnerIs(this.xIsNeg)

        } else if (this.boardArray[1].displayState + this.boardArray[4].displayState + this.boardArray[7].displayState == this.xIsNeg) {
            this.boardArray[1].html.classList.add('bg-success')
            this.boardArray[4].html.classList.add('bg-success')
            this.boardArray[7].html.classList.add('bg-success')
            lockDiv.classList.add('gameOver')
            this.winnerIs(this.xIsNeg)

        } else if (this.boardArray[2].displayState + this.boardArray[5].displayState + this.boardArray[8].displayState == this.xIsNeg) {
            this.boardArray[2].html.classList.add('bg-success')
            this.boardArray[5].html.classList.add('bg-success')
            this.boardArray[8].html.classList.add('bg-success')
            lockDiv.classList.add('gameOver')
            this.winnerIs(this.xIsNeg)

        } else if (this.boardArray[0].displayState + this.boardArray[4].displayState + this.boardArray[8].displayState == this.xIsNeg) {
            this.boardArray[0].html.classList.add('bg-success')
            this.boardArray[4].html.classList.add('bg-success')
            this.boardArray[8].html.classList.add('bg-success')
            lockDiv.classList.add('gameOver')
            this.winnerIs(this.xIsNeg)

        } else if (this.boardArray[6].displayState + this.boardArray[4].displayState + this.boardArray[2].displayState == this.xIsNeg) {
            this.boardArray[6].html.classList.add('bg-success')
            this.boardArray[4].html.classList.add('bg-success')
            this.boardArray[2].html.classList.add('bg-success')
            lockDiv.classList.add('gameOver')
            this.winnerIs(this.xIsNeg)
        } else {
            if (this.turnCount >= 9) {
                lockDiv.classList.add('gameOver');
                let modalTitle = document.getElementById('modalTitle');
                modalTitle.innerHTML = ('There is no Bargain.</br>Tie Game<img src="./img/jappa.png" alt="" class="img-fluid">You Weak Minded Fool!!!')
                this.myModal.show()
                let newGameBtn = document.getElementById('newGameBtn');
                newGameBtn.addEventListener('click', this.newGame);

            }
        }
    }
}

class Tile {
    constructor(id) { // Model
        this.html = ''
        this.displayState = ''
        this.id = id
        this.locked = false
    }
    // render() {
    //     // display blank, X, or O
    // }
    usedTile(turnCount) {
        console.log(this.id);
        console.log(turnCount)
        if (turnCount % 2 === 0) {
            //this.html.classList.add('bg-success')
            this.html.innerHTML = '<i class="fab fa-empire fa-3x text-white"></i>';
            this.displayState = 1;
        } else {
            //this.html.classList.add('bg-danger')
            this.html.innerHTML = '<i class="fab fa-rebel fa-3x text-danger"></i>';
            this.displayState = -1;
        }



    }
}

function init() {
    const board1 = new Board()
    board1.render()
}