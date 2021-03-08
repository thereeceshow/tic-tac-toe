// Board is represented by these arrays
// 0 is empty, X is 1, O is -1.

let row1 = [0, 0, 0]
let row2 = [0, 0, 0]
let row3 = [0, 0, 0]

function winConditions() {
    let win1 = row1[0] + row1[1] + row1[2]
    let win2 = row2[0] + row2[1] + row2[2]
    let win3 = row3[0] + row3[1] + row3[2]
    let win4 = row1[0] + row2[0] + row3[0]
    let win5 = row1[1] + row2[1] + row3[1]
    let win6 = row1[2] + row2[2] + row3[2]
    let win7 = row1[0] + row2[1] + row3[2]
    let win8 = row1[2] + row2[1] + row3[0]

    function xOrO {
        switch (X) {
            case win1:
                console.log('1')
                break;
            case win2:
                console.log('2')
                break;
            case win3:
                console.log('3')
                break;
            case win4:
                console.log('4')
                break;
            case win5:
                console.log('5')
                break;
            case win6:
                console.log('6')
                break;
            case win7:
                console.log('7')
                break;
            case win8:
                console.log('8')
                break;
            default:
                console.log("Other Player's Turn")
        }
    }
    
    xOrO(3);
    xOrO(-3);
}