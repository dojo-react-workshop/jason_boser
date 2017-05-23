function Deck(){
    this.cards = [];
    this.reset();
}

Deck.prototype.reset = function(){
    for(let i=0; i<4; i++){
        let suit = null;

        if(i===0) suit = "Spades";
        else if(i===1) suit = "Hearts";
        else if(i===2) suit = "Clubs";
        else suit = "Diamonds";

        for(let j=1; j<=13; j++){
            if(j===1) value = 'Ace';
            else if(j===11) value = 'Jack';
            else if(j===12) value = 'Queen';
            else if(j===13) value = 'King';
            else value = j;

            this.cards.push(new Card(value,suit));
        }

    }
}

Deck.prototype.shuffle = function(){
    let copy = [];
    let n = this.cards.length;
    let i = 0;

    while (n) {
        i = Math.floor(Math.random() * n--);
        copy.push(this.cards.splice(i, 1)[0]);
    }

  this.cards = copy;
}

Deck.prototype.deal = function(){
    let index = Math.floor(Math.random() * this.cards.length);
    return this.cards.splice(index, 1)[0];
}

function Card(value,suit){
    this.value = value;
    this.suit = suit;
}



function Player(name){
    this.name = name;
    this.hand = [];
}

Player.prototype.takeCard = function(){
    this.hand.push(myDeck.deal());
}

Player.prototype.discard = function(){
    this.hand.pop();
}

Player.prototype.showHand = function(){
    console.log(this.hand);
}


let myDeck = new Deck();
myDeck.shuffle();
console.log(myDeck);

let player1 = new Player('Jason');
player1.takeCard(myDeck);
player1.takeCard(myDeck);
player1.takeCard(myDeck);
player1.takeCard(myDeck);
player1.showHand();
player1.discard();
player1.discard();
player1.showHand();