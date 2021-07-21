let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke "
  };

  programming.languages.push('Java');
  console.log(programming);
  programming.difficulty = 10;
  programming.isFun = true;
  for(lang of programming.languages){
      console.log(lang);
  }

  for(k in programming){
      console.log(k);
  }
var output = false;
  for(k in programming){
      if(k=='isChallenging'){
          output = true;
      }
  }
  console.log(output);

  console.log(programming.hasOwnProperty('isChallenging'));

  for(k in programming){
      console.log(programming[k]);
  }

  let {languages, isRewarding, difficulty} = programming;

  let newProperties = {
    tools: ["brain", "PC", "internet"],		
    wishes: "Becoming the Developer"
}	

Object.assign(programming, newProperties);

var clonnedObject = {...programming};

for([k,v] of Object.entries(programming)){
    console.log(k + '-' + v);
}