// script.js

const introTexts = [
  "Hi, I'm Harsha!",
  "Welcome to my creative space.",
  "Click here to know more about me"
];

function typeIntroText() {
  const element = document.getElementById('intro-text');
  let lineIndex = 0;
  let charIndex = 0;

  function type() {
    if (lineIndex < introTexts.length - 1) {
      if (charIndex < introTexts[lineIndex].length) {
        element.innerHTML += introTexts[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust typing speed here
      } else {
        // Move to the next line
        lineIndex++;
        charIndex = 0;
        element.innerHTML += '<br>'; // Add line break
        setTimeout(type, 500); // Delay before typing the next line
      }
    } else {
      // Display the last part without typing effect with modified styling
      element.innerHTML += '<br><br> <a href="about.html" style="font-size: 15px; text-decoration: none; color: white;">Click here to know more about me</a>';
    }
  }

  type();
}

// Function to handle the click event for "Click here to know more about me"
function showMore() {
  // You can add additional logic here if needed
  window.location.href = "about.html"; // Redirect to about.html
}

typeIntroText(); // Call the function to start typing the intro text


// JavaScript code for scrolling to the skills section
document.addEventListener('DOMContentLoaded', function () {
  // Select the Skills link in the navbar
  var skillsLink = document.querySelector('a[href="#skills"]');
  // Select the skills section
  var skillsSection = document.getElementById('skills');

  // Add a click event listener to the Skills link
  skillsLink.addEventListener('click', function (event) {
    // Prevent the default behavior of the link
    event.preventDefault();
    // Scroll to the skills section smoothly
    skillsSection.scrollIntoView({ behavior: 'smooth' });
  });
});

