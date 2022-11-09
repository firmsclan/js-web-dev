tasks = []
const addButton = document.querySelector('#add')
const deleteAllButton = document.querySelector('#clear-all')
const taskInput = document.querySelector('#input')
const ul = document.querySelector('#task-box')


const liToDelete = document.addEventListener("click", e =>{
   if(e.target.classList.contains('btn-delete')){
    const delLi = e.target.parentNode.firstChild.innerHTML
    const filterTasks = tasks.filter(item =>{
        console.log(item.children[0])

       return item.firstChild.innerHTML !== delLi
    })
    //tasks = []
    tasks = filterTasks
    appendUl()
   }
})
addButton.addEventListener("click", ()=>{
    if(taskInput.value){
        //create li
        //append li to ul
        //put input value into li
        const span = document.createElement('span')
        let deleteButton = document.createElement('button')
        let li =  document.createElement('li')
        deleteButton.classList.add('btn-delete')
        li.classList.add('li-delete')
        deleteButton
        span.innerHTML = taskInput.value
        li.append(span)
        li.append(deleteButton)
        tasks.push(li)
        appendUl()
        deleteButton.innerHTML = 'x'
        taskInput.value = ''
    }
})


deleteAllButton.addEventListener('click', () =>{
    ul.innerHTML = ''
    tasks = []
    taskInput.focus()
})

const appendUl  = () =>{
    ul.innerHTML=''
    
       tasks && tasks.forEach((element) => ul.append(element))
        
  }
