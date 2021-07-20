let randomSuccess = () => {
    let num = Math.random();
    if (num < .5 ){
      return true;
    } else {
    return false;
    }
 };
 
 const cookingDinner = () => {
   return new Promise((resolve, reject) => {
   console.log('Fingers crossed... Putting the Lasana in the oven');
   setTimeout(()=>{
     let success = randomSuccess();
     if(success){
       resolve('Lasana');
     } else {
       reject('Dinner is ruined!');
     }
 }, 1000);
 });
 };

module.exports.cookingDinner = cookingDinner;