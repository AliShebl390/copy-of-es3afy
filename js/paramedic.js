function myFunction() {
  console.log("clicked");
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.innerText = "online";
  } else {
    text.innerText = "offline";
  }
}
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30.0444, lng: 31.2357 },
    zoom: 8,
  });
}

const burgerMenuContainer = document.getElementById("lines-container");
const bar1 = document.getElementById("bar1");
const bar3 = document.getElementById("bar3");
const bar2 = document.getElementById("bar2");
const nav = document.querySelector(".nav");
const background = document.querySelector(".background");

burgerMenuContainer.addEventListener("click", function () {
  bar1.classList.toggle("line1-transform");
  bar3.classList.toggle("line3-transform");
  bar2.classList.toggle("line2-opacity");
  nav.classList.toggle("nav-display");
  background.classList.toggle("background-display");
});
