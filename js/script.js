window.onscroll = function() {myFunction()};
var bar= document.querySelector(".head");

function myFunction(){
if(window.pageYOffset>65){
    bar.setAttribute("style", "position: fixed;")
}
else{
    bar.setAttribute("style", "position: relative;")
} 
}
