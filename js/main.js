
//------------------Model---------------------------
let Model = {
    c:null,
    init: function (controller){
        this.c = controller;
        
    },
    setState: function (s){
        // update the state variables
        this.onSetState();
    },
    onSetState: function (){
        this.c.updateView();
    }
}

//-------------------View--------------------------

let View = {
    m:null,
    init: function (model){
        this.m = model;
    },
    render: function (){
        let mainDiv = document.getElementById('mainDiv')
        let board = document.createElement('div');
        board.setAttribute('class', 'row mx-5 justify-content-center');
        mainDiv.appendChild(board);

        for (let i = 0; i < 9; i++) {
            let tile = document.createElement('div');
            tile.setAttribute('class', 'col-4 p-5 border square');
            board.appendChild(tile);

        }

        // update the HTML
    },
    getState: function (){
        var c = this.m.counter;
        return c;
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
        // event listeners
        //this.v.increment_btn.addEventListener('click', this.incrementState.bind(this));
    },
    updateView: function (){
        this.v.render();
    }
    
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

        // 4
        this.v.init(this.m);

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

    console.log(App);

}

// Board is represented by these arrays
// 0 is empty, X is 1, O is -1.

// let row1 = [0, 0, 0]
// let row2 = [0, 0, 0]
// let row3 = [0, 0, 0]

// function winConditions() {
//     let win1 = row1[0] + row1[1] + row1[2]
//     let win2 = row2[0] + row2[1] + row2[2]
//     let win3 = row3[0] + row3[1] + row3[2]
//     let win4 = row1[0] + row2[0] + row3[0]
//     let win5 = row1[1] + row2[1] + row3[1]
//     let win6 = row1[2] + row2[2] + row3[2]
//     let win7 = row1[0] + row2[1] + row3[2]
//     let win8 = row1[2] + row2[1] + row3[0]

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