var list=document.querySelector(".listItems")
var text=document.getElementById("searchBar");
function Add(){
   
    var task=document.createElement("p");
    task.innerHTML+=text.value;
    
    // task.innerHTML+="<button onclick=\"Done()\" id=\"doneBtn\">✔</button> ";`

     task.innerHTML+="&nbsp";
    task.innerHTML+="<button id=\"dltBtn\" onclick=\"Delete(event)\">✖</button>";
    if(text.value)
        {
          list.append(task);
        }
    else
    {
        alert("You have to Enter Something!")
    }
    text.value="";
    
}

function Done()
{
    span.style.textDecoration="line-through";
}
function Delete(event){
    
    event.target.parentElement.remove();
    // event.target.remove();
}
//To Do List