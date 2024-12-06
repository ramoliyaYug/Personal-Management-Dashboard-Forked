document.getElementById('add-task-btn').addEventListener('click', function() {
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  const popUpMessage = document.getElementById('pop-up-message');
  const popUp = document.getElementById('pop-up');

  if (taskInput.value.trim() == "") {
      popUpMessage.textContent = "Please enter a task";
      popUp.style.display = "block";
  } else {
      const newTask = document.createElement('li');
      newTask.textContent = taskInput.value;
      taskList.appendChild(newTask);
      taskInput.value = '';
  }
});

// Close pop-up when the "Close" button is clicked
document.getElementById('close-pop-up-btn').addEventListener('click', function() {
  const popUp = document.getElementById('pop-up');
  popUp.style.display = "none";
});

document.getElementById('save-note-btn').addEventListener('click', function() {
  const noteInput = document.getElementById('note-input');
  const noteList = document.getElementById('note-list');
  const popUpMessage = document.getElementById('pop-up-message');
  const popUp = document.getElementById('pop-up');
  if(noteInput.value.trim() == "") {
      popUpMessage.textContent = "Please enter a note";
      popUp.style.display = "block";
  }else{
      const newNote = document.createElement('li');
      newNote.textContent = noteInput.value;
      noteList.appendChild(newNote);
      noteInput.value = '';
  }
});

document.getElementById('clearAll-btn').addEventListener('click', function() {
  const noteList = document.getElementById('note-list');
  const clearAllPopUp = document.getElementById('clearPopUp');
  clearAllPopUp.style.display = "block";
  document.getElementById('close-clearAll-pop-up-btn').addEventListener('click', function() {
    clearAllPopUp.style.display = "none";
  });
  document.getElementById('clearAll-inner-btn').addEventListener('click', function() {
    noteList.innerHTML = '';
    clearAllPopUp.style.display = "none";
  });
})

document.getElementById('add-goal-btn').addEventListener('click', function() {
  const goalInput = document.getElementById('goal-input');
  const goalList = document.getElementById('goal-list');
  const popUpMessage = document.getElementById('pop-up-message');
  const popUp = document.getElementById('pop-up');
  if(goalInput.value.trim() == "") {
      popUpMessage.textContent = "Please enter a goal";
      popUp.style.display = "block";
  }else{
      const newGoal = document.createElement('li');
      newGoal.textContent = goalInput.value;
      goalList.appendChild(newGoal);
      goalInput.value = '';
  }
});

// You can later add functionality for fetching weather from an API, etc.
