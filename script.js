// ---------- 1. MOBILE MENU ----------
// When the Menu button is clicked, we add or remove the "show" class
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// Close the menu after a link is clicked
navLinks.addEventListener("click", function () {
  navLinks.classList.remove("show");
});

// ---------- 2. ROTATING WORD IN THE HERO ----------
const words = ["AI", "Web Development", "Data", "Cyber Security", "CAD"];
const wordSpan = document.getElementById("rotating-word");
let wordIndex = 0;

setInterval(function () {
  wordIndex = (wordIndex + 1) % words.length; // go to next word, loop back to 0 at the end
  wordSpan.textContent = words[wordIndex];
}, 2500);

// ---------- 3. COUNTING NUMBERS ----------
// Each number counts from 0 up to its data-target value
const counters = document.querySelectorAll(".count");

counters.forEach(function (counter) {
  const target = Number(counter.dataset.target);
  let current = 0;
  const step = Math.ceil(target / 50);

  const timer = setInterval(function () {
    current = current + step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    counter.textContent = current;
  }, 30);
});

// ---------- 4. PROGRAM FILTER ----------
// Clicking a filter button shows only the cards with a matching data-category
const filterButtons = document.querySelectorAll(".filter");
const programCards = document.querySelectorAll("#programs .card");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // highlight the clicked button
    filterButtons.forEach(function (b) {
      b.classList.remove("active");
    });
    button.classList.add("active");

    const choice = button.dataset.filter;
    programCards.forEach(function (card) {
      if (choice === "all" || card.dataset.category === choice) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// ---------- 5. TESTIMONIAL SLIDER ----------
// Reviews shown in the slider (edit the text and names here)
const reviews = [
  {
    text: "The weekly mentor reviews made my code much cleaner. I finally had a project to show in interviews.",
    name: "Rohit Kapoor, Web Development",
  },
  {
    text: "I had never used SQL before. By week four I was building dashboards from a real dataset.",
    name: "Siya Bajaj, Data Analytics",
  },
  {
    text: "My mentor explained why my model failed, not just how to fix it. That changed how I study.",
    name: "Jaideep Singh, AI and ML",
  },
];

let reviewIndex = 0;
const reviewText = document.getElementById("review-text");
const reviewName = document.getElementById("review-name");

function showReview() {
  reviewText.textContent = reviews[reviewIndex].text;
  reviewName.textContent = reviews[reviewIndex].name;
}

document.getElementById("next").addEventListener("click", function () {
  reviewIndex = (reviewIndex + 1) % reviews.length;
  showReview();
});

document.getElementById("prev").addEventListener("click", function () {
  reviewIndex = (reviewIndex - 1 + reviews.length) % reviews.length;
  showReview();
});

showReview(); // show the first review when the page loads

// ---------- 6. FAQ ACCORDION ----------
// Clicking a question adds or removes the "open" class on its box
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    question.parentElement.classList.toggle("open");
  });
});

const applicationForm = document.getElementById("applicationForm");

if (applicationForm) {
  applicationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("applicantName").value.trim();
    const email = document.getElementById("applicantEmail").value.trim();
    const program = document.getElementById("program").value;
    const domain = document.getElementById("domain").value;
    const formMessage = document.getElementById("formMessage");

    if (!name || !email || !domain || !program) {
      formMessage.textContent = "Please fill in all fields.";
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      return;
    }

    formMessage.textContent =
      "Thank you, " +
      name +
      "! Your application for " +
      domain.replace("-", " ") +
      " (" +
      program.toUpperCase() +
      ") is complete.";

    applicationForm.reset();
  });
}
