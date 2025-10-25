let f=k=>(k<10)?("0"+k):k;setInterval(()=>{let d=new Date();document.querySelector(".clock").innerText=`${f(d.getHours())}:${f(d.getMinutes())}:${f(d.getSeconds())}`;},1000);

const $ = x => document.querySelector(x);

function dropDown() {
  const dd = $("#drop-down");
  dd.classList.toggle("hidden");
  $("#indicator").innerHTML = dd.classList == "hidden" ? "↓" : "↑";
};
