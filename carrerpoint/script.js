// script.js

// Add your custom JavaScript code here
// Example: Implement a scroll-to-section functionality for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// JavaScript code to handle form submission and PDF generation
document.querySelector('#personal-info-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  var formData = new FormData(this);

  // Convert form data to JSON
  var jsonData = {};
  formData.forEach(function (value, key) {
    jsonData[key] = value;
  });

  // Send form data to server using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'generate_resume.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.responseType = 'blob';
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var blob = new Blob([xhr.response], { type: 'application/pdf' });

      // Generate a URL for the PDF blob
      var url = window.URL.createObjectURL(blob);

      // Display the PDF in the resume output section
      var resumeOutput = document.querySelector('#resume-output');
      resumeOutput.innerHTML = `<embed src="${url}" width="100%" height="600px" type="application/pdf">`;
    }
  };
  xhr.send(JSON.stringify(jsonData));
});
