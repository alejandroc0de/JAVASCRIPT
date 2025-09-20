window.onload = loadTasks;
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

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

    let dateChoosen = document.getElementById("dueDate");
    const daysLeft = getDaysLeft(dateChoosen.value)
    console.log(daysLeft)
    clone.querySelector(".dueIn").textContent = `${daysLeft} Days`

    tarjeta = clone.querySelector(".displayTask")
    tarjeta.classList.add(selectedPriority)
    document.querySelector(".displayTasks").append(clone)

    let taskId = "task-"+Date.now()
    tarjeta.setAttribute("id",taskId)
    console.log(taskId)


    let taskInput = document.getElementById("taskInput")
    taskInput.value = "" 


    taskInput.placeholder ="Enter a Task"
    saveTask(task,selectedPriority,daysLeft,taskId)


    statusSelected.addEventListener("change", (event) => {
        let card = document.getElementById(taskId)
        if(statusSelected.value == "Completed"){
            card.remove()
            tasks = tasks.filter(task => task.id!== taskId)
            localStorage.setItem("tasks",JSON.stringify(tasks))
        }
    })
}

function getDaysLeft(dateChoosen){

    let dateNow = new Date()
    day = dateNow.getDate()
    month = dateNow.getMonth()
    year = dateNow.getFullYear()

    const dateDue = new Date()
    dateChoosen = dateChoosen.split("-")
    console.log(dateChoosen)
    dateDue.setDate(dateChoosen[2])
    dateDue.setMonth(dateChoosen[1]-1)
    dateDue.setFullYear(dateChoosen[0])
    let tiempoRestante = (dateDue-dateNow)
    tiempoRestante = tiempoRestante / 1000 / 60 / 60 / 24
    return tiempoRestante
}

function saveTask(task,priority,daysLeft,taskId){
    tasks.push({text: task, priority: priority, status: "Not Started",daysLeft:daysLeft, id : taskId});
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
    let tasks = JSON.parse(localStorage.getItem("tasks")) ||  [];

        tasks.forEach(element => {
        let template = document.getElementById("plantillaTasks")
        let clone = template.content.cloneNode(true)

        clone.querySelector(".taskText").textContent = element.text
        clone.querySelector(".taskPriority").textContent = element.priority

        clone.querySelector(".dueIn").textContent = `${element.daysLeft} Days`

        let statusSelected = clone.querySelector(".selectStatus")
        statusSelected.value = element.status;

        tarjeta = clone.querySelector(".displayTask")
        tarjeta.classList.add(element.priority)
        document.querySelector(".displayTasks").append(clone)

        tarjeta.setAttribute("id",element.id)

        let taskInput = document.getElementById("taskInput")
        taskInput.value = "" 

        console.log(localStorage)


        statusSelected.addEventListener("change", (event) => {
            let card = document.getElementById(taskId)
            if(statusSelected.value == "Completed"){
                card.remove()
            }
        });
        
    });
}

flatpickr("#dueDate", {
  dateFormat: "Y-m-d",
  defaultDate: "today"
});