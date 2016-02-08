var peopleArray = [];
var currentPerson = 1;

$(document).ready(function(){
    getData();
    
    $('button').on('click', buttonClick);
});

function getData(){
    $.ajax({
        type: "GET",
        url:"/data",
        success: function(data) {
            peopleArray = data.people; 

            updateDom();
        },
        error: function() {
            console.log('ERROR: Unable to contact the server.');
        }

    });
}

function buttonClick () {
    removeClass();

    var currentButton = $(this).attr('class');
    if (currentButton != 'next' && currentButton != 'previous'){
        currentPerson = $(this).attr('class');
        $(this).addClass('selected');
    } else if (currentButton == 'next') {
        if (currentPerson == 20) {
            currentPerson = 1;
        } else {
            currentPerson++;
        }
    } else if (currentButton == 'previous') {
        if (currentPerson == 1) {
            currentPerson = 20;
        } else {
            currentPerson--;
        }
    }
    updateDom(); 
}

function changePerson (person){
        $('#people').fadeOut(0);
        $('img').attr('src', peopleArray[person-1].picture);
        $('.name').text(peopleArray[person-1].name);
        $('.movie1').text(peopleArray[person-1].favoriteMovie1);
        $('.movie2').text(peopleArray[person-1].favoriteMovie2);
        $('.song').text(peopleArray[person-1].favoriteSong);
        $('#people').fadeIn(500);
}

function removeClass (){
    $('button').removeClass('selected');
}

function updateDom (){
    changePerson(currentPerson);
    $('.' + currentPerson).addClass('selected');
}
