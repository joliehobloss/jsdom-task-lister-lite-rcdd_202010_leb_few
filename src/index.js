document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form=document.getElementById("create-task-form");
  let description=document.getElementById("new-task-description");
  let result=document.getElementById("tasks");
  
form.addEventListener( 'submit', function( event ) {
    let text = description.value;
    if ( text !== '' ) {
      result.innerHTML += '<li>' + text + ' <button onclick="Delete(this);">x</button> </li>';
      description.value = '';
      
    }
    event.preventDefault();
  }, false);

});

function Delete(currentEl){
  currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
  }

    