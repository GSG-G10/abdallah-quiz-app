const startNowButton = document.querySelector('#start-now-button');
const nameInput = document.querySelector('#name-input');
const leadboardUl = document.querySelector('#leadboard-ul');

const leadboard = JSON.parse(localStorage.getItem('leadboard')) || [];

document.addEventListener('DOMContentLoaded',() => {
    leadboardUl.innerHTML = "";
    leadboard.forEach(user => {
        const span = document.createElement('span');
        span.textContent = `${user.score} / 10`;

        const li = document.createElement('li');
        li.textContent = `${user.name}`;
        li.appendChild(span);


        leadboardUl.appendChild(li);
    });
});

startNowButton.addEventListener('click',(e) => {
    e.preventDefault();

    if(nameInput.value.trim() == ''){
        alert('please enter your name');
        return;
    }

    const user = {
        id: Date.now(),
        name: nameInput.value.trim()
    };

    localStorage.setItem('currentUser', JSON.stringify(user));

    window.location = "question.html";
});


