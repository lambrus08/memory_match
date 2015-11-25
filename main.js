// array that puts all src images dynamically
var srcArray = [
    'assets/images/shaq.jpg',
    'assets/images/kobe.jpg',
    'assets/images/pau.jpg',
    'assets/images/Jamesworthy.jpg',
    'assets/images/jerrywest.jpg',
    'assets/images/kareem.jpg',
    'assets/images/slava.jpg',
    'assets/images/wilt.jpg',
    'assets/images/magic.jpg'
];
var firstCardClicked = null;
var secondCardClicked = null;
var matchCounter = 0;
var totalPossibleMatches = 9;


function addCardsToDom() {
    var dupArr = srcArray.concat(srcArray);
    for (var i = 0; dupArr.length > 0; i++) {
        var ranIndex = Math.floor((Math.random() * dupArr.length));
        var ranChoice = dupArr[ranIndex];
        console.log('random choice: ' + ranChoice);
        console.log(dupArr);
        var frontCard = $('<div>').addClass('front');
        var img = $('<img>', {
            src: ranChoice
        });
        var backCard = $('<div>').addClass('back');
        var backImg = $('<img>', {
            src: 'assets/images/cardlogo.jpg'
        });

        dupArr.splice(ranIndex, 1);
        console.log('New length: ' + dupArr.length);
        var cardContainer = $('<div>').addClass('card');
        $('#game-area').append(cardContainer);
        frontCard.append(img);
        backCard.append(backImg);
        cardContainer.append(frontCard, backCard);

    }

}

function cardClicked(backCardClicked) {
    console.log('inside card clicked function: ', backCardClicked);
    $(backCardClicked).addClass('currentCard');
    console.log('check for class change: ', backCardClicked);
    $(backCardClicked).hide();
    var srcId = $(backCardClicked).prev().find('img').attr('src');
    console.log('was card registered: ', srcId);
    if (firstCardClicked == null) {
        firstCardClicked = srcId;
        console.log('1st card clicked is now: ', firstCardClicked);
    }
    else {
        secondCardClicked = srcId;
        console.log('this is 2nd card clicked: ', secondCardClicked);
        if (secondCardClicked == firstCardClicked) {
            matchCounter++;
            firstCardClicked = null;
            secondCardClicked = null;
            console.log('1st card clicked status in funciton: ', firstCardClicked);
            console.log('2nd card clicked status in funciton: ', secondCardClicked);
            $('.back').removeClass('currentCard');
            if (matchCounter === totalPossibleMatches) {
                alert("will be adding better graphic to excite you betta!");
            }
            else {
                return console.log('functionality reset');
            }
        }
        else {
            $('.back').off('click');
            setTimeout(function () {
                $('.currentCard').show();
                firstCardClicked = null;
                secondCardClicked = null;
                $('.currentCard').removeClass('currentCard');
                console.log('2nd card click done');
                addClickHandler();
            }, 500);

        }
    }

}
function addClickHandler(){
    $('.back').on("click", function () {
        console.log("this is clicked: ", $(this));
        var backCardClicked = $(this);
        cardClicked(backCardClicked)
    });
}

$(document).ready(function () {
    addCardsToDom();//this function must called here in order to load dynamic board and have the click function
    //recognize the back class
    addClickHandler();
});
