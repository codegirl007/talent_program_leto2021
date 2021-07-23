const store = {
    bananas: 0,
    apples: 60,
    oranges: 20
};

new Promise((resolve, reject) => {
    if (store.bananas > 0) {
        resolve('Bananas order proceed')
    } else {
        reject('That item is sold out');
    }
}).then(
    result => console.log(result)).catch(error => console.log("Error message"));

const link = state => {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
};

promiseChain = link(true)
promiseChain.then(result => console.log(result + "1"));
promiseChain.then(result => console.log(result + "2"));