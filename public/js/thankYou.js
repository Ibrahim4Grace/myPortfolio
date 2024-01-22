//  'use strict';
// // Wait for the page to load
// document.addEventListener("DOMContentLoaded", function () {
//     const enquiryForm = document.getElementById("enquiryForm");
//     const thankYouMessage = document.getElementById("thankYouMessage");
  
//     // Add an event listener to the form submission
//     enquiryForm.addEventListener("submit", function (event) {
      
//       // Optional: Hide the form after submission
//       enquiryForm.style.display = "none";
  
//       // Show the "thank you" message
//       thankYouMessage.style.display = "block";
  
//       // Clear the form fields
//       enquiryForm.reset();
//     });
//   });
  

document.addEventListener("DOMContentLoaded", function () {
  const enquiryForm = document.getElementById("enquiryForm");
  const thankYouMessage = document.getElementById("thankYouMessage");

  enquiryForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      try {
          const response = await fetch('/contactPost', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  name: document.getElementById('name').value,
                  email: document.getElementById('email').value,
                  subject: document.getElementById('subject').value,
                  message: document.getElementById('message').value,
              }),
          });

          if (response.ok) {
              const responseData = await response.json();
              enquiryForm.style.display = "none";
              thankYouMessage.style.display = "block";
              enquiryForm.reset();
          } else {
              console.error('Error:', response.statusText);
              // Handle error cases, e.g., display an error message to the user
          }
      } catch (error) {
          console.error('Error:', error);
          // Handle unexpected errors
      }
  });
});
