const body = document.querySelector("body");

// language in big scree
const contactIconItem = document.getElementById("contact-icon-item");
const downIcon = document.getElementById("down-icon");
const languageContainer = document.getElementById("language-container");
let downIconActive = false;

contactIconItem.addEventListener("click", () => {
  if (downIconActive) {
    downIcon.classList.remove("active");
    languageContainer.classList.remove("active");
    downIconActive = false;
  } else {
    downIcon.classList.add("active");
    languageContainer.classList.add("active");
    downIconActive = true;
  }
});

// mobile navbar
const menuButton = document.getElementById("menu-button");
const sidebarContainer = document.getElementById("sidebar-container");
let menuOpen = false;

menuButton.addEventListener("click", () => {
  if (menuOpen) {
    menuButton.classList.remove("open");
    sidebarContainer.classList.remove("open-sidebar");
    body.classList.remove("disabled-scroll");
    menuOpen = false;
  } else {
    menuButton.classList.add("open");
    sidebarContainer.classList.add("open-sidebar");
    body.classList.add("disabled-scroll");
    menuOpen = true;
  }
});

sidebarContainer.addEventListener("click", () => {
  menuButton.classList.remove("open");
  sidebarContainer.classList.remove("open-sidebar");
  body.classList.remove("disabled-scroll");
  menuOpen = false;
});

// Section One Slider
var sectionOneSlideIndex = 0;
showSectionOneSlides(sectionOneSlideIndex);

function sectionOneCurrentSlide(n) {
  showSectionOneSlides((sectionOneSlideIndex = n));
}

function showSectionOneSlides(n) {
  var sectionOneSlides = document.getElementsByClassName(
    "section-one-slide-content"
  );
  var sectionOneRects = document.getElementsByClassName("section-one-rect");

  for (let i = 0; i < sectionOneSlides.length; i++) {
    sectionOneSlides[i].style.display = "none";
  }
  sectionOneSlideIndex++;
  if (sectionOneSlideIndex > sectionOneSlides.length) {
    sectionOneSlideIndex = 1;
  }
  for (let i = 0; i < sectionOneRects.length; i++) {
    sectionOneRects[i].classList.remove("active");
  }

  sectionOneSlides[sectionOneSlideIndex - 1].style.display = "flex";
  sectionOneRects[sectionOneSlideIndex - 1].classList.add("active");
  setTimeout(showSectionOneSlides, 5000);
}

// Section Three Slider
var sectionThreeSlideIndex = 0;
showSectionThreeSlides(sectionThreeSlideIndex);

function sectionThreeCurrentSlide(n) {
  showSectionThreeSlides((sectionThreeSlideIndex = n));
}

window.addEventListener("resize", () =>
  showSectionThreeSlides(sectionThreeSlideIndex)
);

function showSectionThreeSlides(n) {
  var sectionThreeSlider = document.getElementsByClassName(
    "section-three-slides-container"
  );
  var sectionThreeSlides = document.getElementsByClassName(
    "section-three-slide-container"
  );
  var sectionThreeRects = document.getElementsByClassName("section-three-rect");

  if (innerWidth < 768) {
    sectionThreeRects[2].style.display = "inline-block";
    sectionThreeRects[3].style.display = "inline-block";
    if (n === 0) {
      for (let i = 0; i < sectionThreeSlides.length; i++) {
        sectionThreeSlides[i].style.display = "none";
      }
      for (let i = 0; i < sectionThreeRects.length; i++) {
        sectionThreeRects[i].classList.remove("active");
      }

      sectionThreeSlides[0].style.display = "flex";
      sectionThreeRects[0].classList.add("active");
    }
    if (n === 1) {
      for (let i = 0; i < sectionThreeSlides.length; i++) {
        sectionThreeSlides[i].style.display = "none";
      }
      for (let i = 0; i < sectionThreeRects.length; i++) {
        sectionThreeRects[i].classList.remove("active");
      }

      sectionThreeSlides[1].style.display = "flex";
      sectionThreeRects[1].classList.add("active");
    }
    if (n === 2) {
      for (let i = 0; i < sectionThreeSlides.length; i++) {
        sectionThreeSlides[i].style.display = "none";
      }
      for (let i = 0; i < sectionThreeRects.length; i++) {
        sectionThreeRects[i].classList.remove("active");
      }

      sectionThreeSlides[2].style.display = "flex";
      sectionThreeRects[2].classList.add("active");
    }
    if (n === 3) {
      for (let i = 0; i < sectionThreeSlides.length; i++) {
        sectionThreeSlides[i].style.display = "none";
      }
      for (let i = 0; i < sectionThreeRects.length; i++) {
        sectionThreeRects[i].classList.remove("active");
      }

      sectionThreeSlides[3].style.display = "flex";
      sectionThreeRects[3].classList.add("active");
    }
  } else if (innerWidth < 1300) {
    sectionThreeRects[2].style.display = "none";
    sectionThreeRects[3].style.display = "none";

    if (n === 0) {
      sectionThreeSlides[0].style.display = "flex";
      sectionThreeSlides[1].style.display = "flex";
      sectionThreeRects[0].classList.add("active");

      sectionThreeSlides[2].style.display = "none";
      sectionThreeSlides[3].style.display = "none";
      sectionThreeRects[1].classList.remove("active");
    }

    if (n === 1) {
      sectionThreeSlides[2].style.display = "flex";
      sectionThreeSlides[3].style.display = "flex";
      sectionThreeRects[1].classList.add("active");

      sectionThreeSlides[0].style.display = "none";
      sectionThreeSlides[1].style.display = "none";
      sectionThreeRects[0].classList.remove("active");
    }
  } else {
    sectionThreeRects[2].style.display = "none";
    sectionThreeRects[3].style.display = "none";

    for (let i = 0; i < sectionThreeSlides.length; i++) {
      sectionThreeSlides[i].style.display = "flex";
    }

    if (n === 0) {
      sectionThreeSlides[3].style.display = "none";
      sectionThreeRects[0].classList.add("active");
      sectionThreeSlider[0].classList.add("section-three-right-scroll-slider");
      sectionThreeSlider[0].classList.remove(
        "section-three-left-scroll-slider"
      );

      sectionThreeRects[1].classList.remove("active");
    }

    if (n === 1) {
      sectionThreeSlides[0].style.display = "none";
      sectionThreeRects[1].classList.add("active");
      sectionThreeSlider[0].classList.add("section-three-left-scroll-slider");
      sectionThreeSlider[0].classList.remove(
        "section-three-right-scroll-slider"
      );

      sectionThreeRects[0].classList.remove("active");
    }
  }
}
