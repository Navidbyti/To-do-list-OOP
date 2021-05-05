const listOutputDiv = document.querySelector('.list-output');

function TaskCreator(text){
this.text = text;

}

TaskCreator.prototype.drawTask = function(){
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-item');

    const p = document.createElement('p');
    p.textContent = this.text;

    todoDiv.appendChild(p)
    const btnClass = ['trash', 'edit' ,'undone'];
    //btns are trash ,done and edit in the array!
    const btns = [];
    for(i = 0; i < btnClass.length; i++){
        btns[i] = document.createElement('button');
        btns[i].classList.add(btnClass[i]);
        todoDiv.appendChild(btns[i]);
}
listOutputDiv.appendChild(todoDiv);

//Event listeners

btns[0].addEventListener('click' , function(){
    //delete
    listOutputDiv.removeChild(todoDiv);

})

//edit
let isPressed = false;
const editInput = document.createElement('input');
editInput.classList.add('edit-input')
editInput.value = this.text;


editInput.addEventListener('keyup', function(e){
if(e.keyCode === 13){
    p.textContent = editInput.value;
    todoDiv.removeChild(editInput);
    isPressed = false;
}
})

btns[1].addEventListener('click', function(){
    
    
    
    if(!(isPressed)){
    
    todoDiv.appendChild(editInput)
    isPressed = true;
        

    }else if(isPressed){
        p.textContent = editInput.value;
        todoDiv.removeChild(editInput);
        isPressed = false;
    }


})

btns[2].addEventListener('click' , function(){
    //done or not
    btns[2].classList.toggle('done')
    if(btns[2].classList.contains('done')){
        todoDiv.style.backgroundColor = 'green';
    }else{
        todoDiv.style.backgroundColor = '';
    }
})
}



//Main input

const mainInput = document.getElementById('input-text');
const tasks = [];
let i = 0;

mainInput.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
    const value = mainInput.value;
    tasks[i]= new TaskCreator(value);
    tasks[i].drawTask();
    mainInput.value = '';
    i++;
    }
})

let test = new TaskCreator('A test task to do (Try adding a new task or editing this one)')
test.drawTask();
