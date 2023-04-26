const templateDeleteBtns  = document.querySelectorAll('.delete'); 
const templateCheckboxs   = document.querySelectorAll('.check');

const radioBtns = document.querySelectorAll('fieldset > input');
const newTask   = document.querySelector('.add-new-task');
const addButton = document.querySelector('.add-button');
const taskList  = document.querySelector('.container-task-list > ul');
const checkbox  = createElements('checkbox', 'input');
const li        = createElements('li', 'li');
const deleteBtn = createElements('deleteBtn', 'button');
const bin       = createElements('bin', 'img');


/**
 * 
 * @param {const} elem 
 * @param {string} name 
 * @param {string} value 
 * @returns {HTMLElement}
 */
function setElement(elem, name, value) {
  elem.setAttribute(name, value);
  
  return elem;
};

/**
 * @param {string} name
 * @param {HTMLElement} tag
 * @return {HTMLElement} 
 */
function createElements(name, tag) {
  name = document.createElement(tag);

  return name;
};

/**
 * created and set all elements inside the li(newTask)
 * @returns {HTMLElement}
 */
function ReadyElements() {
  setElement(checkbox, 'type', 'checkbox');
  setElement(checkbox, 'class', 'check');
  setElement(deleteBtn, 'class', 'delete');
  setElement(bin, 'src', '../src/assets/delete.png');
  setElement(bin, 'alt', 'bin');
  deleteBtn.append(bin);
  li.append(checkbox, newTask.value, deleteBtn);
  return li;
};

function addTask(e) {
  if(newTask.value !== '' && (e.type === 'click' || e.code === 'Enter')) {
    taskList.prepend(ReadyElements());
    newTask.value = '';
    newTask.autofocus;
  };
};

function deleteTask(e) {
  e.currentTarget.parentNode.remove();
};

function filterTask(e) {
  templateCheckboxs.forEach(checkbox => {
    if(e.currentTarget.id === 'all') {
      checkbox.parentNode.style.display = 'flex';
    };
    if(e.currentTarget.id === 'to-do') {
      if (checkbox.checked) {
        checkbox.parentNode.style.display = 'none';
      } else {
        checkbox.parentNode.style.display = 'flex';        
      };
    }
    if(e.currentTarget.id === 'did') {
      if (!checkbox.checked) {
        checkbox.parentNode.style.display = 'none';
      } else {
        checkbox.parentNode.style.display = 'flex';        
      };
    }
  });
  if(e.currentTarget.id === 'all') {
    checkbox.parentNode.style.display = 'flex';
  };
  if(e.currentTarget.id === 'to-do') {
    if (checkbox.checked) {
      checkbox.parentNode.style.display = 'none';
    } else {
      checkbox.parentNode.style.display = 'flex';        
    };
  }
  if(e.currentTarget.id === 'did') {
    if (!checkbox.checked) {
      checkbox.parentNode.style.display = 'none';
    } else {
      checkbox.parentNode.style.display = 'flex';        
    };
  }
};

addButton.addEventListener('click', addTask);
newTask.addEventListener('keyup', addTask);
deleteBtn.addEventListener('click', deleteTask);
templateDeleteBtns.forEach(deleteBtn => {
  deleteBtn.addEventListener('click', deleteTask)  
});
radioBtns.forEach(radioBtn => {
  radioBtn.addEventListener('click', filterTask)
});

