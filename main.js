// array that puts all src images dynamically
var video_starttime_array = [4, 8, 10, 14, 18, 22.1, 23.8, 25];
var video_starttime_index = 0;
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
var players = {
    'assets/images/shaq.jpg':
    {
        match_result: function() {
            $('#videoModal').modal('show');
            play_youtube_video('KgGaBQEN1X0');
        }
    },
    'assets/images/kobe.jpg':
    {
        match_result: function() {
            $('#videoModal').modal('show');
            play_youtube_video('xYiHvMuYJ44');
        }
    },

    'assets/images/pau.jpg':
    {
        match_result: function() {
            $('#videoModal').modal('show');
            play_youtube_video('rHUQDi0E6eM');
        }
    },
    'assets/images/Jamesworthy.jpg':
    {
        match_result: function() {
            $('#videoModal').modal('show');
            play_youtube_video('GNREeNzvJcI');
        }
    },

    'assets/images/jerrywest.jpg':
    {
        match_result: function() {
            $('#videoModal').modal('show');
            play_youtube_video('fzWGnA4Ll-0');
        }
    },

    'assets/images/kareem.jpg':
    {
        match_result: function() {
            $('#videoModal').modal('show');
            play_youtube_video('dQkUVSXKwgg');
        }
    },

    'assets/images/slava.jpg':
    {
        match_result: function() {
            $('#videoModal').modal('show');
            play_youtube_video('vEZ7T4Ym5Sc');

        }
    },

    'assets/images/wilt.jpg':
    {
        match_result: function() {
            $('#videoModal').modal('show');
            play_youtube_video('Qak1eeHqfJ8');
        }
    },

    'assets/images/magic.jpg':
    {
        match_result: function() {
            $('#videoModal').modal('show');
            play_youtube_video('mYuhQNQovHY');
        }
    }


};



   /* pau: 'assets/images/pau.jpg',
    james: 'assets/images/Jamesworthy.jpg',
    jerry: 'assets/images/jerrywest.jpg',
    kareem: 'assets/images/kareem.jpg',
    slava: 'assets/images/slava.jpg',
    wilt: 'assets/images/wilt.jpg',
    magic: 'assets/images/magic.jpg'
};*!/*/
var firstCardClicked = null;
var secondCardClicked = null;
var matchCounter = 0;
var totalPossibleMatches = 8;
var attempts = 0;
var accuracy = 0;
var gamesPlayed = 0;

//make a function that increments to the next video_startime_index,
//and then uses that index to change the currentTime on the video player
function mainDunk() {
    var video = document.getElementById("main_dunk");
    var time = video_starttime_array[video_starttime_index++];
    video.currentTime=time;

}
function play_youtube_video(vid_id){
    var string = "http://www.youtube.com/embed/"+vid_id+"?autoplay=1";
    $("#ytplayer").attr('src',string);
}


function addCardsToDom() {
    var dupArr = srcArray.concat(srcArray);
    for (var i = 0; dupArr.length > 0; i++) {
        if(i % 6 == 0){

            var row = $("<div>").addClass('row cardRow');

        }
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
        var cardContainer = $('<div>').addClass('card col-xs-2');

        frontCard.append(img);
        backCard.append(backImg);
        cardContainer.append(frontCard, backCard);
        row.append(cardContainer);
        if(i % 6 === 0){
            $('#game-area').append(row);
        }

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
        attempts++;

        console.log('this is 2nd card clicked: ', secondCardClicked);
        if (secondCardClicked == firstCardClicked) {

            players[srcId].match_result();
            matchCounter++;
            firstCardClicked = null;
            secondCardClicked = null;
            console.log('1st card clicked status in function: ', firstCardClicked);
            console.log('2nd card clicked status in function: ', secondCardClicked);
            $('.back').removeClass('currentCard');
            if (matchCounter === totalPossibleMatches) {

            }
            else {
                console.log('functionality reset');
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
        displayStats();

    }

}


function addClickHandler(){
    $('.back').on("click", function () {
        console.log("this is clicked: ", $(this));
        var backCardClicked = $(this);
        cardClicked(backCardClicked);
    });
}


function displayStats(){
    accuracy = Math.round(100* (matchCounter / attempts));
    $('.games-played .value').text(gamesPlayed);
    $('.attempts .value').text(attempts);
    if (attempts == 0) {
        $('.accuracy .value').text("100%");
    }
    else {
        $('.accuracy .value').text(accuracy + '%');
    }

}
function resetStats() {
    var parent = $('#game-area');
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }

    displayStats();
    accuracy = 0;
    totalPossibleMatches = 0;
    attempts = 0;
    matchCounter = 0;


}
function assignResetButton() {
    $('.btn').on('click', function(){
        $('.back').show();
        firstCardClicked = null;
        secondCardClicked = null;
        video_starttime_index = 0;
        mainDunk();
        resetStats();
        displayStats();
    });

}



$(document).ready(function () {
    addCardsToDom();//this function must called here in order to load dynamic board and have the click function
    //recognize the back class
    addClickHandler();
    assignResetButton();
    $("#mobile_title").click(function(){
        $(this).hide();
    });
    $("#modal_close").click(function(){
        mainDunk();
    });
});
