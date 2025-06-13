document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const navLinks = document.querySelector(".nav-links")

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active")
    })
  }

  // FAQ accordion functionality
  const faqQuestions = document.querySelectorAll(".faq-question")

  if (faqQuestions) {
    faqQuestions.forEach((question) => {
      question.addEventListener("click", function () {
        const answer = this.nextElementSibling
        answer.classList.toggle("active")

        // Update the icon
        const icon = this.querySelector("i")
        if (icon) {
          if (answer.classList.contains("active")) {
            icon.className = "fas fa-chevron-up"
          } else {
            icon.className = "fas fa-chevron-down"
          }
        }
      })
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        })
      }
    })
  })

  // Add animation to elements when they come into view
  const animateElements = document.querySelectorAll(".animate-on-scroll")

  if (animateElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated")
          }
        })
      },
      { threshold: 0.1 },
    )

    animateElements.forEach((element) => {
      observer.observe(element)
    })
  }
})
