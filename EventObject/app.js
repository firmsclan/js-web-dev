document.querySelector('button').addEventListener('click', function (evt){
    alert(evt)
})

const input = document.querySelector('input');

 input.addEventListener('keydown', function (e){
     console.log(e.key)
 })

 input.addEventListener('keyup', function (){
     console.log('KEYUP')
 })


 