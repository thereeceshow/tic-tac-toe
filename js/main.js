// Board is represented by these arrays
// 0 is empty, X is 1, O is -1.

let array1 = [1, 0, 0]
let array2 = [0, 1, 0]
let array3 = [0, 0, 1]

function winConditions() {
    let win1 = array1[0] + array1[1] + array1[2]
    let win2 = array2[0] + array2[1] + array2[2]
    let win3 = array3[0] + array3[1] + array3[2]
    let win4 = array1[0] + array2[0] + array3[0]
    let win5 = array1[1] + array2[1] + array3[1]
    let win6 = array1[2] + array2[2] + array3[2]
    let win7 = array1[0] + array2[1] + array3[2]
    let win8 = array1[2] + array2[1] + array3[0]

    switch (3) {
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

    switch (-3) {
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