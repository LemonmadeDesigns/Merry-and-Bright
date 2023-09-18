// Nav bar
window.addEventListener("scroll", function () {
    let header = document.querySelector(".header-image");
    let nav = document.querySelector("#myNav");
    let subtitle = document.querySelector(".subtitle");
  
    if (window.pageYOffset >= header.clientHeight / 2) {
      nav.classList.add("offset");
      subtitle.style.opacity = "1";
    } else {
      nav.classList.remove("offset");
      subtitle.style.opacity = "0";
    }
  });
  // JavaScript code
  document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scroll-arrow");
  
    // Show the scroll arrow when the page is scrolled
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
        // You can adjust this value
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    });
  });
  //   Scroll arrow
  document.addEventListener("DOMContentLoaded", function () {
    const scrollArrow = document.querySelector(".scroll-arrow");
    const scrollEnd = document.getElementById("scroll-end");
    let animationFrameId;
  
    function scrollToNextSection() {
      const nextSection = getNextSection();
      if (nextSection) {
        const currentScrollPosition = window.scrollY || window.pageYOffset;
        const targetScrollPosition =
          nextSection.getBoundingClientRect().top + currentScrollPosition;
  
        window.scrollTo({
          top: targetScrollPosition,
          behavior: "smooth",
        });
      }
    }
  
    function getNextSection() {
      const sections = document.querySelectorAll(".nextSection");
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0) {
          return section;
        }
      }
      return null;
    }
  
    // Function to scroll to the top
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  
    scrollArrow.addEventListener("click", function (e) {
      e.preventDefault();
  
      if (scrollArrow.classList.contains("flipped")) {
        scrollToTop();
      } else {
        scrollToNextSection();
      }
    });
  
    // Check the scroll position to determine when to flip the arrow
    function checkScrollPosition() {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const flipPosition = (documentHeight - windowHeight) * 0.98;
  
      if (scrollY >= flipPosition) {
        scrollArrow.classList.add("flipped");
        tooltip.style.opacity = 1;
        // Change the tooltip text when flipped
        tooltip.textContent = "Back to Top";
      } else {
          scrollArrow.classList.remove("flipped");
          tooltip.style.opacity = 1;
          // Change the tooltip text back to "More Info" when not flipped
          tooltip.textContent = "Twinkle & Scroll";
      }
    }
  
    checkScrollPosition();
  
    // Listen for scroll events and update the arrow state
    window.addEventListener("scroll", checkScrollPosition);
  });
  
  // Benefits Section
  const benefit = document.getElementsByClassName("benefit");
  const inclusive = document.getElementById("inclusive");
  const grade = document.getElementById("grade");
  const safety = document.getElementById("safety");
  
  for (var i = 0; i < benefit.length; i++) {
    benefit[i].addEventListener("mouseover", (e) => {
      if (e.target.textContent == "> All-inclusive Service") {
        inclusive.style.display = "block";
      }
      if (e.target.textContent == "> High-Grade Lighting") {
        grade.style.display = "block";
      }
      if (e.target.textContent == "> Safety is Priority") {
        safety.style.display = "block";
      }
    });
    benefit[i].addEventListener("mouseleave", (e) => {
      inclusive.style.display = "none";
      grade.style.display = "none";
      safety.style.display = "none";
    });
  }
  
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
  
  // Get Quote
  
  const getQuoteButton = document.querySelector(".getQuote");
  
  getQuoteButton.addEventListener("click", () => {
    // Trigger the Bootstrap modal
    let myModal = new bootstrap.Modal(document.getElementById("quoteModal"));
    myModal.show();
  });
  