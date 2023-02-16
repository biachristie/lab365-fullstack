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
        }
    } else {
        alert("Task already exists. Enter a new task");
    }
}

function printTask(task) {
    const list = document.getElementById("list");
    list.innerHTML += `
        <div id="outerDiv ${task.id}">
            <div id="innerDiv ${task.id}">
                <p id="task ${task.id}">${task.text}</p>
            </div>
            <button onclick="editTask(${task.id}, '${task.text}')">Edit</button>
            <button onclick="markAsDoneTask(${task.id})">Done</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
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
        <input type="text" placeholder="${text}" id="editedTask">
        <button onclick="saveEditedTask(${id})">Save</button>
    `;
}

function saveEditedTask(id) {
    const toDoItem = toDoList.find(toDoItem => toDoItem.id === id);
    const editedTask = document.getElementById("editedTask").value;
    
    toDoItem.text = toDoItem.text.replace(toDoItem.text, editedTask)
    printEditedTast(id, toDoItem);

}

function printEditedTast(id, toDoItem) {
    document.getElementById(`outerDiv ${id}`).innerHTML = `
            <div id="innerDiv ${id}">
                <p id="task ${id}">${toDoItem.text}</p>
            </div>
            <button onclick="editTask(${id})">Edit</button>
            <button onclick="markAsDoneTask(${id})">Done</button>
            <button onclick="deleteTask(${id})">Delete</button>
    `;
}

function markAsDoneTask(id) {
    const toDoItem = toDoList.find(toDoItem => toDoItem.id === id);
    toDoItem.done = true;
}

function deleteTask(id) {
    const index = toDoList.findIndex(toDoItem => toDoItem.id === id);
    toDoList.splice(index, 1);
    document.getElementById(id).remove();
}
