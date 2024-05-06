let myInput = document.querySelector("#my-input");
let addToDoBtn = document.querySelector("#add-to-do-btn");
let toDoListDiv = document.querySelector(".to-do-list");

const getToDo = () => {
    return JSON.parse(localStorage.getItem("Todo"));
};

let arrOfToDoList = getToDo() || [];

const createElements = (text) => {
    let createNewDiv = document.createElement("div");
        let createNewUl = document.createElement("ul");
        let createNewLi = document.createElement("li");
        let createNewDeleteBtn = document.createElement("button");
        
        createNewDiv.classList.add("flex-box", "mt-4");
        createNewLi.classList.add("todo-text");
        createNewDeleteBtn.classList.add("to-do-btn");
        createNewDeleteBtn.innerText = `delete`;
        createNewLi.innerText = text;
        
        toDoListDiv.append(createNewDiv);
        createNewDiv.append(createNewUl);
        createNewUl.append(createNewLi);
        createNewDiv.append(createNewDeleteBtn);
    
        let deleteBtn = toDoListDiv.lastElementChild.children[1];
        deleteBtn.addEventListener("click", () => {
            let parentOfDeleteBtn = deleteBtn.parentElement;
            parentOfDeleteBtn.style.display = `none`;
            localStorage.removeItem("Todo");
            arrOfToDoList = [];
        })
};

const addToDo = (val) => {
    if (myInput.value !== `` && !arrOfToDoList.includes(myInput.value)) {
        arrOfToDoList.push(val.trim());
        arrOfToDoList = [... new Set(arrOfToDoList)];
    
        localStorage.setItem("Todo", JSON.stringify(arrOfToDoList));
        
        myInput.value = ``;

        createElements(val);
    }

    else{
        myInput.value = ``;
    }
};

const showToDo = () => {
    arrOfToDoList.forEach(element => {
        createElements(element)
    });
};

showToDo();

addToDoBtn.addEventListener("click", () => {
    addToDo(myInput.value);
});
console.log(arrOfToDoList);