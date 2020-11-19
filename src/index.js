document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let subButton=document.getElementById("sub-button");
  let description=document.getElementById("new-task-description");
  let result=document.getElementById("tasks");
  
subButton.addEventListener( 'click', function( event ) {
    let text = description.value;
   // if ( text !== '' ) {
      result.innerHTML += '<li>' + text + ' <button onclick="Delete(this);">x</button> </li>';
     // description.value = '';
      
  //  }
    event.preventDefault();
  }, false);

});

function Delete(currentEl){
  currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
  }

    