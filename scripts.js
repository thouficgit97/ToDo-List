var tasksCount=0;
var listItems=document.getElementById("listItems")
var inputBox=document.getElementById("inputBox");
inputBox.addEventListener("keypress",function(event){
    if(event.key=="Enter")
        tasksAdd();
})
var count=document.getElementById("count");

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
            span.innerHTML="<button id=\"dltBtn>\" onclick=\"dltTasks(event)\">❌</button>";
            li.appendChild(span);
            count.textContent=++tasksCount;
        }
        inputBox.value="";
        
        storeTasks();
}

function dltTasks(event)
{
    event.target.parentElement.parentElement.remove();
    
    count.textContent=--tasksCount;

    storeTasks();
}

function storeTasks()
{
    localStorage.setItem("tasks",listItems.innerHTML);
    localStorage.setItem("cnt",count.innerHTML);
}

function displayTasks()
{
    listItems.innerHTML=localStorage.getItem("tasks");
    count.innerHTML=localStorage.getItem("cnt");
}
displayTasks();
