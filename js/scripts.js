//backend

//user facing
$(document).ready(function() {
    $("form#numbers").submit(function(event) {
        event.preventDefault();
        var output = parseInt($("form#numbers input").val());
    });
})