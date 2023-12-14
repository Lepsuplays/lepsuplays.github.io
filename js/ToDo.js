document.getElementById("ToDoItems").onclick = function(event) {
    setVisibility('removeCheck', 'block')

    document.getElementById("deletableItem").innerText = event.target.innerText;

    document.getElementById("allowDeletion").onclick = function() {
        var removableElement = event.target
        removableElement.remove();
        setVisibility('removeCheck', 'none')
        saveToDoList()
    }
}

function addNewItemToDo() {
    var data = document.getElementById("AddItemToToDo").value;
    var target = document.getElementById("ToDoItems")

    var NewElement = document.createElement("li")
    NewElement.className = "ToDoItem";
    NewElement.innerText = data;

    document.getElementById("ToDoItems").insertBefore(NewElement, target.children[0])
    // Reset the input field to empty string
    document.getElementById("AddItemToToDo").value = "";
}

function saveToDoList() {
    var numberOfItems = document.getElementById("ToDoItems").getElementsByClassName("ToDoItem").length;
    var counter = 0;

    var data = [];
    while (counter <numberOfItems) {
        data.push(document.getElementById("ToDoItems").children[counter].innerText);
        counter = counter + 1
    }
    
    localStorage.setItem("ToDoList", JSON.stringify(data))
};

function recoverToDoData() {
    var data = localStorage.getItem("ToDoList");
    var data = JSON.parse(data)
    var counter = 0;


    var numberOfItems = data.length
    while (counter < numberOfItems) {
        var NewElement = document.createElement("li");
        NewElement.className = "ToDoItem";
        NewElement.innerText = data[counter];
        document.getElementById("ToDoItems").appendChild(NewElement);
        counter = counter + 1;
    }
};