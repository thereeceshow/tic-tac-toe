class Board {
    constructor() { // Model
        this.boardArray = []
        this.tileClick = this.tileClick.bind(this);
        this.turnCount = 0
    }
    render() {
        let mainDiv = document.getElementById('mainDiv')
        let board = document.createElement('div');
        board.setAttribute('class', 'row mx-5 justify-content-center');
        mainDiv.appendChild(board);
        console.log(board);
        console.log(this);

        for (let i = 0; i < 9; i++) {
            const tileObject = new Tile(i);
            let tileHtml = document.createElement('div');
            tileHtml.setAttribute('class', 'col-4 p-5 border square text-center');
            tileHtml.setAttribute('id', i);
            tileHtml.addEventListener('click', e=> this.tileClick(i)); // <---- access local members in an object you need to use 'this'
            board.appendChild(tileHtml);
            tileObject.html = tileHtml
            this.boardArray.push(tileObject)
        }
    }
    tileClick (index) {
        //console.log(index);
        this.turnCount++
        this.boardArray[index].redTile(this.turnCount);


    }
}

class Tile {
    constructor(id) { // Model
        this.html = ''
        this.displayState = ''
        this.id = id
    }
    render() {
        // display blank, X, or O
    }
    redTile (turnCount) {
        console.log(this.id);
        console.log(turnCount)
        if (turnCount % 2 === 0) {
            this.html.classList.add('bg-success')
            this.html.innerHTML = '<i class="fab fa-sith fa-3x"></i>';
        } else {
            this.html.classList.add('bg-danger')
            this.html.innerHTML = '<i class="fab fa-rebel fa-3x"></i>';
        }
        


    }
}

function init() {
    const board1 = new Board()
    board1.render()
    console.log(board1);
    

}