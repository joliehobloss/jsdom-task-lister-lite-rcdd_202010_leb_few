document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let subButton=document.getElementById("sub-button");
  let description=document.getElementById("new-task-description");
  let result=document.getElementById("tasks");
  
subButton.addEventListener( 'click', function( event ) {
/*result.innerHTML += '<li>' + description.value + ' <button onclick="Delete(this);">x</button> </li>';*/
result.innerHTML += '<li>' + description.value + ' <button id="remove">x</button> </li>';

document.getElementById("remove").addEventListener( 'click', function( event ) {

  });


    event.preventDefault();
  });

});

/*function Delete(currentEl){
  currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
  }*/

    