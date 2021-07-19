const cards = ['piky', 'srdce', 'kary', 'krize'];

let currentCard;

while(currentCard != 'srdce'){
    currentCard = cards[Math.floor(Math.random() * cards.length)];
    console.log(currentCard);
}