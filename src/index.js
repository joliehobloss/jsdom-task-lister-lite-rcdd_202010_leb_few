document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let subButten=document.getElementById("sub-btn");
  let description=document.getElementById("new-task-description");
  let result=document.getElementById("tasks");
  
subButten.addEventListener("click",function(event) {
result.innerHTML += '<li>' + description.value + ' <button onclick="Delete(this);">x</button> </li>';
 function Delete(currentEl){
  currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
  }

  event.preventDefault();
});


});


    