const startNowButton = document.querySelector('#start-now-button');
const nameInput = document.querySelector('#name-input');



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


