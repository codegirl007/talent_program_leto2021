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
   promiseChain.then(result => console.log(result + '1'));
   promiseChain.then(result => console.log(result + '2')); 