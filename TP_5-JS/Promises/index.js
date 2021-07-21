//new Promise
const store = {
    bananas: 5,
    apples: 60,
    oranges: 20
};

const {bananas} = store;

const prom = new Promise((resolve, reject) => {
    if(bananas > 0) {
        resolve ('Bananas order proceed');
    } else {
        reject ('That item is sold out');
    }
});
const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};
const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
}

//možnost 1
//prom.then(handleSuccess, handleFailure);

//možnost 2
prom.then(handleSuccess).catch(handleFailure);


//Promise chain
const link = state => {
    return new Promise(function(resolve, reject) {
    if (state) {
    resolve('success');
    } else {
    reject('error');
    }
    });
}

const promiseChain = link(true);
promiseChain.then((resolvedValue) => { console.log(resolvedValue + "1");})
promiseChain.then((resolvedValue) => { console.log(resolvedValue + "2");})