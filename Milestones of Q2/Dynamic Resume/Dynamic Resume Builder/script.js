// Get refrences to the distance area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Generate the resume content dynamicaly
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</P>\n     <p><b>Email:</b>").concat(email, "</P>\n      <p><b>Phone:</b>").concat(phone, "</P>\n      \n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n\n       <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n\n       <h3>Skills</h3>\n      <p>").concat(skills, "</p>\n      ");
    // Display Generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
