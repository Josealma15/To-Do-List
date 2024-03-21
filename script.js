const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// ADD THE TASK

function addTask(){
    
    if(inputBox.value === ''){
        alert("You must write something");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    
    inputBox.value = '';
    saveTask();
}

// CHECK OR REMOVE THE TASK

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
}, false);

// SAVE THE TASKS IN LOCAL STORAGE

function saveTask(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// SHOW THE TASK WHEN RELOADING

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();