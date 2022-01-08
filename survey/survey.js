const form = document.querySelector('#survey-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = form.email.value;
  const emailPattern = /[a-zA-Z]@/;
  
  if(emailPattern.test(email)) {
    feedback.textContent = 'good work!';
    
  } else { feedback.textContent = 'please verify your e-mail';
    
  }
});