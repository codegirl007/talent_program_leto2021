const store = {
    bananas: 0,
    apples: 60,
    oranges: 20
    };

const promise = new Promise((resolve, reject) => {
    if(store.bananas > 0){
        resolve('Bananas order proceed');
    }
    else{
        reject('That item is sold out');
    }
});  

promise.then(result => console.log(result))
.catch(error => console.log('Error message: ' + error));

