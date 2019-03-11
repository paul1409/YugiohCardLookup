var cardlist = require('./cardsinfo.json');
var prop = Object.keys(cardlist.cards[0]);
console.log(cardlist.cards[0]);
var yahooOnly = JSON.parse('./cardsinfo.json');
console.log(yahooOnly);


var ignore = ["id", "name", "desc", "type", "set_tag", "setcode", "image_url", "image_url_small"];