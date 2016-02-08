var peopleArray = [];
var currentPerson = 1;


$(document).ready(function(){
    getData();
    //changePerson(currentPerson);

    //console.log(peopleArray);
    
    //changePerson(currentPerson);        
    $('button').on('click', buttonClick);

});

function getData(){
    $.ajax({
        type: "GET",
        url:"/data",
        success: function(data) {
            peopleArray = data.people; 
            //console.log(peopleArray);
        },
        error: function() {
            console.log('ERROR: Unable to contact the server.');
        }

    });
}

function buttonClick () {
    $('button').removeClass('selected');

        var currentButton = $(this).attr('class');
        console.log(currentButton);
        if (currentButton != 'next' && currentButton != 'previous'){
            currentPerson = $(this).attr('class');
             $(this).addClass('selected');
            changePerson(currentPerson);
        } else if (currentButton == 'next') {
            if (currentPerson == 20) {
                currentPerson = 1;
                changePerson(currentPerson);
                $('.' + currentPerson).addClass('selected');
            } else {
                currentPerson++;
                changePerson(currentPerson);
                $('.' + currentPerson).addClass('selected');
            }
        } else if (currentButton == 'previous') {
            if (currentPerson == 1) {
                currentPerson = 20;
                changePerson(currentPerson);
                $('.' + currentPerson).addClass('selected');
            } else {
                currentPerson--;
                changePerson(currentPerson);
                $('.' + currentPerson).addClass('selected');
            }
        }
}

function changePerson (person){
        //$('#people').addClass('hide');
        $('#people').fadeOut(0);
        $('.name').text(peopleArray[person-1].name);
        $('.movie1').text(peopleArray[person-1].favoriteMovie1);
        $('.movie2').text(peopleArray[person-1].favoriteMovie2);
        $('.song').text(peopleArray[person-1].favoriteSong);
        //$('#people').removeClass('hide');
        $('#people').fadeIn(500);
}

