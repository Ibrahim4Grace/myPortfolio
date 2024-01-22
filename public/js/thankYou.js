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
  


// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  const enquiryForm = document.getElementById("enquiryForm");
  const thankYouMessage = document.getElementById("thankYouMessage");

  // Add an event listener to the form submission
  enquiryForm.addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      try {
          // Use Fetch API to make an asynchronous request to the server
          const response = await fetch('/contactPost', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  // ... your form data
              }),
          });

          if (response.ok) {
              // Update the URL and display the thank-you message
              window.history.pushState({}, document.title, '/');
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
