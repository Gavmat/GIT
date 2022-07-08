


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



