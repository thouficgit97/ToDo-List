var listItems=document.getElementById("listItems")
var inputBox=document.getElementById("inputBox");
function tasksAdd(){
        if(inputBox.value=="")
        {
            alert("Enter Your Tasks!");
        }
        else
        {
            var li=document.createElement("li");
            li.innerHTML=inputBox.value;
            listItems.appendChild(li);
            var span=document.createElement("span");
            span.innerHTML="<button id=\"dltBtn>\" onclick=\"dltTasks(event)\">✖</button>";
            li.appendChild(span);
        }
        inputBox.value="";
        storeTasks();
}

function dltTasks(event)
{
    event.target.parentElement.parentElement.remove();
    storeTasks();
}

function storeTasks()
{
    localStorage.setItem("tasks",listItems.innerHTML);
}

function displayTasks()
{
    listItems.innerHTML=localStorage.getItem("tasks");
}
displayTasks();
