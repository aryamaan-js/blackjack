// Challenge 1: Your Age in Days

function ageInDays() {
    var birthYear = prompt("What year were you born? Like 2007?");
    var yourAgeInDays = (2020 - birthYear) * 365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("You are "
    + yourAgeInDays + " days old.")
    h1.setAttribute('id', 'yourAgeInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('yourAgeInDays').remove();
}

// Challenge 2: Cat Generator

// f3ba2983-7e76-454a-974f-954c9a37adbb

function generateCat() {
    // https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}

// Challenge 3: Rock, Paper, Scissors

function rpsGame(choice) {
    var humanChoice, botChoice = 0;
    humanChoice = choice.id;
    rand = Math.random();
    if (rand <= 1/3) {
        botChoice = 'rock';
    } else if (rand <= 1/3*2) {
        botChoice = 'paper';
    } else {
        botChoice = 'scissors';
    }
    results = decideWinner(humanChoice, botChoice);
    // console.log(results);
    message = finalMessage(results);
    rpsFrontEnd(humanChoice, botChoice, message);
}

function decideWinner(humanChoice, botChoice) {
    var rpsDatabase = {
        'rock': {'rock': 0.5, 'paper': 0, 'scissors': 1},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'rock': 0, 'paper': 1, 'scissors': 0.5}
    };

    var score = rpsDatabase[humanChoice][botChoice];
    var cScore = rpsDatabase[botChoice][humanChoice];
    return [score, cScore];
}

function finalMessage(results) {
    if (results[0] == 0) {
        return {'Message': 'You lost!', 'Color': 'red'};   
    } else if (results[0] == 1) {
        return {'Message': 'You win!', 'Color': 'green'};
    } else {
        return {'Message': 'It\'s a tie!', 'Color': 'yellow'};
    }
}

function rpsFrontEnd(humanChoice, botChoice, results) {
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');

    div1.innerHTML = '<img width=100 height=100 src="' + humanChoice + '.jpg" style="box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);">'
    div2.innerHTML = '<h1 style="color: ' + results['Color'] + ';">' + results['Message'] + '</h1>'
    div3.innerHTML = '<img width=100 height=100 src="' + botChoice + '.jpg" style="box-shadow: 0px 10px 50px rgba(255, 0, 0, 1);">'

    document.getElementById('flex-box-rps-div').appendChild(div1);
    document.getElementById('flex-box-rps-div').appendChild(div2);
    document.getElementById('flex-box-rps-div').appendChild(div3);
}

// Challenge 4: Change the Color of All the Buttons

var allButtons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i = 0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1]);
}


function buttonColorChange(buttonThingy) {
    if (buttonThingy.value == 'red') {
        buttonRed();
    } else if (buttonThingy.value == 'green') {
        buttonGreen();
    } else if (buttonThingy.value == 'blue') {
        buttonBlue();
    } else if (buttonThingy.value == 'yellow') {
        buttonYellow();
    } else if (buttonThingy.value == 'random') {
        buttonRandom();
    } else if (buttonThingy.value == 'reset') {
        buttonReset();
    }
}

function buttonRed() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function buttonBlue() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-primary');
    }
}

function buttonYellow() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-warning');
    }
}

function buttonReset() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonRandom() {
    for (let i = 0; i < allButtons.length; i++) {
        let choice = Math.random();
        if (choice <= 0.25) {
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add('btn-danger');
        } else if (choice <= 0.5) {
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add('btn-warning');
        } else if (choice <= 0.75) {
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add('btn-primary');
        } else {
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add('btn-success');
        }
    }
}

// Challenge 5: Blackjack

let blackjackGame = {
    "You": {"scoreSpan": "#your-blackjack-result", "div": "#your-box", "score": 0,},
    "Dealer": {"scoreSpan": "#dealer-blackjack-result", "div": "#dealer-box", "score": 0,},
    "Cards": ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    "cardsMap": {'A': [1, 11], '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10,},
    "Wins": 0,
    "Losses": 0,
    "Draws": 0,
}

const YOU = blackjackGame['You'];
const DEALER = blackjackGame['Dealer'];

const HIT_SOUND = new Audio('sounds/swish.m4a');

document.querySelector('#hit').addEventListener('click', blackjackHit);
document.querySelector('#deal').addEventListener('click', blackjackDeal);
document.querySelector('#stand').addEventListener('click', dealerLogic);

function blackjackHit() {
    r = document.querySelector('#blackjack-result').textContent;
        if (YOU['score'] <= 21) {
            card = pickCard();
            showCard(YOU);
            updateScore(card, YOU);
            showScore(YOU);
        } else {
            alert('Sorry! Cannot pick card after bust.')
        }
}

function showCard(activePlayer) {
    displayCard(card, activePlayer);
}

function blackjackDeal() {
    document.querySelector('#blackjack-result').textContent = 'Let\'s Play';
    document.querySelector('#blackjack-result').style.color = '#212529'
    updateTable();
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    for (let i = 0; i < yourImages.length; i++) {
        yourImages[i].remove();
    }
    for (let j = 0; j < dealerImages.length; j++) {
        dealerImages[j].remove();
    }
    HIT_SOUND.play();

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;

    document.querySelector('#your-blackjack-result').style.color = 'white';
    document.querySelector('#dealer-blackjack-result').style.color = 'white';
}

function displayCard(card, activePlayer) {
    let cardImage = document.createElement('img');
    cardImage.src = `images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    HIT_SOUND.play();
}

function pickCard() {
    return blackjackGame['Cards'][Math.floor(Math.random() * 13)];
}

function updateScore(card, activePlayer) {
    // If adding 11 keeps me below 21, add 11, otherwise add 1.
    if (card == 'A') {
        if (activePlayer['score'] + 11 <= 21) {
            activePlayer['score'] += 11;
        } else {
            activePlayer['score'] += 1;
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] <= 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
}

function dealerLogic() {
    while (DEALER['score'] < 15) {
        let card = pickCard();
        displayCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
    }

    showResult(computeWinner());
}

// Compute winner and return result
function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            winner = YOU;
        } else if (YOU['score'] < DEALER['score']) {
            winner = DEALER;
        }
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        winner = DEALER;
    }
    return winner;
}

function showResult(result) {
    resultSpan = document.querySelector('#blackjack-result');
    if (result == YOU) {
        resultSpan.textContent = 'You won! :D';
        resultSpan.style.color = 'green';
        const kaChing = new Audio('sounds/cash.mp3');
        kaChing.play();
        blackjackGame['Wins']++;
    } else if (result == DEALER) {
        resultSpan.textContent = 'You lost! :-(';
        resultSpan.style.color = 'red';
        const aww = new Audio('sounds/aww.mp3');
        aww.play();
        blackjackGame['Losses']++;
    } else {
        resultSpan.textContent = 'You drew! :|';
        // resultSpan.style.color = 'black';
        blackjackGame['Draws']++;
    }
}

function blackjackReset() {
    document.querySelector('#blackjack-result').textContent = 'Let\'s Play!'
    document.querySelector('#blackjack-result').style.color = 'black';
}

function updateTable() {
    let wins = document.querySelector('#wins');
    let losses = document.querySelector('#losses');
    let draws = document.querySelector('#draws');

    wins.textContent = blackjackGame['Wins'];
    losses.textContent = blackjackGame['Losses'];
    draws.textContent = blackjackGame['Draws'];
}
