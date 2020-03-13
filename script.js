function hasBeenHere() {
  if (localStorage.getItem("visited") == "true"){
    // Not the first time
  } else {
    // New visitor
    localStorage.setItem("visited", "true");
    modalBg.style.display = "block";
  }
}
var modalBg = document.getElementById("modalBg");
var modalMain = document.getElementById("modal");
var modalContent = document.getElementById("modalContent");
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
  if (filled == false) {
    console.log("fullScreen()");
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
  }
  } else {
    console.log("exitFullscreen()");
    if (document.exitFullscreen) {
    document.exitFullscreen();
    filled = false;
  } else if (document.mozExitFullScreen) {
    document.mozExitFullScreen();
    filled = false;
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
    filled = false;
  } else if (body.msExitFullscreen) {
    document.msExitFullscreen();
    filled = false;
  }
  }
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

function destroyModal() {
  modalBg.style.display = "none"; 
}