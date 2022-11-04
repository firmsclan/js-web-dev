let tasks = []
const addBtn = document.querySelector('#add')
const clearBtn = document.querySelector('#clear-all')
const input = document.querySelector(`[type=text]`)
//const input = document.querySelector('#input')
const taskBox = document.querySelector('#task-box')  
let index = 1

addBtn.addEventListener("click", ()=>{
    if(input.value){
       const value = input.value
       const li =  document.createElement('li') 
       const checkBtn = document.createElement('button')
       const notSmarSpan = document.createElement('span')
       tasks.push(value)
       console.log(index)
        notSmarSpan.innerHTML = `${index} - ${value} `
        checkBtn.innerHTML = 'x'
       checkBtn.id = 'delete'
       li.append(notSmarSpan)
       li.append(checkBtn)
       taskBox.append(li)
       input.value = ''
       console.log(tasks.length)
        index ++;
    }
})
 
clearBtn.addEventListener("click", () =>{
    taskBox.innerHTML = ''
    tasks = []
    index = 1
})