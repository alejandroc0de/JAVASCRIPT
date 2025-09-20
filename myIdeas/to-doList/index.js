window.onload = loadTasks;


function getTask(){
    task = document.getElementById("taskInput");
    if(task.value == ""){
        window.alert("Enter a task name")
        return
    }
    addToList(task.value)
}

function addToList(task){
    let template = document.getElementById("plantillaTasks")
    let clone = template.content.cloneNode(true)

    clone.querySelector(".taskText").textContent = task
    let selectedPriority = document.getElementById("priorityL").value
    clone.querySelector(".taskPriority").textContent = selectedPriority

    let statusSelected = clone.querySelector(".selectStatus")

    tarjeta = clone.querySelector(".displayTask")
    tarjeta.classList.add(selectedPriority)
    document.querySelector(".displayTasks").append(clone)

    let taskId = "task-"+Date.now()
    tarjeta.setAttribute("id",taskId)

    let taskInput = document.getElementById("taskInput")
    taskInput.value = "" 


    taskInput.placeholder ="Enter a Task"
    saveTask(task,selectedPriority)


    statusSelected.addEventListener("change", (event) => {
        let card = document.getElementById(taskId)
        if(statusSelected.value == "Completed"){
            card.remove()
        }
    })
}

function saveTask(task,priority){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({text: task, priority: priority, status: "Not Started"});
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
    let tasks = JSON.parse(localStorage.getItem("tasks")) ||  [];

        tasks.forEach(element => {
        let template = document.getElementById("plantillaTasks")
        let clone = template.content.cloneNode(true)

        clone.querySelector(".taskText").textContent = element.text
        clone.querySelector(".taskPriority").textContent = element.priority

        let statusSelected = clone.querySelector(".selectStatus")
        statusSelected.value = element.status;

        tarjeta = clone.querySelector(".displayTask")
        tarjeta.classList.add(element.priority)
        document.querySelector(".displayTasks").append(clone)

        let taskId = "task-"+Date.now()
        tarjeta.setAttribute("id",taskId)

        let taskInput = document.getElementById("taskInput")
        taskInput.value = "" 


        statusSelected.addEventListener("change", (event) => {
            let card = document.getElementById(taskId)
            if(statusSelected.value == "Completed"){
                card.remove()
            }
        });
        
    });
}