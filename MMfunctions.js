/**
 * Created by godson on 10/15/15.
 */

var firstCardClicked = null;
var secondCardClicked = null;
var totalPossibleMatches = 2;
var matchCounter = 0;

function cardClicked(card_id) {
    var backCard = $(card_id).find('.back');
    $(backCard).hide();
    var frontSource = $(backCard).prev().find('img').attr('src');
    console.log(frontSource);
    if (firstCardClicked == null) {
        firstCardClicked = frontSource;
        console.log('first click is now front source ' + firstCardClicked);
        console.log(' click functionality reset ')
    }
    else {
        secondCardClicked = frontSource;
        console.log('second card clicked is now ' + secondCardClicked);
        if (secondCardClicked == firstCardClicked) {
            matchCounter++;
            firstCardClicked = null;
            secondCardClicked = null;
            if (matchCounter == totalPossibleMatches) {

                alert("You're Legend!")
            }
            else {
                return console.log('click functionality reset')
            }

        }
        else{
            console.log('card 1 and 2 selected');
            setTimeout(function(){$('.back').show();},1500);
            firstCardClicked = null;
            secondCardClicked = null;
            console.log('2nd card click done');
        }
    }
}