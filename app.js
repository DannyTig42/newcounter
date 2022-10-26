let heading = document.querySelector('h1');
let inc = document.querySelector('.inc')
let res = document.querySelector('.res')
let dec = document.querySelector('.dec')

function DECREASE (){
    let body = document.body
    body.style.backgroundColor = 'yellow'
    heading.innerText--
    
}

inc.addEventListener('click',DECREASE)

function REST (){
    let body = document.body
    heading.innerText = 0
    body.style.backgroundColor = 'red'
}

res.addEventListener('click',REST)

function INCREASE (){
    let body = document.body
    heading.innerText++
    body.style.backgroundColor = 'green'
}

dec.addEventListener('click',INCREASE)