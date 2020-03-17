$(document).ready(function() {

    var source = $('#card-template').html();
    var template = Handlebars.compile(source);

    $.ajax({
        url : 'https://flynn.boolean.careers/exercises/api/array/music',
        method : 'GET',
        success: function(data) {
            console.log(data.response);
            currObj.html(data.response);

            if(data.response <= 5) {
                if(currObj.hasClass('green')) {
                    currObj.removeClass('green')
                }

                currObj.addClass('yellow');
            }
            else {
                if(currObj.hasClass('yellow')) {
                    currObj.removeClass('yellow')
                }
                currObj.addClass('green');
            }
        },
        error: function() {
        alert('Failed')
        }


    });



})
