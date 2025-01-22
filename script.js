document.addEventListener('DOMContentLoaded', () => {
    // Get the necessary elements
    const addButton = document.getElementById('add-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Add event listener to the Add button
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = ''; // Clear input field after adding
        }
    });

    // Function to add a task to the list
    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create delete button for the task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            li.remove(); // Delete task when the delete button is clicked
        });

        // Append the delete button to the task list item
        li.appendChild(deleteBtn);

        // Toggle task completion on click
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Append task to the task list
        taskList.appendChild(li);
    }
});

