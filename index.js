var hoverbutton=document.querySelector('.help');
var hoverdiv=document.querySelector("#hover");
hoverbutton.addEventListener('mouseover', ()=>{hoverbutton.removeAttribute("class"); hoverbutton.setAttribute("class", "helphover"); });
hoverbutton.addEventListener('mouseout', ()=>{hoverbutton.removeAttribute("class"); hoverbutton.setAttribute("class", "help"); });

