var tasksCount=0;
var listItems=document.getElementById("listItems")
var inputBox=document.getElementById("inputBox");
var count=document.getElementById("count");

inputBox.addEventListener("keypress",function(event){
    if(event.key=="Enter")
        tasksAdd();
})

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
            if(tasksCount<0)
            {
                tasksCount=0;
                count.innerHTML=tasksCount
            }
            else
            count.innerHTML=++tasksCount;
           
        }
        inputBox.value="";
        
        storeTasks();
        displayTasks();
}

function dltTasks(event)
{
    event.target.parentElement.parentElement.remove();
    if(tasksCount<0)
    {
        tasksCount=0;
        count.innerHTML=tasksCount;
    }
    else
    count.innerHTML=--tasksCount;
    storeTasks();
    displayTasks();
}

function storeTasks()
{
    localStorage.setItem("tasks",listItems.innerHTML);
    localStorage.setItem("cnt",count.innerHTML);
    displayTasks();
}

function displayTasks()
{
    listItems.innerHTML=localStorage.getItem("tasks");
    if(localStorage.getItem("cnt")<0)
    {
        count.innerHTML=0;
    }
    else
    count.innerHTML=localStorage.getItem("cnt");
}
displayTasks();
