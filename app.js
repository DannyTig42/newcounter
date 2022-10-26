let heading = document.querySelector('h1');
let inc = document.querySelector('.inc')
let res = document.querySelector('.res')
let dec = document.querySelector('.dec')

function DECREASE (){
    heading.innerText--
}

inc.addEventListener('click',DECREASE)

function REST (){
    heading.innerText = 0
}

res.addEventListener('click',REST)

function INCREASE (){
    heading.innerText++
}

dec.addEventListener('click',INCREASE)