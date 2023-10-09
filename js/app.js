// Array to hold all todo element
let toDo = []

// All HTML element needed
const inputValue = document.getElementById("inp-elm")
const inputBtn = document.getElementById("btn-inp")
const liElm = document.getElementById("list-elm")

// Eventlistener for button click
inputBtn.addEventListener('click', () => {
    inputValue.value = inputValue.value.trim()
    if (inputValue.value != ""){
        toDo.push(inputValue.value)
        inputValue.value = ""
        createToDO()
    }
})

let createToDO = () => {
    let toDoItems = ""
    for (let i = 0; i < toDo.length; i++){
        toDoItems += `
                <div class="container-lg form-group items-toDo bg-info">
                    <div class="items">
                        ${toDo[i]}
                    </div>
                    <div class="items">
                        <button class="rm-btn btn btn-primary">Remove</button>
                    </div>
                    <div class="items">
                        <button class="ed-btn btn btn-primary">Edit</button>
                    </div>
                </div>
        `
    }

    liElm.innerHTML = toDoItems

    let rmBtn = document.querySelectorAll('.rm-btn');
    rmBtn.forEach((button, index) => {
        button.addEventListener('click', () => {
            rmToDo(index);
        });
    });

    let edBtn = document.querySelectorAll('.ed-btn');
    edBtn.forEach((button, index) => {
        button.addEventListener('click', () => {
            edToDo(index);
        });
    });
}

// remove function
let rmToDo = (index) => {
    toDo.splice(index, 1);
    createToDO();
}

// Edit function
let edToDo = (index) => {
    let editedText = prompt("What do you want to edit the text to", toDo[index])
    if (editedText !== null){
        toDo[index] = editedText
        createToDO()
    }
}
