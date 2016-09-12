$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

/*
$('#primaryLesion').on('click', function(event) {
    var button = $(event.target).closest('button').data('name');
    console.log(`You clicked on ${button}`);
});*/

$("button").click(function() {
    var string = this.innerHTML.trim(); // Name of the button pressed
    var textAreaString = $('textarea#outputText').val(); //Current text in the text area
    // add it remove button name
    if (textAreaString.indexOf(string) >= 0) {
        textAreaString = textAreaString.replace(string, "");
    } else {
        textAreaString += (" " + string);
    }
    $('textarea#outputText').val(textAreaString); //set new textarea text
});
