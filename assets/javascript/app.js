
$(document).ready(function() {
    $("#image").click(function() {
    $('#image').attr('target', '_blank');
    });

    $('#image').on('click', 'a', function(event) {
        event.preventDefault();
        window.open($(this).attr('href'), '_blank');
    });
   
});


var today = new Date;
    document.getElementById('date-time').innerHTML= today.toDateString();

var today = new Date;
    document.getElementById('date-time').innerHTML= today.toDateString();



