
$(document).ready(function() {
    $("#image").click(function() {
    $('#image').attr('target', '_blank');
    });

    $('#image').on('click', 'a', function(event) {
        event.preventDefault();
        window.open($(this).attr('href'), '_blank');
    });
   
});

