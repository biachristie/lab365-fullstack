let toDoList = [];

function addTask() {
    const text = document.getElementById("taskInput").value;
    const isTaskInsideList = searchTaskByText(text);

    if(text !== "") {
        if (!isTaskInsideList) {
            const task = {
                text,
                done: false,
                id: Date.now()
            };
            
            toDoList.push(task);
            printTask(task);
        } else {
            alert("Task already exists. Enter a new task");
        }
    } else {
        alert("Enter a new task");
    }
}

function printTask(task) {
    const list = document.getElementById("list");
    list.innerHTML += `
        <div id="outerDiv ${task.id}">
            <div id="innerDiv">
                <div id="innerDiv-text">
                    <p id="task ${task.id}" class="${task.done}">${task.text}</p>
                </div>
                <div id="innerDiv-button">
                    <button id="doneButton" class="fa-solid fa-check" onclick="markAsDoneTask(${task.id})"></button>
                    <button id="editButton" class="fa-solid fa-pen" onclick="editTask(${task.id}, '${task.text}')"></button>
                    <button id="deleteButton" class="fa-solid fa-trash-can" onclick="deleteTask(${task.id})"></button>
                </div>
            </div>
        </div>
    `
}

function searchTaskByText(text) {
    const toDoItem = toDoList.find(toDoItem => toDoItem.text === text);
    
    if (typeof toDoItem === "undefined") {
        return false;
    } else {
        return true;
    }
}

function editTask(id, text) {
    document.getElementById(`outerDiv ${id}`).innerHTML = `
        <div id="editedTaskDiv">
            <input type="text" placeholder="${text}" id="editedTask">
            <button class="fa-solid fa-floppy-disk" onclick="saveEditedTask(${id})"></button>
        </div>
    `;
}

function saveEditedTask(id) {
    const toDoItem = toDoList.find(toDoItem => toDoItem.id === id);
    const editedTask = document.getElementById("editedTask").value;
    const isTaskInsideList = searchTaskByText(editTask);

    if(editedTask !== "") {
        if (!isTaskInsideList) {
            toDoItem.text = toDoItem.text.replace(toDoItem.text, editedTask)
            printEditedTast(id, toDoItem);
        } else {
            alert("Task already exists. Enter a new task");
        }
    } else {
        printEditedTast(id, toDoItem);
    }
}

function printEditedTast(id, toDoItem) {
    document.getElementById(`outerDiv ${id}`).innerHTML = `
    <div id="innerDiv">
        <div id="innerDiv-text">
            <p id="task ${id}" class="${toDoItem.done}">${toDoItem.text}</p>
        </div>
        <div id="innerDiv-button">
            <button id="doneButton" class="fa-solid fa-check" onclick="markAsDoneTask(${id})"></button>
            <button id="editButton" class="fa-solid fa-pen" onclick="editTask(${id}, '${toDoItem.text}')"></button>
            <button id="deleteButton" class="fa-solid fa-trash-can" onclick="deleteTask(${id})"></button>
        </div>
    </div>
    `;
}

function markAsDoneTask(id) {
    const toDoItem = toDoList.find(toDoItem => toDoItem.id === id);
    toDoItem.done = true;

    document.getElementById(`task ${id}`).className = toDoItem.done;
}

function deleteTask(id) {
    const index = toDoList.findIndex(toDoItem => toDoItem.id === id);
    toDoList.splice(index, 1);
    document.getElementById(`outerDiv ${id}`).remove();
}
