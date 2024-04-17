function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var task = taskInput.value;

    if (task.trim() !== "") {
        var li = document.createElement("li");
        li.className = "task";
        li.appendChild(document.createTextNode(task));
        li.onclick = function() {
            this.classList.toggle("completed");
        };

        var deleteBtn = document.createElement("span");
        deleteBtn.className = "delete-btn";
        deleteBtn.appendChild(document.createTextNode("\u00D7"));
        deleteBtn.onclick = function() {
            this.parentElement.remove();
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
