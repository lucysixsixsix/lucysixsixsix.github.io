const $ = x => document.querySelector(x);

function dropDown() {
  const dd = $("#drop-down");
  dd.classList.toggle("hidden");
  $("#indicator").innerHTML = dd.classList == "hidden" ? "↓" : "↑";
};
