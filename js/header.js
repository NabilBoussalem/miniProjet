var header = document.querySelector("#header nav");
var logo = $("#logos");
var sticky = header.offsetTop;

let i =0;
function myFunction() {

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");

    if($('#logos').css('opacity') == 0 && i===0)
    {
      $('#logos').animate({opacity:1}, 500);
      i=1;
    }

  } else {
    header.classList.remove("sticky");
    
    if($('#logos').css('opacity') == 1 && i === 1)
    {
      $('#logos').animate({opacity:0}, 10);
      i=0;
    }
  }

  
}

window.onscroll = function() {myFunction()};
let link = document.querySelectorAll(".dropdown-content>*");
link.forEach( element => element.onclick=function(){sessionStorage.setItem("statut",element.innerHTML)});
/*$( document ).ready(function() {
  let z = $("div:last-of-type");

  $("div:last-of-type").slice(z.lenght);

});*/
