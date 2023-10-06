// Nav bar
window.addEventListener("scroll", function () {
    let header = document.querySelector(".header-image");
    let nav = document.querySelector("#myNav");
    let subtitle = document.querySelector(".subtitle");
    if (window.pageYOffset >= header.clientHeight / 2) {
      nav.classList.add("offset");
      subtitle.style.opacity = 1;
    } else {
      nav.classList.remove("offset");
      subtitle.style.opacity = 0;
    }
  });

    // Function to change the active class based on scroll position
   // Function to change the active class based on scroll position
function setActiveNav() {
  const sections = document.querySelectorAll("section"); // Get all sections in your page
  const navLinks = document.querySelectorAll(".navbar-nav a"); // Get all the navigation links

  // Loop through each section
  sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();

      // Check if the section is in the viewport
      if (rect.top <= 0 && rect.bottom >= 0) {
          // Add the "active" class to the corresponding navigation link
          navLinks.forEach((link) => {
              link.classList.remove("active");
          });
          navLinks[index].classList.add("active");
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

// Add a click event listener to the document body to collapse descriptions when clicking elsewhere
document.body.addEventListener("click", () => {
  benefitDescriptions.forEach((description) => {
    description.style.display = "none";
  });
});

// Steps Section
const stepTexts = document.querySelectorAll(".step-text");
const stepDescriptions = document.querySelectorAll(".step-description");
const stepImages = document.querySelectorAll(".step-image");
const stepIcons = document.querySelectorAll(".step-icons");

let isFirstCardSelected = false;

function collapseAll(indexToKeep = -1) {
    stepTexts.forEach((s, index) => {
        if (index !== indexToKeep) {
            s.classList.remove("active");
        }
    });

    stepDescriptions.forEach((description, index) => {
        if (index !== indexToKeep) {
            description.style.display = "none";
        }
    });

    stepImages.forEach((image, index) => {
        if (index !== indexToKeep) {
            image.style.display = "none";
        }
    });

    stepIcons.forEach((icon, index) => {
        if (index === indexToKeep || indexToKeep === -1) {
            icon.style.display = isFirstCardSelected ? "block" : "none";
        } else {
            icon.style.display = "none";
        }
    });
}

stepTexts.forEach((stepText, index) => {
    stepText.addEventListener("click", (event) => {
        event.stopPropagation();
        isFirstCardSelected = true; // Mark the first card as selected
        collapseAll(index);
        const targetId = stepText.getAttribute("data-target");
        const targetDescription = document.getElementById(targetId);
        const targetImage = stepImages[index];
        const targetIcons = stepIcons[index];

        if (targetDescription) {
            if (targetDescription.style.display === "block") {
                targetDescription.style.display = "none";
                targetImage.style.display = "none";
                targetIcons.style.display = "none";
            } else {
                stepText.classList.add("active");
                targetDescription.style.display = "block";
                targetImage.style.display = "block";
                if (isFirstCardSelected) {
                    targetIcons.style.display = "block";
                }
            }
        }
    });
});







  
  
  // Frequently Asked Questions Section
  
  const questions = document.getElementsByClassName("questions");
  
  for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", (e) => {
      if (e.target.firstChild.textContent == "+") {
        e.target.nextElementSibling.style.display = "block";
        e.target.firstChild.style.backgroundColor = "red";
        e.target.firstChild.innerHTML = "-";
      } else {
        e.target.nextElementSibling.style.display = "none";
        e.target.firstChild.style.backgroundColor = "indigo";
        e.target.firstChild.innerHTML = "+";
      }
    });
  }
  
  // Get Quote
  
  const getQuoteButton = document.querySelector(".getQuote");
  
  getQuoteButton.addEventListener("click", () => {
    // Trigger the Bootstrap modal
    let myModal = new bootstrap.Modal(document.getElementById("quoteModal"));
    myModal.show();
  });
  