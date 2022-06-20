


document.getElementById("create_field_btn").addEventListener('click', () => {

    let colns = document.getElementById('colns').value;
    let raws = document.getElementById('raws').value;
    let size = document.getElementById('size').value;


    let game_field = document.getElementById('game');

    for (let i = 0; i < Number(colns); i++) {
        let colon = document.createElement('div')
        colon.className = 'colons'

        for (let i = 0; i < Number(raws); i++) {
            pixel = document.createElement('div')
            pixel.style.width = size + "px"
            pixel.style.height = size + "px"
            pixel.style.border = "0.5px solid black"
            pixel.addEventListener('click', (e) => {
                e.target.classList.toggle('red')
            })

            colon.appendChild(pixel)
        }

        game_field.appendChild(colon)
    }
    document.getElementById("clear_btn").addEventListener("click", () => {
        location.reload();
    });
})




// let NUM_COLS = +prompt('введите количество колонок?', 3);
// let NUM_ROWS = +prompt('введите количество строк?', 3);





// let grid = document.getElementById('container');


// for (let i = 0; i < NUM_ROWS; i++) {
//     let row = createRow();
//     for (let k = 0; k < NUM_COLS; k++) {
//         createElement(row);
//     };
// };

// function createRow() {
//     let grid = document.getElementById('grid');
//     let row = document.createElement('div');
//     // row.className = "row";
//     grid.appendChild(row);
//     return row;
// }

// function createElement(grid) {
//     let elem = document.createElement('div');
//     elem.className = "elem";
//     grid.appendChild(elem);
// }



