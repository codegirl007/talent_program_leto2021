// import {texts} from './text.js';

function imageGallery() {
    const highlight = document.querySelector('.gallery__highlight');
    const previews = document.querySelectorAll('.gallery__preview img');

    //proklikám malé obrázky a zobrazí se mi jejich velká verze
    previews.forEach(preview => {
        preview.addEventListener('click', function() {
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace('small', 'big') //zamění malé obrázky za velké
            highlight.src = bigSrc;
            previews.forEach(preview => preview.classList.remove('active')); //odebírám třídu active od všech kliknutých obrázků (jinak zůstává)
            preview.classList.add('active'); //přidám třídu active pro aktivní obrázek
        })
    })
}
imageGallery();
