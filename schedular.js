const breakTask = document.getElementById('break');
const studyTask = document.getElementById('study');
const tvTask = document.getElementById('tv');
const deselectBtn = document.getElementById('deselect');
const taskContainer = document.querySelector('.task__container');
const scheduleContainer = document.querySelector('.schedule__container');
const resetBtn = document.querySelector('.deleteBtn');
const popUp = document.querySelector('.pop-up__container');
const noBtn = document.getElementById('btn__no');
const yesBtn = document.getElementById('btn__yes');

let selectedColor, active;

//Event Listeners
taskContainer.addEventListener('click', selectTask);
scheduleContainer.addEventListener('click', setColors);
deselectBtn.addEventListener('click', resetTasks);
resetBtn.addEventListener('click',openPopup);
noBtn.addEventListener('click', closePopup);
yesBtn.addEventListener('click', deleteTasks);

// Tasks click  (3)
function selectTask (e){
    resetTasks()

    taskColor = e.target.style.backgroundColor;

    switch(e.target.id){
        case 'break':
            activeTask(breakTask, taskColor);
            icon = '<i class="fas fa-laptop-code"></i>';
            break
        case 'study':
            activeTask(studyTask, taskColor);
            icon = '<i class="fas fa-utensils"></i>';
            break
        case 'tv':
            activeTask(tvTask, taskColor);
            icon = '<i class="fas fa-mug-hot"></i>';
            break
    }

};

// Set colors for schedule (4)
function setColors (e){
    if(e.target.classList.contains('task') && active === true){
        e.target.style.backgroundColor = selectedColor;
        e.target.innerHTML = icon;
    }else if(e.target.classList.contains('fas') && active === true){
        e.target.parentElement.style.backgroundColor = selectedColor;
        e.target.parentElement.innerHTML = icon;
    }
};

// Active task (1)
function activeTask(task, color){
    task.classList.toggle('selected');

    if(task.classList.contains('selected')){
        active = true;
        selectedColor = color;
        return selectedColor;
    } else {
        active = false;
    }
}

// Reset tasks (2)
function resetTasks(){
    const allTasks = document.querySelectorAll('.task__name');

    allTasks.forEach((item)=>{
        item.className = 'task__name';
    })
}

// Delete tasks
function deleteTasks(){
    const tasks = document.querySelectorAll('.task');

    tasks.forEach((item)=>{
        item.innerHTML = '';
        item.style.backgroundColor = 'white';
    })

    closePopup();
}

// Open Pop-up
function openPopup(){
    popUp.style.display = 'flex';
}

// Close Pop-up
function closePopup(){
    popUp.style.display = 'none';
}