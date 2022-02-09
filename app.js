const btn = document.querySelector('#v2')


btn.onclick = function () {
    console.log("You clicked me!")
    console.log("I hope it worked!!")
}


function scream(){
    console.log("AAAAAAHHHHH")
    console.log("STOP TOUCHING ME!!")
}


btn.onmouseenter = scream;


document.querySelector('h1').onclick = ()=> {

 alert('you clicked the h1!')
}

const btn3 = document.querySelector('#v3')
btn3.addEventListener('click', function () {
alert("CLICKED!");
})

function twist(){
    console.log('Twist!')
}

function shout () {
    console.log('Shout!')
}

const tasButton = document.querySelector('#tas')
// tasButton.onlick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)

