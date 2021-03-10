
//------------------Model---------------------------
let Model = {
    c:null,
    init: function (controller){
        this.c = controller;
        
    },
    board: [0,0,0,0,0,0,0,0,0],
    setState: function (s){
        // update the state variables
        this.onSetState();
    },
    onSetState: function (){
        this.c.updateView();
    },
}

//-------------------View--------------------------

let View = {
    m:null,
    c:null,
    //clickBtn:null,
    init: function (model, controller){
        this.m = model;
        this.c = controller;
        //this.clickBtn
    },
    render: function (){
        let mainDiv = document.getElementById('mainDiv')
        let board = document.createElement('div');
        board.setAttribute('class', 'row mx-5 justify-content-center');
        mainDiv.appendChild(board);
        console.log(board);
        console.log(this);

        for (let i = 0; i < 9; i++) {
            let tile = document.createElement('div');
            tile.setAttribute('class', 'col-4 p-5 border square');
            tile.setAttribute('id', i);
            console.log(this);
            tile.addEventListener('click', this.c.tester); // <---- access local members in an object you need to use 'this'
            board.appendChild(tile);
        }
    },
    getState: function (){
        var c = this.m.counter;
        //return c;
    }
}


//-----------------Controller------------------------
let Controller = {
    v:null,
    m:null,
    init: function (view, model){
        // setup click handlers
        this.v = view;
        this.m = model;
        //this.v.clickBtn.addEventListener('click', this.clickTile.bind(this));
        // event listeners
        //this.v.increment_btn.addEventListener('click', this.incrementState.bind(this));
    },
    updateView: function (){
        this.v.render();
    },
    tester: function () {
        console.log(this.id);
        this.classList.add('bg-danger')
    },
    
}

//--------------------------App--------------------------

let App =  {
    // 2 - sets up the mvc objects and initializes them
    m:Object.create(Model),

    v:Object.create(View),

    c:Object.create(Controller),

    init: function (){
        // 3
        this.m.init(this.c);
        console.log(this)
        
        // 4
        this.v.init(this.m, this.c);
        
        // 5
        this.c.init(this.v, this.m);
    },

    eof:function (){
        // clean up, exit
    }
}

//-------------------------INIT----------------------------

function init (){
    // instantiate and init the Model, View, and Controller

    // 1 - page loads, run init on the app
    App.init();
    App.v.render();

    console.log(App);

}

// Board is represented by these arrays
// 0 is empty, X is 1, O is -1.

let row1 = [0, 0, 0]
let row2 = [0, 0, 0]
let row3 = [0, 0, 0]

// function winConditions() {

//     let win1 = this.boardArray[0] + this.boardArray[1] + this.boardArray[2]
//     let win2 = this.boardArray[3] + this.boardArray[4] + this.boardArray[5]
//     let win3 = this.boardArray[6] + this.boardArray[7] + this.boardArray[8]
//     let win4 = this.boardArray[1] + this.boardArray[4] + this.boardArray[7]
//     let win5 = this.boardArray[2] + this.boardArray[5] + this.boardArray[8]
//     let win6 = this.boardArray[3] + this.boardArray[6] + this.boardArray[9]
//     let win7 = this.boardArray[1] + this.boardArray[5] + this.boardArray[9]
//     let win8 = this.boardArray[7] + this.boardArray[5] + this.boardArray[3]

//     function xOrO {
//         switch (X) {
//             case win1:
//                 console.log('1')
//                 break;
//             case win2:
//                 console.log('2')
//                 break;
//             case win3:
//                 console.log('3')
//                 break;
//             case win4:
//                 console.log('4')
//                 break;
//             case win5:
//                 console.log('5')
//                 break;
//             case win6:
//                 console.log('6')
//                 break;
//             case win7:
//                 console.log('7')
//                 break;
//             case win8:
//                 console.log('8')
//                 break;
//             default:
//                 console.log("Other Player's Turn")  // `Now its ${otherPlayer}'s turn.`
//         }
//     }
//     // if X turn
//     xOrO(3);
//     // if O turn
//     xOrO(-3);
// }
