/*fetch('https://upload.wikimedia.org/wikipedia/commons/c/c9/Rainbow-diagram-ROYGBIV.svg')
.then(response => response.blob())
.then(data => {
     const uri = URL.createObjectURL(data);
     const img = document.querySelector('#rainbooow');
     img.src = uri;
}).catch(error => document.write('Obrázek se nepodařilo načíst'));

*/    
	
catchRainbow();	

async function catchRainbow() {								
	const response = await fetch('https://upload.wikimedia.org/wikipedia/commons/c/c9/Rainbow-diagram-ROYGBIV.svg')								
	const blob = await response.blob();								
	document.querySelector('#rainbow').src = URL.createObjectURL(blob);								
	}								