// script.js

function addTask() {
    
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
       
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(taskText));

        var taskList = document.getElementById("taskList");
        taskList.appendChild(li);

        taskInput.value = "";
    }
}
