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
// stores src values
var  srcValues = [];
// creating dynamic tile id's
var divIds = [];
// check for div flipped if will use to check for certain status throughout code
var divFlipped = [];


function addCardsToDom(){
    for (var i = 0; i < srcArray.length; i++){
        console.log('console log: ', srcArray[i]);
        var ranChoice = Math.floor((Math.random() * srcArray.length));
        console.log('random choice: ', srcArray[ranChoice]);
        var frontCard = $('<div>').addClass('front');
        var img = $('<img>').attr('src', srcArray[ranChoice]);
        srcArray.splice(ranChoice,1);
        console.log('New length: ', srcArray);
        $(frontCard).append(img);
        $('#game-area').append(frontCard);

    }

}
addCardsToDom();
