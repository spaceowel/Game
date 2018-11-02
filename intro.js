var name = document.getElementById("name");
var start = document.getElementById("start");
var info = document.getElementById("info");
var level = document.getElementById("level");
start.addEventListener("click", function() {
  info.className = "hide";
  level.className = "";
});
