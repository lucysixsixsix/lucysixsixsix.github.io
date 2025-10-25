let f=k=>(k<10)?("0"+k):k;setInterval(()=>{let d=new Date();document.querySelector(".clock").innerText=`${f(d.getHours())}:${f(d.getMinutes())}:${f(d.getSeconds())}`;},1000);
