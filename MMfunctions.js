/**
 * Created by godson on 10/15/15.
 */

var firstCardClicked = null;
var secondCardClicked = null;
var totalPossibleMatches = 9;
var matchCounter = 0;


var attempts = 0;
var accuracy = 0;
var gamesPlayed = 0;




function cardClicked(card_id) {
    $(card_id).addClass("current_card");
    $(card_id).hide();
    var frontSource = $(card_id).prev().find("img").attr("src");
    console.log(frontSource);
    if (firstCardClicked == null) {
        firstCardClicked = frontSource;
        console.log('first click is now front source ' + firstCardClicked);
        console.log(' click functionality reset ')
    }
    else {
        secondCardClicked = frontSource;
        attempts++;
        console.log('second card clicked is now ' + secondCardClicked);
        if (secondCardClicked == firstCardClicked) {
            matchCounter++;
            firstCardClicked = null;
            secondCardClicked = null;
            $(".back").removeClass("current_card");
            if (matchCounter == totalPossibleMatches) {

                alert("You're Legend!")
            }
            else {
                return console.log('click functionality reset')
            }

        }
        else {
            $(".back").unbind();
            setTimeout(function () {
                $(".current_card").show();
                firstCardClicked = null;
                secondCardClicked = null;
                $(".back").removeClass("current_card");
                console.log('2nd card click done');
            }, 200);
        }
    }
}

