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
    // Hide all descriptions
    benefitDescriptions.forEach((description) => {
      description.style.display = "none";
    });

    const targetId = e.target.getAttribute("data-target");
    const targetDescription = document.getElementById(targetId);
    targetDescription.style.display = "block";
  });
});

  

  
  // Steps Section
  
  const steps = document.getElementsByClassName("steps");
  const stepOne = document.getElementById("stepOne");
  const stepTwo = document.getElementById("stepTwo");
  const stepThree = document.getElementById("stepThree");
  
  for (var i = 0; i < steps.length; i++) {
    steps[i].addEventListener("mouseover", (e) => {
      if (e.target.children[1].textContent == 1) {
        stepOne.style.display = "block";
      }
      if (e.target.children[1].textContent == 2) {
        stepTwo.style.display = "block";
      }
      if (e.target.children[1].textContent == 3) {
        stepThree.style.display = "block";
      }
    });
    steps[i].addEventListener("mouseleave", (e) => {
      stepOne.style.display = "none";
      stepTwo.style.display = "none";
      stepThree.style.display = "none";
    });
  }
  
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
  