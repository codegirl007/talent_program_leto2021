const cookingDinner = require('./promise');

async function cookingDinnerAgain() {
    try {
        let meal = await cookingDinner();
        console.log(`${meal} is served`); 
    } catch(error) {
        console.log(error);
        console.log('Ordering a pizza!');
    }
}
cookingDinnerAgain();