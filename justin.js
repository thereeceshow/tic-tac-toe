// create my objects, functions, and global vars
var Model = {
    c:null,
    counter:null,
    clicks:[],
    init: function (controller){
        this.c = controller;
        this.counter = 0;
    },
    setState: function (s){
        // update the state variables
        this.counter = s;
        console.log(this.counter);
        this.clicks.push(s);
        this.onSetState();
    },
    onSetState: function (){
        this.c.updateView();
    }
}

// View class
var View = {
    m:null,
    init:function (model){
        this.m = model;
    },
    render:function (){
        // update the HTML
    },
    getState: function (){
        var c = this.m.counter;
        return c;
    }
}

c

var App =  {
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

function init (){
    // instantiate and init the Model, View, and Controller

    // 1 - page loads, run init on the app
    App.init();

    console.log(App);

}