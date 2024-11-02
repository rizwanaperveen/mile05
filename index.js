var resumeForm = document.getElementById('form');
var resumeDisplayElement = document.getElementById('resume-display');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var dob = document.getElementById('dob').value;
    var LinkedInurl = document.getElementById('LinkedInurl').value;
    var giturl = document.getElementById('giturl').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    var education = document.getElementById('education').value;
    var resume = "\n    <h2>Editable Resume</h2>\n    <h3>Personal Details</h3>\n    <p><strong>Name:</strong> <span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n    <p><strong>Date of Birth:</strong> <span contenteditable=\"true\">").concat(dob, "</span></p>\n    <p><strong>LinkedIn:</strong> <span contenteditable=\"true\">").concat(LinkedInurl, "</span></p>\n    <p><strong>Giturl:</strong> <span contenteditable=\"true\">").concat(giturl, "</span></p>\n    <p><strong>Address:</strong> <span contenteditable=\"true\">").concat(address, "</span></p>\n    <h3>Skills</h3>\n    <p><strong>Skills:</strong> <span contenteditable=\"true\">").concat(skills, "</span></p>\n    <h3>Education</h3>\n    <p><strong>Education:</strong> <span contenteditable=\"true\">").concat(education, "</span></p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resume;
    }
    else {
        console.error('resume-display element not found');
    }
});
