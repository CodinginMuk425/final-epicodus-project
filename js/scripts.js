//user facing

$(document).ready(function () {
    $("form#numbers").submit(function (event) {
        event.preventDefault();
        var inputValue = parseInt($("form#numbers input").val());
        var response = $("#response");
        var startarray = [];
        var finalarray = [];
        for (var i = 0; i <= inputValue; i++) {
            i = i.toString();
            startarray.push(i);
        }
});
})

//backend

for (var i = 0; i < startarray.length; i++){
    if (startarray[i].includes("3")){
        finalarray.push("Won't you be my neighbor?");
    } else if (startarray[i].includes("2")){
        finalarray.push("Boop!");
    } else if (startarray[i].includes("1")){
        finalarry.push("Beep!");
    } else {
        finalarray.push(i);
    }
}