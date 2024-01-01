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
// document.addEventListener("DOMContentLoaded", function () {
//     const animatedImage = document.querySelector(".animated-image");
  
//     // Animate the image to slide in from the left after a delay
//     setTimeout(() => {
//       animatedImage.style.left = "0";
//     }, 500);
//   });