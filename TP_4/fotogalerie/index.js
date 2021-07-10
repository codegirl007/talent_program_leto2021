const images = [
    { id: 0,
      title: 'Lední medvědi', 
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, nemo doloribus maiores qui voluptate delectus.',
      src: 'images/polar-bear.jpg' },
    { id: 1,
      title: 'Orel',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, nemo doloribus maiores qui voluptate delectus.',
      src: 'images/eagle.jpg' },
    { id: 2,
      title: 'Slon',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, nemo doloribus maiores qui voluptate delectus.',
      src: 'images/elephant.jpg'},
    { id: 3,
      title: 'Koně',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, nemo doloribus maiores qui voluptate delectus.',
      src: 'images/horses.jpg' },
    { id: 4,
      title: 'Hora',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, nemo doloribus maiores qui voluptate delectus.',
      src: 'images/mountain.jpg' },
    { id: 5,
      title: 'Strom',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, nemo doloribus maiores qui voluptate delectus.',
      src: 'images/tree.jpg' },
    { id: 6,
      title: 'Velryba',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, nemo doloribus maiores qui voluptate delectus.',
      src: 'images/whale.jpg' },
    { id: 7,
      title: 'Vlci',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, nemo doloribus maiores qui voluptate delectus.',
      src: 'images/wolfs.jpg'}              
];

const gallery = document.querySelector('.gallery');
const big = document.querySelector('.big-foto');
const img = document.querySelector('.big-foto img');

function createGalery(arr){
    arr.forEach(element => {
        const foto = document.createElement('img');
        foto.src = element.src;
        foto.classList.add(element.id);
        foto.addEventListener('click', makeBigger);
        gallery.appendChild(foto);  
    });
    gallery.firstChild.id = 'white-border';
}

window.createGalery(images);



function makeBigger(){
  let whiteBorder = document.querySelector('#white-border');
  whiteBorder.removeAttribute('id');
  this.id = 'white-border';
  img.src = this.src;
  img.className = '';
  img.classList.add(this.className);
}

const right = document.querySelector('.right');
right.addEventListener('click', function () {
     let number = parseInt(img.className);
     if(number + 1 < images.length){
      let whiteBorder = document.querySelector('#white-border');
      whiteBorder.removeAttribute('id');
      number++;
      img.className = '';
      img.src = images[number].src;
      document.querySelector(`[class="${number}"]`).id = 'white-border';
      img.classList.add(images[number].id);
     }
});

const left = document.querySelector('.left');
left.addEventListener('click', function () {
  
  let number = parseInt(img.className);
  if(number - 1 > -1){
   let whiteBorder = document.querySelector('#white-border');
   whiteBorder.removeAttribute('id');
   number--;
   img.className = '';
   img.src = images[number].src;
   document.querySelector(`[class="${number}"]`).id = 'white-border';
   img.classList.add(images[number].id);
  }
});
