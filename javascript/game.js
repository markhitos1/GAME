
const contenedorGame = document.getElementById('game')
const jugador = document.querySelector('.jugador')

let x = 0;
let y = 0;






window.addEventListener('keydown',(e)=>{
    console.log(e.code);
    
    if(e.code == 'ArrowRight' && x <= 25){
        jugador.style.left = `${x++}rem`
    }
    if(e.code == 'ArrowLeft' && x > 0){
        jugador.style.left = `${x--}rem`
    }
    if(e.code == 'ArrowUp' && y > 0){
        jugador.style.top = `${y--}rem`
    }
    if(e.code == 'ArrowDown' && y < 32){
        jugador.style.top = `${y++}rem`
    }

    console.log(x,y);
    
   
   
})



