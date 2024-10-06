// Add a new task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskInput.value}
        <div>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    taskList.appendChild(li);
    taskInput.value = ""; // Clear the input field
}

// Mark a task as completed
function completeTask(button) {
    const li = button.parentElement.parentElement;
    li.classList.toggle('completed');
}

// Delete a task from the list
function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}
