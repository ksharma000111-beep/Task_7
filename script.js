const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

const errorMessage = document.getElementById("errorMessage");

const totalTasks = document.getElementById("totalTasks");

const completedTasks = document.getElementById("completedTasks");

const emptyMessage = document.getElementById("emptyMessage");




function addTask() {

    let taskText = taskInput.value.trim();



    if (taskText === "") {

        errorMessage.innerText = "Please enter a task!";

        return;

    }

    errorMessage.innerText = "";



    const li = document.createElement("li");

    li.classList.add("task");



    const span = document.createElement("span");

    span.innerText = taskText;



    span.addEventListener("click", function () {

        li.classList.toggle("completed");

        updateCounter();

    });



    const deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";

    deleteBtn.classList.add("delete-btn");



    deleteBtn.addEventListener("click", function () {

        li.remove();

        updateCounter();

    });



    li.appendChild(span);

    li.appendChild(deleteBtn);

    taskList.appendChild(li);



    taskInput.value = "";



    updateCounter();

}




function updateCounter() {

    const tasks = document.querySelectorAll(".task");

    const completed = document.querySelectorAll(".task.completed");

    totalTasks.innerText = tasks.length;

    completedTasks.innerText = completed.length;



    if (tasks.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";

    }

}




addBtn.addEventListener("click", addTask);



taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        addTask();

    }

});