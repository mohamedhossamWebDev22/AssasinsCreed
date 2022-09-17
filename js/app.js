let navBar = document.getElementById('nav'),
profileDOM = document.getElementById('profile'),
topBtn = document.getElementById('top');

let navOffest = navBar.offsetTop;

function navColor(){
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        topBtn.style.display = "block";
        navBar.style.background = 'rgb(0, 110, 255)';
    } 
    else {
        topBtn.style.display = "none";
        navBar.style.background = 'rgb(0, 110, 255, 0)';
    }
}

function profile() {
    if (localStorage.length == 0){
        let name = prompt('Enter your name:');
        
        localStorage.setItem('UserName', name);
            
        var nme = localStorage.getItem('UserName');

        profileDOM.innerHTML = `Hi ${nme} assassin`;
    }
    else{
        var nme = localStorage.getItem('UserName');

        profileDOM.innerHTML = `Hi ${nme} assassino`;
    }
}

window.onload = function (){
    profile();
}
window.onscroll = function (){
    navColor();
}