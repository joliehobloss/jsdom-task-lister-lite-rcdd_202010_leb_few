document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form=document.getElementById("sub-btn");
  let description=document.getElementById("new-task-description");
  let result=document.getElementById("tasks");
  
subButten.addEventListener("click",function(event) {
result.innerHTML += '<li>' + description.value + ' <button onclick="Delete(this);">x</button> </li>';
 
  event.preventDefault();
});

function Delete(currentEl){
  currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
  }


});


/*form.addEventListener( 'submit', function( ev ) {
    var text = field.value;
    if ( text !== '' ) {
      todo.innerHTML += '<li>' + text + ' <button onclick="Delete(this);">Delete</button> </li>';
      field.value = '';
      //field.focus();
    }
    ev.preventDefault();
  }, false);*/

    