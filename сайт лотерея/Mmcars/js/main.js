// document.getElementById('blablabla').style.display = 'none';

// function blablabla() {
//     document.getElementById('blablabla').style.display = 'block';
// }

let numCount = document.getElementById('num_count');
let plusBtn = document.getElementById('button_plus');
let minusBtn = document.getElementById('button_minus');

let qty = parseInt(numCount.value);
qty = 1;

plusBtn.onclick = function () {
    qty += 1;
    numCount.value = qty;
};

minusBtn.onclick = function () {
    if (qty > 0) {
        qty -= 1;
        numCount.value = qty;
    }
};


// plusBtn.onclick = function () {
//     let qty = parseInt(numCount.value);
//     qty = qty + 1;
//     numCount.value = qty;
// }
// minusBtn.onclick = function () {
//     let qty = parseInt(numCount.value);



//     qty = qty - 1;


//     numCount.value = qty;
// }