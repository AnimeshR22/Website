document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".full-screen-container");
    let currentSectionIndex = 0;
    let isScrolling = false;
  
    document.addEventListener("wheel", function (event) {
      if (isScrolling) return;
      isScrolling = true;
  
      if (event.deltaY > 0) {
        // Scrolling down
        if (currentSectionIndex < sections.length - 1) {
          currentSectionIndex++;
        }
      } else {
        // Scrolling up
        if (currentSectionIndex > 0) {
          currentSectionIndex--;
        }
      }
  
      sections.forEach((section, index) => {
        if (index === currentSectionIndex) {
          section.style.transform = "translateY(0)";
        }
  