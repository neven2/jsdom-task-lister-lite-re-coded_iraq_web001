document.addEventListener("DOMContentLoaded", () => {
  // your code here
 
  let form = document.getElementById("create-task-form")
  let taskDescription =  document.getElementById("new-task-description")
  let button =form.querySelectorAll('input')[1];
  let ul = document.getElementById('tasks') 
  form.addEventListener("submit", function (event) {
    event.preventDefault()
    let li = document.createElement("li")
    li.innerText = taskDescription.value  
    ul.appendChild(li);
    taskDescription.value="";
  } )
});
  
