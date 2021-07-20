const cooking = require('./promise.js');

async function cook(){
    try {
        let meal = await cooking.cookingDinner();
        console.log(`${meal} is served`);
    }
    catch(err){
      console.log(err);
      console.log('Ordering pizza');
    }
}

cook();
