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