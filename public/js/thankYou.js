 'use strict';
// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
    const enquiryForm = document.getElementById("enquiryForm");
    const thankYouMessage = document.getElementById("thankYouMessage");
  
    // Add an event listener to the form submission
    enquiryForm.addEventListener("submit", function (event) {
      
      // Optional: Hide the form after submission
      enquiryForm.style.display = "none";
  
      // Show the "thank you" message
      thankYouMessage.style.display = "block";
  
      // Clear the form fields
      enquiryForm.reset();
    });
  });
  