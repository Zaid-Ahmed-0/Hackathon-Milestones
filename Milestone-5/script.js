var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('Shareable-link-container');
var shareableLinkElement = document.getElementById('Shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
if (form && resumeDisplayElement) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var Username = document.getElementById('Username').value;
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        // Debugging: Log form values
        console.log("Form Submitted with values:", { Username: Username, name: name, email: email, phone: phone, education: education, experience: experience, skills: skills });
        var resumeData = {
            name: name,
            email: email,
            phone: phone,
            education: education,
            experience: experience,
            skills: skills
        };
        // Store resume data in localStorage
        localStorage.setItem(Username, JSON.stringify(resumeData));
        var resumeHTML = "\n            <h2><b>Editable Resume</b></h2>\n            <h3>Personal Information</h3>\n            <p><b>Username:</b><span contenteditable=\"true\">".concat(Username, "</span></p>\n            <p><b>Name:</b><span contenteditable=\"true\">").concat(name, "</span></p>\n            <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n            <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n\n            <h3>Experience</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(skills, "</p>\n        ");
        // Debugging: Log the generated HTML
        console.log("Generated Resume HTML:", resumeHTML);
        resumeDisplayElement.innerHTML = resumeHTML;
        var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(Username));
        // Show shareable link and link it to the resume
        shareableLinkContainer.style.display = 'block';
        shareableLinkElement.href = shareableURL;
        shareableLinkElement.textContent = shareableURL;
    });
    // Handle PDF download (just triggers print for now)
    downloadPdfButton.addEventListener('click', function () {
        window.print();
    });
}
// Handle pre-populating form on page load when a username is in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            // Pre-populate form fields with saved resume data
            document.getElementById('Username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
