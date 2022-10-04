const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const user = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    //standard way to avoid page reloading after we submit.
    e.preventDefault();
    //Makes sure that we get both name and email. produces error if we do not
    if(nameInput.value === '' || email.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter all fields';
        //removes error message after 3 seconds.
        setTimeout(() =>  msg.remove(), 3000)
    }else {
        //creates li element
        const li = document.createElement('li');
        //adds the name and email value TO that li that is just created
        li.appendChild(document.createTextNode(`${nameInput.value} : ${email.value}`));
        //adds the li we just created TO the users 
        user.appendChild(li);
        // This clears the input list AFTER we have submitted
        nameInput.value = '';
        email.value = '';
    }

}