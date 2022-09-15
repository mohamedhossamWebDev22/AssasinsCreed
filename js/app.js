let navBar = document.getElementById('nav'),
tobBtn = document.getElementById('top');

let navOffest = navBar.offsetTop;

function navColor(){
    if (window.pageYOffset >= navOffest){
        navBar.style.background = 'rgb(0, 110, 255)';
    }
    else{
        navBar.style.background = 'rgb(0, 110, 255, 0)';
    }
}
function topBtn(){
    tobBtn.style.display = 'block';
}

window.onscroll = function (){
    navColor();
    topBtn();
}