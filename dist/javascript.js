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