document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scroll-arrow");
    const tooltip = document.querySelector(".tooltip");

    if (scrollButton) { // Check if scrollButton exists
      // Show the scroll arrow when the page is scrolled
      window.addEventListener("scroll", function () {
        if (window.pageYOffset > 100) {
          // You can adjust this value
          scrollButton.style.display = "block";
        } else {
          scrollButton.style.display = "none";
        }
      });
    } else {
      console.error("Element with id 'scroll-arrow' not found in the DOM.");
    }
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
      
      const tooltip = document.getElementById("tooltip"); // Replace "tooltip" with the actual ID of your tooltip element
    
      if (scrollY >= flipPosition) {
        scrollArrow.classList.add("flipped");
        if (tooltip) {
          tooltip.style.opacity = 1;
          // Change the tooltip text when flipped
          tooltip.textContent = "Back to Top";
        }
      } else {
        scrollArrow.classList.remove("flipped");
        if (tooltip) {
          tooltip.style.opacity = 1;
          // Change the tooltip text back to "More Info" when not flipped
          tooltip.textContent = "Twinkle & Scroll";
        }
      }
    }
    
  
    checkScrollPosition();
  
    // Listen for scroll events and update the arrow state
    window.addEventListener("scroll", checkScrollPosition);
  });
  