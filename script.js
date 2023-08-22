const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('you must write something');
    } else {
        inputBox.style.color = 'white';
        listContainer.style.background = '';
        listContainer.style.display = 'block';
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.append(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        if (listContainer.querySelectorAll('li').length === 0) {
            listContainer.style.background = 'none';
        }
    }
}, false);