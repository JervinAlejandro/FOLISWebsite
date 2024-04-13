function Menu(element) {
  let menuDiv = document.getElementById("navbar-sticky");

  if (menuDiv.classList.contains("hidden")) {
    menuDiv.classList.remove("hidden");
  } else {
    menuDiv.classList.add("hidden");
  }
}

function playVideo() {
  var video = document.getElementById("videoPlayer");
  var thumbnail = document.getElementById("videoThumbnail");
  var playButton = document.getElementById("playButton");

  thumbnail.style.display = "none";
  playButton.style.display = "none";
  video.style.display = "block";

  video.play();
}

function addNavBg(element, yCoordination = sticky) {
  if (window.scrollY > yCoordination) {
    element.classList.add("bg-white");
  } else {
    element.classList.remove("bg-white");
  }
}

function changeTextColour(element, yCoordination = sticky) {
  if (window.scrollY > yCoordination) {
    for (let i = 0; i < element.length; i++) {
      element[i].classList.add("text-black");
    }
  } else {
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove("text-black");
    }
  }
}

window.onscroll = () => {
  addNavBg(nav);
  changeTextColour(navLinks);
};

let nav = document.getElementById("test");
let sticky = nav.offsetTop;

let list = document.getElementById("nav-links");
let navLinks = list.getElementsByTagName("a");
