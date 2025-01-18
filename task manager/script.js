// Helper function to create a new task element
function createTaskElement(title, description, columnId) {
  const taskElement = document.createElement("div");
  taskElement.classList.add("task");

  // Task content
  taskElement.innerHTML = `
    <h3 contenteditable="false">${title}</h3>
    <p contenteditable="false">${description}</p>
    <div class="task__tags">
      <span class="task__tag task__tag--design">Design</span>
    </div>
    <div class="task__actions">
      <button class="edit-task" onclick="editTask(this)">Edit</button>
      <button class="delete-task" onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  // Add the task to the specified column
  document.getElementById(`${columnId}-tasks`).appendChild(taskElement);
}

// Add a new task to a specific column
function addTask(columnId) {
  const title = prompt("Enter task title:");
  const description = prompt("Enter task description:");

  if (title && description) {
    createTaskElement(title, description, columnId);
  } else {
    alert("Both title and description are required.");
  }
}

// Edit task functionality
function editTask(button) {
  const taskElement = button.closest('.task');
  const title = taskElement.querySelector('h3');
  const description = taskElement.querySelector('p');

  // Toggle editable state for title and description
  const isEditable = title.isContentEditable;

  // If it's already in edit mode, save the changes
  if (isEditable) {
    title.setAttribute("contenteditable", "false");
    description.setAttribute("contenteditable", "false");
    button.textContent = "Edit"; // Change button back to "Edit"
  } else {
    // Enable editing
    title.setAttribute("contenteditable", "true");
    description.setAttribute("contenteditable", "true");
    title.focus();
    button.textContent = "Save"; // Change button to "Save"
  }
}

// Delete task functionality
function deleteTask(button) {
  const taskElement = button.closest('.task');
  taskElement.remove();
}
