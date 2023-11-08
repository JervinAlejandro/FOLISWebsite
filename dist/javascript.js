function Menu(element) {
    let menuDiv = document.getElementById("navbar-sticky");
    
    if(menuDiv.classList.contains("hidden")) {
        menuDiv.classList.remove("hidden");
    } else {
        menuDiv.classList.add("hidden");
    }
}
