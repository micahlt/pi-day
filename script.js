var body = document.getElementById("body");
var filled = false;
var i = 2;
var height = 100;
var autoOn = false;
var heightString;
var myInterval;
var pi;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       pi = JSON.parse(this.responseText);
       pi = pi["pi"];
    }
};
xhttp.open("GET", "pi.json", true);
xhttp.send();
document.getElementById("logo").addEventListener("click", function() {
  nextDigit();
});

document.getElementById("body").addEventListener("keypress", function(){
  nextDigit();
})

function nextDigit() {
  i++;
  let documentNode = document.createElement("H1");
  documentNode.innerHTML = pi[i];
  document.getElementById("pis").appendChild(documentNode);
  window.scrollBy(0, 50);
}

function fullScreen() {
  /*
  if (filled = false) { */
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen()
    filled = true;
    body.style.width = "100%";
  } else if (document.documentElement.mozRequestFullscreen) {
    document.documentElement.mozrequestFullscreen()
    filled = true;
    body.style.width = "100%";
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
    filled = true;
    body.style.width = "100%";
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
    filled = true;
    body.style.width = "100%";
  } /*
  } else {
    if (body.exitFullscreen) {
    body.exitFullscreen();
    filled = false;
  } else if (body.mozExitFullScreen) {
    body.mozExitFullScreen();
    filled = false;
  } else if (body.webkitExitFullscreen) {
    body.webkitExitFullscreen();
    filled = false;
  } else if (body.msExitFullscreen) {
    body.msExitFullscreen();
    filled = false;
  }
  } */
}

function clearAll() {
  window.clearInterval(myInterval);
}

function automatic() {
  if (autoOn == false) {
    autoOn = true;
  myInterval = window.setInterval(nextDigit, 100);
} else {
  autoOn = false;
  window.clearInterval(myInterval);
  clearAll();
}
}