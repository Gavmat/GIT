const area = document.getElementById('area');

let move = 0;
let result = '';



area.addEventListener("click", function (e) {
    if (e.target.className = 'box') {
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
        move++;
        check();
    }
})

const check = () => {
    const boxes = document.getElementsByClassName('box');
    let arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (i = 0; i < arr.length; i++) {
        if (
            boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X'
        ) {
            alert('Победили крестики');
            result = 'крестики';
            prepareResult(result);
        } else if (
            boxes[arr[i][0]].innerHTML == '0'
            && boxes[arr[i][1]].innerHTML == '0'
            && boxes[arr[i][2]].innerHTML == '0'
        ) {
            alert('Победили нолики');
            prepareResult(result);
        }
    }

}

const prepareResult = winner => {
    console.log(winner);
}




// function start(area) {
//     let i = 0;
//     for (let box of area) {
//         box.addEventListener('click', function () {
//             if (i % 2 == 0) {
//                 this.textContent = 'X';
//             }
//             else {
//                 this.textContent = 'O';
//             }

//             i++;
//             console.log(i);
//         });
//     }
// }








