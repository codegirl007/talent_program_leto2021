const images = {
    kitty: 'https://cdn.pixabay.com/photo/2017/10/08/15/08/cat-2830177_960_720.jpg',
    doggy: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg'
    };
  const {kitty, doggy} = images;
  
  const coinToss = () => (Math.random()<0.5) ? kitty : doggy;
  console.log(coinToss());
  
  let img = document.createElement('img');
  document.body.appendChild(img);
  img.src = coinToss();


