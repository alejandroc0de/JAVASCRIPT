let task = "";



function getTask(){
    task = document.getElementById("taskInput");
    console.log(task.value)
    addToList(task.value)

}



function addToList(task){
    let template = document.getElementById("plantillaTasks")
    let clone = template.content.cloneNode(true)
    clone.querySelector(".taskText").textContent = task
    let selectedPriority = document.getElementById("priorityL").value
    clone.querySelector(".taskPriority").textContent = selectedPriority
    document.querySelector(".displayTasks").append(clone)

}