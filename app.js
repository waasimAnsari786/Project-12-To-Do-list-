let myInput = document.querySelector("#my-input");
let addToDoBtn = document.querySelector("#add-to-do-btn");
let toDoListDiv = document.querySelector(".to-do-list");

const addToDo = () => {
    let createNewDiv = document.createElement("div");
    let createNewUl = document.createElement("ul");
    let createNewLi = document.createElement("li");
    let createNewDeleteBtn = document.createElement("button");
    
    createNewDiv.classList.add("flex-box", "mt-4");
    createNewLi.classList.add("todo-text");
    createNewDeleteBtn.classList.add("to-do-btn");
    createNewDeleteBtn.innerText = `delete`;
    createNewLi.innerText = myInput.value;

    toDoListDiv.append(createNewDiv);
    createNewDiv.append(createNewUl);
    createNewUl.append(createNewLi);
    createNewDiv.append(createNewDeleteBtn);
    
    localStorage.setItem("Todo", JSON.stringify(createNewLi.innerText));
    myInput.value = ``;
};

addToDoBtn.addEventListener("click", () => {
    addToDo();
    let deleteBtn = toDoListDiv.lastElementChild.children[1];
    deleteBtn.addEventListener("click" , () => {
        let parentOfDeleteBtn = deleteBtn.parentElement;
        parentOfDeleteBtn.style.display = `none`;
        localStorage.removeItem("Todo");
    })
});