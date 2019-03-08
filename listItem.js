var cards = require('./cardsinfo.json');

var dropdownContent = document.querySelector('.dropdown-content');

for (i = 0; i < cards.length; i++) {

    var element = cards[i];

    var htmlToAppend = document.createElement('a');
    htmlToAppend.innerHTML = element.B;
    htmlToAppend.href = element.C;

    dropdownContent.appendChild(htmlToAppend);
}