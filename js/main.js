class Board {
    constructor() { // Model
        this.boardArray = []
        this.tileClick = this.tileClick.bind(this);
        this.turnCount = 0
        this.xIsNeg = -3
    }
    render() {
        let mainDiv = document.getElementById('mainDiv')
        let title = document.createElement('h1');
        title.setAttribute('class', 'mx-5 justify-content-center text-center');
        title.innerText = 'Galactic Tic-Tac-Toe';
        mainDiv.appendChild(title);
        let board = document.createElement('div');
        board.setAttribute('class', 'row mx-5 justify-content-center');
        mainDiv.appendChild(board);

        for (let i = 0; i < 9; i++) {
            const tileObject = new Tile(i);
            let tileHtml = document.createElement('div');
            tileHtml.setAttribute('class', 'col-4 p-5 border square text-center');
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
    winCondition() {
        if (this.turnCount % 2 === 0) {
            this.xIsNeg = 3
        } else {
            this.xIsNeg = -3
        }
        let mainDiv = document.getElementById('mainDiv')

        if (this.boardArray[0].displayState + this.boardArray[1].displayState + this.boardArray[2].displayState == this.xIsNeg) {
            console.log(this.xIsNeg === 3 ? "The Empire is the Winner" : "The Rebels have Won!!!")

            this.boardArray[0].html.classList.add('bg-danger')
            this.boardArray[1].html.classList.add('bg-danger')
            this.boardArray[2].html.classList.add('bg-danger')
            mainDiv.classList.add('gameOver')
            
        } else if (this.boardArray[3].displayState + this.boardArray[4].displayState + this.boardArray[5].displayState == this.xIsNeg) {
            console.log(this.xIsNeg === 3 ? "The Empire is the Winner" : "The Rebels have Won!!!")
            this.boardArray[3].html.classList.add('bg-danger')
            this.boardArray[4].html.classList.add('bg-danger')
            this.boardArray[5].html.classList.add('bg-danger')
            mainDiv.classList.add('gameOver')
            
        } else if (this.boardArray[6].displayState + this.boardArray[7].displayState + this.boardArray[8].displayState == this.xIsNeg) {
            console.log(this.xIsNeg === 3 ? "The Empire is the Winner" : "The Rebels have Won!!!")
            this.boardArray[6].html.classList.add('bg-danger')
            this.boardArray[7].html.classList.add('bg-danger')
            this.boardArray[8].html.classList.add('bg-danger')
            mainDiv.classList.add('gameOver')
            
        } else if (this.boardArray[0].displayState + this.boardArray[3].displayState + this.boardArray[6].displayState == this.xIsNeg) {
            console.log(this.xIsNeg === 3 ? "The Empire is the Winner" : "The Rebels have Won!!!")
            this.boardArray[0].html.classList.add('bg-danger')
            this.boardArray[3].html.classList.add('bg-danger')
            this.boardArray[6].html.classList.add('bg-danger')
            mainDiv.classList.add('gameOver')
            
        } else if (this.boardArray[1].displayState + this.boardArray[4].displayState + this.boardArray[7].displayState == this.xIsNeg) {
            console.log(this.xIsNeg === 3 ? "The Empire is the Winner" : "The Rebels have Won!!!")
            this.boardArray[1].html.classList.add('bg-danger')
            this.boardArray[4].html.classList.add('bg-danger')
            this.boardArray[7].html.classList.add('bg-danger')
            mainDiv.classList.add('gameOver')
            
        } else if (this.boardArray[2].displayState + this.boardArray[5].displayState + this.boardArray[8].displayState == this.xIsNeg) {
            console.log(this.xIsNeg === 3 ? "The Empire is the Winner" : "The Rebels have Won!!!")
            this.boardArray[2].html.classList.add('bg-danger')
            this.boardArray[5].html.classList.add('bg-danger')
            this.boardArray[8].html.classList.add('bg-danger')
            mainDiv.classList.add('gameOver')
            
        } else if (this.boardArray[0].displayState + this.boardArray[4].displayState + this.boardArray[8].displayState == this.xIsNeg) {
            console.log(this.xIsNeg === 3 ? "The Empire is the Winner" : "The Rebels have Won!!!")
            this.boardArray[0].html.classList.add('bg-danger')
            this.boardArray[4].html.classList.add('bg-danger')
            this.boardArray[8].html.classList.add('bg-danger')
            mainDiv.classList.add('gameOver')
            
        } else if (this.boardArray[6].displayState + this.boardArray[4].displayState + this.boardArray[2].displayState == this.xIsNeg) {
            console.log(this.xIsNeg === 3 ? "The Empire is the Winner" : "The Rebels have Won!!!");
            this.boardArray[6].html.classList.add('bg-danger')
            this.boardArray[4].html.classList.add('bg-danger')
            this.boardArray[2].html.classList.add('bg-danger')
            mainDiv.classList.add('gameOver')
        } else {
            console.log("Other Player's Turn")
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
    render() {
        // display blank, X, or O
    }
    usedTile(turnCount) {
        console.log(this.id);
        console.log(turnCount)
        if (turnCount % 2 === 0) {
            //this.html.classList.add('bg-success')
            this.html.innerHTML = '<i class="fab fa-empire fa-3x"></i>';
            this.displayState = 1;
        } else {
            //this.html.classList.add('bg-danger')
            this.html.innerHTML = '<i class="fab fa-rebel fa-3x"></i>';
            this.displayState = -1;
        }



    }
}

function init() {
    const board1 = new Board()
    board1.render()


}