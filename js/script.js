window.onscroll = function() {myFunction()};
var bar= document.querySelector(".head");

function myFunction(){
if(window.pageYOffset>50){
    bar.setAttribute("style", "position: fixed; top: 0;")
}
else{
    bar.setAttribute("style", "position: absolute;")
} 
}
