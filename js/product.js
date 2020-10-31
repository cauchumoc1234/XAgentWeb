jQuery(document).ready(function($) {
    jQuery('.stellarnav').stellarNav({
        theme: 'dark',
        breakpoint: 960,
        position: 'right',
    });
});

var acc = document.getElementsByClassName("accordion");
var i;
acc[0].parentNode.style.width ="0%";
var xselect = acc[0].parentNode;
var xx = xselect.parentNode;
xx.style.gridTemplateColumns = "0.1fr 2fr";
acc[0].addEventListener("click", function(){
  
  if(xselect.style.width =="0%"){
    xselect.style.width = "100%";
    acc[0].innerHTML = "CUSTOMIZE"
  }
  else {
    xselect.style.width = "0%";
    acc[0].innerHTML = "";
  }
  if(xx.style.gridTemplateColumns =="1fr 3fr"){
    xx.style.gridTemplateColumns = "0.1fr 2fr";
  }
  else  xx.style.gridTemplateColumns = "1fr 3fr";
})

for (i = 0; i < acc.length; i++) {


  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}