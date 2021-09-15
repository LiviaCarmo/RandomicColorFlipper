
var H = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
var C = document.querySelector('.c')

function randomColor(){
    return Math.floor(Math.random() * H.length)
}

function changeColor(){
    var color = '#'
    for(var i=0; i<6; i++){
        color += H[randomColor()]
    }
    C.textContent = color;
    document.body.style.backgroundColor = color;
}
