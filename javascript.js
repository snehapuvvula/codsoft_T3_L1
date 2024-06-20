// Example 1: Add a click event to a button
document.addEventListener("DOMContentLoaded", () => {
    const contactButton = document.getElementById("contact-button");
  
    if (contactButton) {
      contactButton.addEventListener("click", () => {
        alert("Thank you for contacting me!");
      });
    }
  
    // Example 2: Smooth scrolling to sections
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault(); // Prevent default anchor tag behavior
  
        const sectionId = link.getAttribute("href");
        const section = document.querySelector(sectionId);
  
        section.scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  
    // Example 3: Toggle a menu on smaller screens
    const nav = document.querySelector("nav");
    const menuButton = document.getElementById("menu-button");
  
    if (menuButton) {
      menuButton.addEventListener("click", () => {
        nav.classList.toggle("active"); // Add or remove "active" class
      });
    }
  
    // Example 4: Simple lightbox for project images (requires additional CSS)
    const projectImages = document.querySelectorAll(".project-card img");
  
    projectImages.forEach(image => {
      image.addEventListener("click", () => {
        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        lightbox.innerHTML = `
          <img src="${image.src}" alt="${image.alt}">
          <button class="close-lightbox">Close</button>
        `;
        document.body.appendChild(lightbox);
  
        const closeButton = lightbox.querySelector(".close-lightbox");
        closeButton.addEventListener("click", () => {
          document.body.removeChild(lightbox);
        });
      });
    });
  });
  