var Card = function(color, number) {
	var suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
	var values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
	this.color = suits[color];
	this.number = values[number];
	this.toString = function() {
		return this.number + ' of ' + this.color;
	};
};

var deck = new Array();

for(var color = 0; color < 4; color++) {
	for(var number = 0; number < 13; number++) {
		deck.push(new Card(color, number));
	}
}