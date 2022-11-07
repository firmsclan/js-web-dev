tasks = []
const addButton = document.querySelector('#add')
const deleteAllButton = document.querySelector('#clear-all')
const taskInput = document.querySelector('#input')
const ul = document.querySelector('#task-box')

addButton.addEventListener("click", ()=>{
    if(taskInput.value){
        //create li
        //append li to ul
        //put input value into li
        const span = document.createElement('span')
        let deleteButton = document.createElement('button')
        let li =  document.createElement('li')
        li.setAttribute("id", taskInput.value)
        console.log(li)
        span.innerHTML = taskInput.value
        tasks.push(taskInput.value)
        li.append(span)
        li.append(deleteButton)
        ul.append(li)
        deleteButton.innerHTML = 'x'
        taskInput.value = ''
    }
})

const deleteButton = document.querySelector(taskInput.value)

button.addEventListener('click', () =>{
    if(button){
        console.log(button)
    }
}) 
deleteAllButton.addEventListener('click', () =>{
    ul.innerHTML = ''
    tasks = []
    taskInput.focus()
})