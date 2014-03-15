$(function () {
    $('body').on('submit', "#multipleArgumentsForm", function (e) {

        e.preventDefault();


        Messenger().post("Your form is successfully submitted");


    });


    doWork('Pravin', 'salman', 'aishwarya', 'pradeep', 'salma', 'Vivek');
});

function doWork() {

    var output = new Array();
    for (var i = 0; i < arguments.length; i++) {
        var cool = arguments[i].split("").reverse().join(" ");

        output.push(cool);
    }
    alert('output strings are=' + output);
}