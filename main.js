// Nav bar
window.addEventListener("scroll", function () {
  let header = document.querySelector(".header-image");
  let nav = document.querySelector("#myNav");
  let subtitle = document.querySelector(".subtitle");
  if (header && nav && subtitle) { // Check if elements exist
      if (window.pageYOffset >= header.clientHeight / 2) {
          nav.classList.add("offset");
          subtitle.style.opacity = 1;
      } else {
          nav.classList.remove("offset");
          subtitle.style.opacity = 0;
      }
  }
});
// Function to change the active class based on scroll position
function setActiveNav() {
  const sections = document.querySelectorAll("section"); // Get all sections in your page
  const navLinks = document.querySelectorAll(".navbar-nav a"); // Get all the navigation links

  // Loop through each section
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();

    // Check if the section is in the viewport
    if (rect && rect.top <= 0 && rect.bottom >= 0) {
      // Add the "active" class to the corresponding navigation link
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      if (navLinks[index]) {
        navLinks[index].classList.add("active");
      }
    }
  });
}

// Add a scroll event listener to call the setActiveNav function when scrolling
window.addEventListener("scroll", setActiveNav);

// Call setActiveNav initially to set the active class on page load
setActiveNav();


// Add a scroll event listener to call the setActiveNav function when scrolling
window.addEventListener("scroll", setActiveNav);

// Call setActiveNav initially to set the active class on page load
setActiveNav();


    // Add a scroll event listener to call the setActiveNav function when scrolling
    window.addEventListener("scroll", setActiveNav);

    // Call setActiveNav initially to set the active class on page load
    setActiveNav();


// Benefits Section
const benefitsButtons = document.querySelectorAll(".benefit");
const benefitDescriptions = document.querySelectorAll(".benefit-description");

benefitsButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const targetId = e.target.getAttribute("data-target");
    const targetDescription = document.getElementById(targetId);

    // Check if the description is currently visible
    const isDescriptionVisible = targetDescription.style.display === "block";

    // Hide all descriptions
    benefitDescriptions.forEach((description) => {
      description.style.display = "none";
    });

    // Toggle the display of the clicked description
    if (!isDescriptionVisible) {
      targetDescription.style.display = "block";
    }
    
    // Prevent the click event from propagating to the document body
    e.stopPropagation();
  });
});

// Steps Section
const stepTexts = document.querySelectorAll(".step-text");
const stepDescriptions = document.querySelectorAll(".step-description");
const stepImages = document.querySelectorAll(".step-image");
const stepIcons = document.querySelectorAll(".step-icons");

let isFirstCardSelected = false;
let selectedIndex = -1; // Initialize with an invalid index

function toggleStep(index) {
  stepTexts.forEach((stepText, i) => {
    const targetDescription = stepDescriptions[i];
    const targetImage = stepImages[i];
    const targetIcons = stepIcons[i];

    if (i === index) {
      stepText.classList.toggle("active");
      targetDescription.style.display = targetDescription.style.display === "block" ? "none" : "block";
      targetImage.style.display = targetImage.style.display === "block" ? "none" : "block";
      
      if (targetIcons) {
        targetIcons.style.display = isFirstCardSelected && selectedIndex === index ? "block" : "none";
      }
      
      selectedIndex = index; // Update the selected index
    } else {
      stepText.classList.remove("active");
      targetDescription.style.display = "none";
      targetImage.style.display = "none";
      if (targetIcons) {
        targetIcons.style.display = "none";
      }
    }
  });
}

stepTexts.forEach((stepText, index) => {
  stepText.addEventListener("click", (event) => {
    event.stopPropagation();
    isFirstCardSelected = true; // Mark the first card as selected
    if (selectedIndex === index) {
      selectedIndex = -1; // Clicking the same step again collapses it
    }
    toggleStep(index);
  });
});

// Add an event listener to the document body to collapse all when clicking elsewhere
document.body.addEventListener("click", () => {
  if (isFirstCardSelected) {
    isFirstCardSelected = false;
    selectedIndex = -1; // Reset the selected index when clicking elsewhere
    toggleStep(-1); // Collapse all steps when clicking elsewhere
  }
});

const faqContainer = document.getElementById("faq-container");

