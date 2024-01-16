import { PlayingCards } from "./PlayingCards.js";

var StartButton = document.getElementById("Start")
var HitButton = document.getElementById("Hit")
var StandButton = document.getElementById("Stand")
// var DoubleButton = document.getElementById("Douple")

var PlayersCards = [];
var DealersCards = [];

var PlayersSum = 0;
var DealersSum = 0;

var ableToHit = false;
var ableToStand
var doupleMony = false;

var CardNumber
var CardSuit
var Card
var CardPath
var BlankCard

StartButton.addEventListener("click", StartGame);
HitButton.addEventListener("click", hit);
StandButton.addEventListener("click", stand);
// DoubleButton.addEventListener("click", double);

function StartGame() {
    // Reseting all values so game can start correctly
    PlayersCards = [];
    DealersCards = [];
    
    PlayersSum = 0;
    DealersSum = 0;
    
    ableToHit = true;
    ableToStand = true;
    doupleMony = false;

    document.getElementById("PlayerCards").innerHTML = "";
    document.getElementById("DealerCards").innerHTML = "";

    document.getElementById("Result").innerText = "";

    // Value reset ends

    CreateCard("./Cards/Back.png", "Dealer", true)

    for (let i = 0; i < 3; i++) {
        var CardGoes
        //Create a new card and add it to the hand
        var Card = GetCard()
        if (DealersCards.length < 1) {
            DealersCards.push(Card);
            // Adding card number to sum
            addToSum("Dealer", CardNumber);
            CardGoes = "Dealer";
        } else {
            PlayersCards.push(Card);
            // Adding Card number to sum
            addToSum("Player", CardNumber);
            CardGoes = "Player";
        }


        // Card Image path
        CardPath = "./Cards" + "/" + CardSuit + "/" + CardNumber + ".png";

        CreateCard(CardPath, CardGoes, false);
    }
}

function GetCard(){
    CardNumber  = Math.floor(Math.random() * 13) + 1;
    CardSuit    = Math.floor(Math.random() * 4);

    switch (CardSuit) { 
        case 0:
            CardSuit    = "hearts";
            Card        = CardSuit + " " + PlayingCards[CardSuit][String(CardNumber)];
            break;

        case 1:
            CardSuit    = "diamonds";
            Card        = CardSuit + " " + PlayingCards[CardSuit][String(CardNumber)];
            break;

        case 2:
            CardSuit    = "clubs";
            Card        = CardSuit + " " + PlayingCards[CardSuit][String(CardNumber)];
            break;

        case 3:
            CardSuit    = "spades";
            Card        = CardSuit + " " + PlayingCards[CardSuit][String(CardNumber)];
            break;
    }
    if (DealersCards.includes(Card) || PlayersCards.includes(Card)) {
        GetCard()
    } else {
        return(Card);
    }
}

function hit() {
    if (ableToHit) {
        Card = GetCard();
        
        PlayersCards.push(Card);
        // Card Image path
        CardPath = "./Cards" + "/" + CardSuit + "/" + CardNumber + ".png";
        addToSum("Player", CardNumber);
        CreateCard(CardPath, "Player", false);
        CheckStatus()
    }
}

function stand() {
    if (ableToStand) {
        ableToHit = false;
        Dealer()
    }
    
}

function double() {
    if (ableToHit) {
        hit()
        doupleMony = true;
        ableToHit = false;
    }
}

function Dealer() {
    document.getElementById("BlankCard").remove();
    
    Card = GetCard();

    DealersCards.push(Card);
    CardPath = "./Cards" + "/" + CardSuit + "/" + CardNumber + ".png";
    CreateCard(CardPath, "Dealer", false)
    addToSum("Dealer", CardNumber)

    while (DealersSum < PlayersSum && PlayersSum <= 21) {
        // Getting card for dealer
        Card = GetCard();

        DealersCards.push(Card);

        CardPath = "./Cards" + "/" + CardSuit + "/" + CardNumber + ".png";
        addToSum("Dealer", CardNumber)
        CreateCard(CardPath, "Dealer", false)
    }

    CheckStatus()
}



function CheckStatus() {
    if (PlayersSum > 21) {
        ableToHit = false;
        ableToStand = false;
        document.getElementById("Result").innerText = "You Lost!";
    } else if (PlayersSum <= 21 && ableToHit) {
        return
    } else {
        if (DealersSum > PlayersSum && DealersSum <= 21) {
            document.getElementById("Result").innerText = "You Lost!";
        } else if (PlayersSum == DealersSum && PlayersSum <= 21) {
            document.getElementById("Result").innerText = "It's a Draw!";
        }  else {
            document.getElementById("Result").innerText = "You won!";
        }
    }
    
}

function addToSum(Target, CardNumber) {
    if (Target === "Dealer") {
        if (CardNumber === 11 || CardNumber === 12 || CardNumber === 13) {
            DealersSum = DealersSum +  10
        } else {
            DealersSum = DealersSum + CardNumber
        }
    } else if (Target === "Player") {
        if (CardNumber === 11 || CardNumber === 12 || CardNumber === 13) {
            PlayersSum = PlayersSum +  10
        } else {
            PlayersSum = PlayersSum + CardNumber
        }
    }
    document.getElementById("DealerSum").innerText = DealersSum;
    document.getElementById("PlayerSum").innerText = PlayersSum;
}

// Function that creates cards for website
function CreateCard(CardPath, Target, Blank) {
    var TargetElement
    if (Target === "Dealer") {
        TargetElement = document.getElementById("DealerCards");
    } else if (Target === "Player"){
        TargetElement = document.getElementById("PlayerCards");
    }
    
    var imgElement = document.createElement('img');
    imgElement.src = CardPath;
    
    if (Blank === true) {
        imgElement.id = "BlankCard";
        BlankCard = false;
    }
    TargetElement.appendChild(imgElement);
}

StartGame()