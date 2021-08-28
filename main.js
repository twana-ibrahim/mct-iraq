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
var t;
var sectionOneSlideIndex = 0;
showSectionOneSlidesAuto();

function sectionOneCurrentSlide(n) {
  showSectionOneSlidesManual((sectionOneSlideIndex = n));
  clearTimeout(t);
}

// Section One Slider Auto
function showSectionOneSlidesAuto() {
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
  t = setTimeout(showSectionOneSlidesAuto, 5000);
}

// Section One Slider Manuall
function showSectionOneSlidesManual(n) {
  var sectionOneSlides = document.getElementsByClassName(
    "section-one-slide-content"
  );
  var sectionOneRects = document.getElementsByClassName("section-one-rect");

  for (let i = 0; i < sectionOneSlides.length; i++) {
    sectionOneSlides[i].style.display = "none";
  }

  for (let i = 0; i < sectionOneRects.length; i++) {
    sectionOneRects[i].classList.remove("active");
  }

  if (n === 0) {
    sectionOneSlides[0].style.display = "flex";
    sectionOneRects[0].classList.add("active");
  } else if (n === 1) {
    sectionOneSlides[1].style.display = "flex";
    sectionOneRects[1].classList.add("active");
  } else if (n === 2) {
    sectionOneSlides[2].style.display = "flex";
    sectionOneRects[2].classList.add("active");
  } else if (n === 3) {
    sectionOneSlides[3].style.display = "flex";
    sectionOneRects[3].classList.add("active");
  } else if (n === 4) {
    sectionOneSlides[4].style.display = "flex";
    sectionOneRects[4].classList.add("active");
  }
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

      sectionThreeSlides[0].classList.add("section-three-right-to-left-slide");

      sectionThreeSlides[1].classList.remove(
        "section-three-right-to-left-slide"
      );
      sectionThreeSlides[2].classList.remove(
        "section-three-right-to-left-slide"
      );
      sectionThreeSlides[3].classList.remove(
        "section-three-right-to-left-slide"
      );
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

      sectionThreeSlides[1].classList.add("section-three-right-to-left-slide");

      sectionThreeSlides[0].classList.remove(
        "section-three-right-to-left-slide"
      );
      sectionThreeSlides[2].classList.remove(
        "section-three-right-to-left-slide"
      );
      sectionThreeSlides[3].classList.remove(
        "section-three-right-to-left-slide"
      );
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

      sectionThreeSlides[2].classList.add("section-three-right-to-left-slide");

      sectionThreeSlides[0].classList.remove(
        "section-three-right-to-left-slide"
      );
      sectionThreeSlides[1].classList.remove(
        "section-three-right-to-left-slide"
      );
      sectionThreeSlides[3].classList.remove(
        "section-three-right-to-left-slide"
      );
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

      sectionThreeSlides[3].classList.add("section-three-right-to-left-slide");

      sectionThreeSlides[0].classList.remove(
        "section-three-right-to-left-slide"
      );
      sectionThreeSlides[1].classList.remove(
        "section-three-right-to-left-slide"
      );
      sectionThreeSlides[2].classList.remove(
        "section-three-right-to-left-slide"
      );
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

      sectionThreeSlides[0].classList.add("section-three-right-to-left-slide");
      sectionThreeSlides[1].classList.add("section-three-right-to-left-slide");

      sectionThreeSlides[2].classList.remove(
        "section-three-left-to-right-slide"
      );
      sectionThreeSlides[3].classList.remove(
        "section-three-left-to-right-slide"
      );
    }

    if (n === 1) {
      sectionThreeSlides[2].style.display = "flex";
      sectionThreeSlides[3].style.display = "flex";
      sectionThreeRects[1].classList.add("active");

      sectionThreeSlides[0].style.display = "none";
      sectionThreeSlides[1].style.display = "none";
      sectionThreeRects[0].classList.remove("active");

      sectionThreeSlides[2].classList.add("section-three-left-to-right-slide");
      sectionThreeSlides[3].classList.add("section-three-left-to-right-slide");

      sectionThreeSlides[0].classList.remove(
        "section-three-right-to-left-slide"
      );
      sectionThreeSlides[1].classList.remove(
        "section-three-right-to-left-slide"
      );
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

      sectionThreeRects[1].classList.remove("active");

      sectionThreeSlider[0].classList.add("section-three-right-to-left-slide");

      // sectionThreeSlides[1].classList.add("section-three-right-to-left-slide");
      // sectionThreeSlides[2].classList.add("section-three-right-to-left-slide");
      sectionThreeSlider[0].classList.remove(
        "section-three-left-to-right-slide"
      );
    }

    if (n === 1) {
      sectionThreeSlides[0].style.display = "none";
      sectionThreeRects[1].classList.add("active");

      sectionThreeRects[0].classList.remove("active");

      sectionThreeSlider[0].classList.add("section-three-left-to-right-slide");
      // sectionThreeSlides[2].classList.add("section-three-left-to-right-slide");
      // sectionThreeSlides[3].classList.add("section-three-left-to-right-slide");
      sectionThreeSlides[0].classList.remove(
        "section-three-right-to-left-slide"
      );
    }
  }
}
