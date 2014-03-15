$(function () {
    $(".chosen-select").chosen();
    $('.chosen-container').css("width", "100%");

    $('body').on('submit', "#jobForm", function (e) {


        e.preventDefault();

        if ($('#selectEducation').val() == " " && $('#selectExperience').val() == " ") {
            Messenger().post({
                message: "Select Education Details",
                hideAfter: 1

            });
            Messenger().post({
                message: "Select Experience Details",
                hideAfter: 1

            });

        } else if ($('#selectEducation').val() == " ") {
            Messenger().post({
                message: "Select Education Details",
                hideAfter: 1

            });
        } else if ($('#selectExperience').val() == " ") {
            Messenger().post({
                message: "Select Experience Details",
                hideAfter: 1

            });
        } else {
            showResume();
            Messenger().post("Your form is successfully submitted");
        }

    });

});


function showResume() {
    $('#inputNameText').text($('#inputName').val());
    $('#inputEducationText').text($('#selectEducation').val());
    $('#inputExperienceText').text($('#selectExperience').val());
    showResumeOnOthertab($('#inputName').val(), $('#selectEducation').val(), $('#selectExperience').val());
}

function showResumeOnOthertab(name, education, experience) {
    var url = 'resume.html?name=' + name + '&education=' + education + '&experience=' + experience;

    window.open(url, '_blank');
}