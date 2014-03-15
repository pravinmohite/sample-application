$(function()
{
 $(".chosen-select").chosen();
 $('.chosen-container').css("width","100%");
 
 $('body').on('submit', "#jobForm", function (e) 
   {
            
            e.preventDefault();
             	showResume();
				
		   Messenger().post("Your form is successfully submitted");
	       clearScreen();

    });
 
 $('#inputCancel'). click(function()
 {
   $('#inputName').val("");
 });
 
});
 


function clearScreen()
{
  $('#inputName').val("");

}

function showResume()
{
    $('#inputNameText').text($('#inputName').val());
	$('#inputEducationText').text($('#selectEducation').val());
	$('#inputExperienceText').text($('#selectExperience').val());
	showResumeOnOthertab($('#inputName').val(),$('#selectEducation').val(),$('#selectExperience').val());
}

function showResumeOnOthertab(name,education,experience)
{
    var url='resume.html?name='+name+'&education='+education+'&experience='+experience;
        //   window.open('http://localhost:8080/omnipolis/imagescreenshot.html?clientName='+reports[1],'_blank');
        	window.open(url,'_blank');
}