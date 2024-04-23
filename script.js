document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const taskListContainer = document.getElementById("taskListContainer");
    const logoutBtn = document.getElementById("logoutBtn");
    let userType = ""; // Variable to store the logged-in user type

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        userType = document.getElementById("userType").value;

        if (userType === "teacher" && username === "Lærari" && password === "1234") {
            loginForm.reset();
            loginForm.style.display = "none";
            taskListContainer.style.display = "block";
            enableTaskAdding(); // Enable task adding only for teachers
            enableTaskDeleting();
        } else if (userType === "student" && username === "Næmingur" && password === "1234") {
            loginForm.reset();
            loginForm.style.display = "none";
            taskListContainer.style.display = "block";
            disableTaskAdding(); // Disable task adding for students
            disableTaskDeleting(); // Disable task deleting for students
        } else {
            alert("Invalid username, password, or user type.");
        }
    });

    logoutBtn.addEventListener("click", function(event) {
        event.preventDefault();
        taskListContainer.style.display = "none";
        loginForm.style.display = "block";
        disableTaskAdding(); // Always disable task adding when logging out
        disableTaskDeleting(); // Always disable task deleting when logging out
    });

    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const addTaskBtn = document.getElementById("addTaskBtn");

    function enableTaskAdding() {
        taskForm.addEventListener("submit", function(event) {
            event.preventDefault();
            addTask();
        });
        addTaskBtn.addEventListener("click", function(event) {
            event.preventDefault();
            addTask();
        });
        addTaskBtn.disabled = false; // Enable the button
        taskInput.disabled = false; // Enable input field for teachers
    }

    function enableTaskDeleting() {
        taskList.addEventListener("click", function(event) {
            if (event.target.classList.contains("delete-btn")) {
                event.target.parentElement.remove();
            }
        });
    }

    function disableTaskAdding() {
        taskForm.removeEventListener("submit", addTask);
        addTaskBtn.removeEventListener("click", addTask);
        addTaskBtn.disabled = true; // Disable the button
        taskInput.disabled = true; // Disable input field for students
    }

    function disableTaskDeleting() {
        taskList.removeEventListener("click", function(event) {
            if (event.target.classList.contains("delete-btn")) {
                event.target.parentElement.remove();
            }
        });
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.className = "task";
            li.textContent = taskText;

            const deleteBtn = document.createElement("span");
            deleteBtn.className = "delete-btn";
            deleteBtn.textContent = "❌";

            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            taskInput.value = "";
        }
    }
});
