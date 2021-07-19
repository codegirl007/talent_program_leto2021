let data = [1, 2, null, "false", undefined, 0, []];


let cleanData = data.map(el => {
    return el = el ?? 'nedefinováno';
});

/*
let cleanData = [];
for(let i =0; i < data.length; i++ ){
    data[i] = data[i] ?? "nedefinováno";
    cleanData.push(data[i]);
} */


console.log(cleanData);