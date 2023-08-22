const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

function updateBackground() {
    if (listContainer.querySelectorAll('li').length === 0) {
        listContainer.style.background = 'none';
    } else {
        listContainer.style.background = 'rgba(255, 255, 255, 0.64)';
    }
}

function addTask() {
    if (inputBox.value === '') {
        alert('you must write something');
    } else {
        inputBox.style.color = 'white';
        listContainer.style.display = 'block';
        // Create a new <li> element for the new task
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        // Check if there are any checked tasks
        const checkedTasks = listContainer.querySelectorAll('.checked');
        if (checkedTasks.length === 0) {
            // If there are no checked tasks, add the new task at the top
            listContainer.insertBefore(li, listContainer.firstChild);
        } else {
            // If there are checked tasks, add the new task at the top
            listContainer.insertBefore(li, listContainer.firstChild);
        }
        updateBackground(); // Update the background color
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        if (e.target.classList.contains('checked')) {
            // Uncheck the item and move it to the top
            e.target.classList.remove('checked');
            listContainer.insertBefore(e.target, listContainer.firstChild);
        } else {
            // Check the item and move it to the bottom
            e.target.classList.add('checked');
            listContainer.appendChild(e.target);
        }
        saveData();
        updateBackground(); // Update the background color
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        updateBackground(); // Update the background color
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem('data');
    updateBackground(); // Update the background color after loading data
}
showData();
