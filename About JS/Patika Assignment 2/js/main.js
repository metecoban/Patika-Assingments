const listUl = document.querySelector(`#list`);
const addBtn = document.querySelector(`#liveToastBtn`)
const taskInput = document.querySelector(`#task`)

let taskArr; // Main arr for tasks

document.addEventListener('DOMContentLoaded', whenStartFillTheListWithTasks);

function whenStartFillTheListWithTasks() { // For localStorage 
    if (localStorage.getItem(`tasks`) === null) {
        taskArr = [];
    } else {
        taskArr = JSON.parse(localStorage.getItem(`tasks`));
        for (let index of taskArr) {
            newTask(index);
        }
    }
}

listUl.addEventListener('click', (e) => {
    const checked = e.target;
    checked.className == `close` ? deleteLi(checked) : checked.className = checked.className === `checked` ? `` : `checked`;

})

function newElement() {
    if (taskInput.value != "") {
        newTask(taskInput.value);

        // LocalStorage add operation
        taskArr.push(taskInput.value);
        localStorageSet();

        taskInput.value = ``;

        // Send success alert
        $(document).ready(function () {
            $('.success').toast('show');
        });
    } else {
        // Send error alert
        $(document).ready(function () {
            $('.error').toast('show');
        });
    }
}

function newTask(taskMessage) {
    const newLi = document.createElement('li');
    newLi.innerHTML = taskMessage;

    const newSpan = document.createElement('span');
    newSpan.innerHTML = `×`;
    newSpan.className = 'close';

    newLi.appendChild(newSpan);
    listUl.appendChild(newLi);
}

function deleteLi(target) {
    target.parentNode.remove();

    // localstorage delete operation
    taskArr.splice(taskArr.indexOf(target.parentNode.textContent.slice(0, target.parentNode.textContent.length - 1)), 1);
    localStorageSet();

    // Send delete alert
    $(document).ready(function () {
        $('.success-delete').toast('show');
    });
}

function localStorageSet() {
    localStorage.setItem(`tasks`, JSON.stringify(taskArr));
}
