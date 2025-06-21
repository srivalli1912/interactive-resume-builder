function generateResume() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const linkedin = document.getElementById("linkedin").value;
    const summary = document.getElementById("summary").value;
  
    const degree = document.getElementById("degree").value;
    const institution = document.getElementById("institution").value;
    const gradYear = document.getElementById("gradYear").value;
  
    const company = document.getElementById("company").value;
    const role = document.getElementById("role").value;
    const duration = document.getElementById("duration").value;
    const expDesc = document.getElementById("expDesc").value;
  
    const projects = document.getElementById("projects").value.split(",");
    const skills = document.getElementById("skills").value.split(",");
    const certifications = document.getElementById("certifications").value.split(",");
  
    let resumeHTML = `
      <h1 style="text-align:center;">${fullName}</h1>
      <p style="text-align:center;">
        <b>Email:</b> ${email} &nbsp; | &nbsp; <b>Phone:</b> ${phone} &nbsp; | &nbsp; <b>LinkedIn:</b> ${linkedin}
      </p>
  
      <h2><b>Career Summary</b></h2>
      <p>${summary}</p>
  
      <h2><b>Education</b></h2>
      <p><b>Degree:</b> ${degree}</p>
      <p><b>Institution:</b> ${institution}</p>
      <p><b>Graduation Year:</b> ${gradYear}</p>
  
      <h2><b>Experience</b></h2>
      <p><b>Company:</b> ${company}</p>
      <p><b>Role:</b> ${role}</p>
      <p><b>Duration:</b> ${duration}</p>
      <p>${expDesc}</p>
  
      <h2><b>Projects</b></h2>
      <ul>
        ${projects.map(proj => `<li>${proj.trim()}</li>`).join("")}
      </ul>
  
      <h2><b>Skills</b></h2>
      <ul>
        ${skills.map(skill => `<li>${skill.trim()}</li>`).join("")}
      </ul>
  
      <h2><b>Certifications</b></h2>
      <ul>
        ${certifications.map(cert => `<li>${cert.trim()}</li>`).join("")}
      </ul>
    `;
  
    document.getElementById("resume-output").innerHTML = resumeHTML;
  
    const template = document.getElementById("template").value;
    document.getElementById("resume-output").className = template + "-template";
    document.getElementById("resume-section").style.display = "block";
  }
  
