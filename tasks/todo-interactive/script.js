
// Select all the list items
const tasks = document.querySelectorAll("#todo-list li");

// Add a click event to each task
tasks.forEach(function(task) {

    task.addEventListener("click", function() {

        // Toggle the completed class
        task.classList.toggle("completed");

    });

});
