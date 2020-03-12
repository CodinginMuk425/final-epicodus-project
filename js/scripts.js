//backend
var startarray = [];
var finalarray = [];
function finalresult() {
    for (var i = 0; i < startarray.length; i++) {
        if (startarray[i].includes("3")) {
            finalarray.push("Won't you be my neighbor?");
        } else if (startarray[i].includes("2")) {
            finalarray.push("Boop!");
        } else if (startarray[i].includes("1")) {
            finalarray.push("Beep!");
        } else {
            finalarray.push(i);
        }
    }
    $("#result").text(finalarray).show();
}


//user facing

$(document).ready(function () {
    $("form#numbers").submit(function (event) {
        event.preventDefault();
        var inputValue = parseInt($("form#numbers input").val());
        for (var i = 0; i <= inputValue; i++) {
            i = i.toString();
            startarray.push(i);
        }
        finalresult();
    });
    // hide img/text front-end
    $(".reveal").hide();
    $(".redo").hide();
    $("#appear").click(function () {
        $("#appear").hide();
        $(".reveal").show();
        $(".redo").show();
        
    });
    $(".redo").click(function() {
        $(".redo").hide();
        $("#appear").show();
        $("form#numbers").trigger("reset");
     });
})
