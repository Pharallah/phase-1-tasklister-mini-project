//
document.addEventListener("DOMContentLoaded", (e) => {
  let form = document.querySelector('form');


// Creates an EL for the Submit Event to Form
  form.addEventListener('submit', (e) => { 
    e.preventDefault(); // Prevents page from refreshing
    buildToDo(e.target.new_todo.value); //User Input --> DOM
    form.reset(); //Resets the form field after submission
  })
})

// Function that takes User Input and append to DOM
function buildToDo(toDo) { 
  // Creates <p> & button elements
  let p = document.createElement('p');
  let btn = document.createElement('button');
  
  btn.addEventListener('click', deleter); // Delete functionality
  btn.textContent = 'X'; // Text content of button
  p.textContent = `${toDo  }`; //Text content of <p>

  p.appendChild(btn); // Appends button as a Child of <p>
  document.querySelector('#tasks').appendChild(p); // Appends <p> to show up under the "My To Do's"
}

//Delete function for "X" button
function deleter(e) {
  // Targets the Parent Node of btn which is the <p> element
  e.target.parentNode.remove(); 
}


/* 
Stretch Deliverables - NOT YET COMPELTE

A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
  As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority

An additional input field (e.g. user, duration, date due)
Ability to edit tasks

Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM
*/