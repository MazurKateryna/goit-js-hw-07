const inputValidRef = document.querySelector('#validation-input');

function validationInput() {
  if(inputValidRef.value.length === 6){
    inputValidRef.classList.add('valid');
    inputValidRef.classList.remove('invalid'); 
  } else {
    inputValidRef.classList.remove('valid'); 
    inputValidRef.classList.add('invalid'); 
  }
}

inputValidRef.addEventListener('blur', validationInput)

