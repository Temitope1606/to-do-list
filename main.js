// const tasksContainer = $("#tasks-container")
const tasksContainer = document.getElementById("tasks-container");
const addTaskButton = document.getElementById("add");
const inputBox = document.getElementById("task");
const completedTasksContainer = document.getElementById("completed-tasks-container");


addTaskButton.addEventListener("click", () => {
  if (inputBox.value.trim() === "") {
    // trim() removes whitespaces
    alert("A task must be inputted first!!");
  } else {
    // const checkTask = document.createElement("div")
    const newTask = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    // Creating a span element so that the checkbox and text can be on the same line
    const taskContent = document.createElement("span");
    taskContent.textContent = inputBox.value;

    // An icon for deleting tasks
    const deleteTask = document.createElement("i");
    deleteTask.className = "fas fa-trash";

    // For counting the completed tasks
    let completedTasks = 0;

    // Styling each task (checkbox and text)
    newTask.style.width = "65vw";
    newTask.style.border = "2px solid green";
    newTask.style.listStyleType = "none";
    newTask.style.padding = "8px";
    newTask.style.margin = "8px";
    newTask.style.backgroundColor = "beige";
    newTask.style.justifyContent = "space-between";
    newTask.style.display = "flex";
    newTask.style.fontSize = "1.2em";

    // Styling the task texts
    taskContent.style.textAlign = "center";
    taskContent.style.paddingLeft = "12px";

    // Styling the delete icon
    deleteTask.style.color = "red";
    deleteTask.style.cursor = "pointer";

    newTask.append(checkBox);
    newTask.append(taskContent);
    newTask.append(deleteTask);

    tasksContainer.append(newTask);

    // Clears the input box
    inputBox.value = "";

    // If the checkbox is clicked
    checkBox.addEventListener("change", () => {
      if (checkBox.checked) {
        taskContent.style.textDecoration = "line-through";

        completedTasks++;
        console.log("Completed Tasks: ", completedTasks);

        // To display the completed tasks
        const completed = document.getElementById("completed");
        completed.textContent = "Completed Tasks";
        completedTasksContainer.append(newTask);
      } else {
        taskContent.style.textDecoration = "none";
      }
    });

    // If the delete icon is clicked
    deleteTask.addEventListener("click", () => {
      newTask.remove(); // to remove that particular task
    });
  }
});
