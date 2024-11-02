const resumeForm = document.getElementById('form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

resumeForm.addEventListener('submit', (event:Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const dob = (document.getElementById('dob') as HTMLInputElement).value;
    const LinkedInurl = (document.getElementById('LinkedInurl') as HTMLInputElement).value;
    const giturl = (document.getElementById('giturl') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;

    const resume = `
    <h2>Editable Resume</h2>
    <h3>Personal Details</h3>
    <p><strong>Name:</strong> <span contenteditable="true">${name}</span></p>
    <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
    <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
    <p><strong>Date of Birth:</strong> <span contenteditable="true">${dob}</span></p>
    <p><strong>LinkedIn:</strong> <span contenteditable="true">${LinkedInurl}</span></p>
    <p><strong>Giturl:</strong> <span contenteditable="true">${giturl}</span></p>
    <p><strong>Address:</strong> <span contenteditable="true">${address}</span></p>
    <h3>Skills</h3>
    <p><strong>Skills:</strong> <span contenteditable="true">${skills}</span></p>
    <h3>Education</h3>
    <p><strong>Education:</strong> <span contenteditable="true">${education}</span></p>
    `;

if(resumeDisplayElement){

    resumeDisplayElement.innerHTML = resume;
}else{
    console.error('resume-display element not found');
}
});