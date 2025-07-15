// Initialize AOS (Animate On Scroll)
AOS.init();

// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // === Contact Form Submission Handling ===
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const modalEl = document.getElementById("thankYouModal");
      if (modalEl) {
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
      }

      this.reset();
    });
  }


  // === "See More" Toggle for Extra Projects ===
  const seeMoreBtn = document.getElementById("seeMoreBtn");
  const extraProjects = document.querySelector(".extra-projects");

  if (seeMoreBtn && extraProjects) {
    seeMoreBtn.addEventListener("click", function (e) {
      e.preventDefault();

      extraProjects.classList.toggle("d-none");

      // Toggle button text
      if (extraProjects.classList.contains("d-none")) {
        this.textContent = "See More";
      } else {
        this.textContent = "See Less";
      }
    });
  }

  // === Highlight Nav Link on Scroll ===
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});

// === About Section Tabs ===
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function openTab(evt, tabName) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  evt.currentTarget.classList.add("active-link");
  const targetTab = document.getElementById(tabName);
  if (targetTab) {
    targetTab.classList.add("active-tab");
  }
}
