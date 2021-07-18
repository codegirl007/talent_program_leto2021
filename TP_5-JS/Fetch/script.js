fetch('https://upload.wikimedia.org/wikipedia/commons/c/c9/Rainbow-diagram-ROYGBIV.svg')
.then(response => {
    console.log(response);
    return response.blob();
    })
.then(blob => {
console.log(blob)
let rainbow = document.querySelector('#rainbow');
rainbow.src = URL.createObjectURL(blob)
})
.catch(error => {
    console.log('chybaaaa')
    console.error(error)
    })