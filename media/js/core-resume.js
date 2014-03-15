$(function () {

    if (unescape(GetUrlValue('name')) != "undefined") {
        $('#resumeName').text(unescape(GetUrlValue('name')));
    }
    if (unescape(GetUrlValue('education')) != "undefined") {
        $('#resumeEducation').text(unescape(GetUrlValue('education')));
    }
    if (unescape(GetUrlValue('experience')) != "undefined")
        $('#resumeExperience').text(unescape(GetUrlValue('experience')));

});

function GetUrlValue(VarSearch) {
    var SearchString = window.location.search.substring(1);
    var VariableArray = SearchString.split('&');
    for (var i = 0; i < VariableArray.length; i++) {
        var KeyValuePair = VariableArray[i].split('=');
        if (KeyValuePair[0] == VarSearch) {

            return KeyValuePair[1];
        }
    }
}