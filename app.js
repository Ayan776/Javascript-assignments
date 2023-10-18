document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const deleteAllButton = document.getElementById("deleteAll");

    // Add a task
    function addTask(taskText) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";

        listItem.querySelector(".delete").addEventListener("click", function() {
            taskList.removeChild(listItem);
        });

        listItem.querySelector(".edit").addEventListener("click", function() {
            const newText = prompt("Edit task:", taskText);
            if (newText !== null && newText.trim() !== "") {
                taskText = newText.trim();
                listItem.querySelector("span").textContent = taskText;
            }
        });

        listItem.addEventListener("click", function() {
            listItem.classList.toggle("completed");
        });
    }

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
        }
    });

    taskInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });

    deleteAllButton.addEventListener("click", function() {
        const listItems = taskList.querySelectorAll("li");
        listItems.forEach(item => taskList.removeChild(item));
    });
});
