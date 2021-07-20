let loginAttempt = 4; 

let paragraph = document.createElement('p');
paragraph.id = 'info';
paragraph.innerHTML = ''
document.body.appendChild(paragraph);

function checkPassword(){
  let password = document.querySelector('#password').value;
  let button = document.querySelector('#button').value;

  if(password == 'javascript') {
    paragraph.innerHTML = 'Heslo ověřeno.';
    document.querySelector('#password').value = '';
  } else {
    if(loginAttempt == 0) {
    } else {
        loginAttempt = loginAttempt-1;
        paragraph.innerHTML = `Přihlášení selhalo. Zbývající počet pokusů: ${loginAttempt}.`
      if(loginAttempt == 0) {
        document.querySelector('#button').disabled = true;
        paragraph.innerHTML = 'Není možné se přihlásit';
      }
    }
  }
  return false;
}
