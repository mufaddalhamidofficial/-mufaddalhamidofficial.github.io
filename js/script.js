// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Fetch data from data.json
  fetch('../data.json')
    .then((response) => response.json())
    .then((data) => {
      // Update HTML elements with resume data
      document.getElementById('name').textContent = data.name;
      document.getElementById('title').textContent = data.title;
      document.getElementById('address').textContent = data.contact.address;
      document.getElementById('phone').textContent = data.contact.phone;
      document.getElementById('email').textContent = data.contact.email;
      document.getElementById('website').textContent = data.contact.website;
      document.getElementById('summary').textContent = data.summary;

      // Display education
      const educationList = document.getElementById('education-list');
      data.education.forEach((edu) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${edu.institution}</strong><br>${edu.degree}, ${edu.graduationDate}`;
        educationList.appendChild(listItem);
      });

      // Display experience
      const experienceList = document.getElementById('experience-list');
      data.experience.forEach((exp) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${exp.position}</strong><br>${exp.company}, ${exp.startDate} - ${exp.endDate}<br>${exp.description}`;
        experienceList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
});
