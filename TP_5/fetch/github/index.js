fetch('https://api.github.com/users?page=1&per_page=100')
.then(response => response.json())
.then(data => {
   const ul = document.querySelector('#container');
   data.forEach(element => {
       const li = document.createElement('li');
       li.innerText = element.login;
       ul.appendChild(li);
   });
});