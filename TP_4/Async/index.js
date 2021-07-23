const {cookingDinner} = require('./promise');



const dinner = async() => {
    try{
        await cookingDinner().then(meal => console.log(`${meal} is served`));
    }catch(error){
        console.log('Ordering pizza');
    }
}

dinner();