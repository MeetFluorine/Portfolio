'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}


// to prevent the inspect

document.addEventListener('contextmenu', 
     event => event.preventDefault()
);


document.addEventListener("keydown", function (event){
    if (event.ctrlKey){
       event.preventDefault();
    }
    if(event.keyCode == 123){
       event.preventDefault();
    }
});


// ---- Load more projects ----
const loadMoreBtn = document.querySelector(".load-more");

if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", function () {

    const moreProjectsHTML = `
      <li>
        <a href="https://meetfluorine.github.io/AvengerGallery.github.io/" class="project-card">
          <figure class="card-banner">
            <img src="./assets/images/avenger.png" class="w-100" alt="A Cassette tape on a mellow apricot background.">
          </figure>
          <div class="card-content">
            <h3 class="h4 card-title">Avenger-Gallery</h3>
            <time class="publish-date" datetime="2022-04"><ion-icon name="link-outline"></ion-icon></time>
          </div>
        </a>
      </li>

      <li>
        <a href="https://meetfluorine.github.io/LandingPage/" class="project-card">
          <figure class="card-banner">
            <img src="./assets/images/landingPg.png" class="w-100" alt="Blue digital watch on a dark liver background.">
          </figure>
          <div class="card-content">
            <h3 class="h4 card-title">landing Page</h3>
            <time class="publish-date" datetime="2022-04"><ion-icon name="link-outline"></ion-icon></time>
          </div>
        </a>
      </li>

      <li>
        <a href="https://meetfluorine.github.io/myportfolio/" class="project-card">
          <figure class="card-banner">
            <img src="./assets/images/portfolio.png" class="w-100" alt="On a dark liver background, Airport luggage car carrying a luggage.">
          </figure>
          <div class="card-content">
            <h3 class="h4 card-title">Portfolio Website</h3>
            <time class="publish-date" datetime="2022-04"><ion-icon name="link-outline"></ion-icon></time>
          </div>
        </a>
      </li>

      <li>
        <a href="https://meetfluorine.github.io/ParallexWebsite.github.io/" class="project-card">
          <figure class="card-banner">
            <img src="./assets/images/parallex.png" class="w-100" alt="On a yellow background, a digital watch and a glass.">
          </figure>
          <div class="card-content">
            <h3 class="h4 card-title">Parallex Website</h3>
            <time class="publish-date" datetime="2022-04"><ion-icon name="link-outline"></ion-icon></time>
          </div>
        </a>
      </li>

      <li>
        <a href="https://meetfluorine.github.io/WordCounter/" class="project-card">
          <figure class="card-banner">
            <img src="./assets/images/wordcounter.png" class="w-100" alt="A fujifilm instant camera on a dark electric blue background.">
          </figure>
          <div class="card-content">
            <h3 class="h4 card-title">Word Counter</h3>
            <time class="publish-date" datetime="2022-04"><ion-icon name="link-outline"></ion-icon></time>
          </div>
        </a>
      </li>
    `;

    // Get the <li> that wraps the button, and the <ul> it lives in
    const btnListItem = loadMoreBtn.closest("li");
    const projectList = btnListItem.parentElement;

    // Insert the new cards right before the "Load more" <li>
    btnListItem.insertAdjacentHTML("beforebegin", moreProjectsHTML);

    // Remove the button (or swap to a "no more projects" message instead)
    btnListItem.remove();
  });
}