faqContainer.addEventListener("click", (e) => {
    const plusButton = e.target.closest(".plus");
    const card = e.target.closest(".card");
    const answer = card.querySelector(".answer");

    if (plusButton) {
        // Check if the card is currently open
        const isOpen = card.classList.contains("open");

        // Close all answers before opening the clicked one
        closeAllAnswers();

        // Toggle the answer when the plus/minus button is clicked
        if (!isOpen) {
            answer.style.display = "block";
            plusButton.textContent = "-";
            card.classList.add("open");
        } else {
            answer.style.display = "none";
            plusButton.textContent = "+";
            card.classList.remove("open");
        }
    }
});

function closeAllAnswers() {
    const allCards = faqContainer.querySelectorAll(".card.open");
    allCards.forEach((card) => {
        const answer = card.querySelector(".answer");
        const plusButton = card.querySelector(".plus");
        answer.style.display = "none";
        plusButton.textContent = "+";
        card.classList.remove("open");
    });
}
// Define an array of FAQ items with questions and answers
const faqItems = [
  {
      question: "After The Holidays, Do You Remove The Lights?",
      answer: "Yes! When you choose Merry and Bright to light up your home for the holidays in southeast Michigan, you'll receive everything! The lights are removed when the holidays are over, just as they were put up. Our staff is trained to remove lights without causing damage to your house, just like with installation!",
  },
  {
      question: "If A Light Bulb Goes Out, Is This Under Warranty?",
      answer: "Yes! When you choose Merry and Bright to light up your home for the holidays in southeast Michigan, you'll receive everything! The lights are removed when the holidays are over, just as they were put up. Our staff is trained to remove lights without causing damage to your house, just like with installation!",
  },
  {
      question: "What Types Of Decorations Do You Offer?",
      answer: "Yes! When you choose Merry and Bright to light up your home for the holidays in southeast Michigan, you'll receive everything! The lights are removed when the holidays are over, just as they were put up. Our staff is trained to remove lights without causing damage to your house, just like with installation!",
  },
  {
      question: "Will We Need To Hire An Electrician?",
      answer: "Yes! When you choose Merry and Bright to light up your home for the holidays in southeast Michigan, you'll receive everything! The lights are removed when the holidays are over, just as they were put up. Our staff is trained to remove lights without causing damage to your house, just like with installation!",
  },
];

// Loop through the FAQ items and create cards dynamically
faqItems.forEach((item, index) => {
    // Create unique IDs for questions and answers
    const questionId = `question-${index}`;
    const answerId = `answer-${index}`;

    // Create a new card element
    const card = document.createElement("div");
    card.className = "col-md-6 mb-4";
    card.innerHTML = `
        <div class="card mb-3">
            <div class="card-body">
                <h5 id="${questionId}" class="card-title questions"><span class="plus">+</span>${item.question}</h5>
                <p id="${answerId}" class="card-text answer" style="display: none;">${item.answer}</p>
            </div>
        </div>
    `;

    // Append the card to the FAQ container
    faqContainer.appendChild(card);
});

// Add an event listener to the document body to close FAQ items when clicking outside
document.body.addEventListener("click", (e) => {
    if (!faqContainer.contains(e.target)) {
        closeAllAnswers();
    }
});
  
  // Get Quote
  
  const getQuoteButton = document.querySelector(".getQuote");
  
  getQuoteButton.addEventListener("click", () => {
    // Trigger the Bootstrap modal
    let myModal = new bootstrap.Modal(document.getElementById("quoteModal"));
    myModal.show();
  });


// Footer function

  // Function to handle the click on phone icon
  function openPhoneLink() {
    window.location.href = "tel:(810)836-8329";
  }

  // Function to handle the click on map marker icon
  function openLocationLink() {
    window.location.href = "https://www.google.com/maps?q=Lake+Orion,MI+48362";
  }

  // Function to handle the click on email icon
  function openEmailLink() {
    window.location.href = "mailto:info@merryandbright.com";
  }

  // Add event listeners to the icons
  document.querySelector('.fa-phone').addEventListener('click', openPhoneLink);
  document.querySelector('.fa-map-marker').addEventListener('click', openLocationLink);
  document.querySelector('.fa-envelope').addEventListener('click', openEmailLink);
 // Get references to the Font Awesome icons
 const facebookIcon = document.getElementById('facebook-icon');
 const instagramIcon = document.getElementById('instagram-icon');

 // Add click event listeners to the icons
 facebookIcon.addEventListener('click', () => {
   window.location.href = 'https://www.facebook.com/your-facebook-page'; // Replace with your Facebook URL
 });

 instagramIcon.addEventListener('click', () => {
   window.location.href = 'https://www.instagram.com/your-instagram-page'; // Replace with your Instagram URL
 });
