let form = document.getElementById('form')
let todo = document.getElementById('todo')
let inputEl = document.getElementById('input-el')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const todoValue = inputEl.value
    if(todoValue){
        const list = document.createElement('li')
        list.innerText = todoValue
        todo.appendChild(list)


        list.addEventListener('click', ()=>{
            list.classList.toggle('completed')
        })

        list.addEventListener('dblclick', (e)=>{
            list.remove()
        })
    }

    

    inputEl.value = ``
})