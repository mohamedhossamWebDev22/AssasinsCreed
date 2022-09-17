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

class Menu{
    constructor (menuBtn, menu) {
        this.menuBtn = document.getElementById('menu');
        this.menu = document.getElementById('M');
        this.closeBtn = document.getElementById('closeM');
    }
}

const menuObj = new Menu();

menuObj.menuBtn.onclick = function (){
    menuObj.menu.style.display = 'flex';
}
menuObj.closeBtn.onclick = function (){
    menuObj.menu.style.display = 'none';
}

window.onload = function (){
    profile();
}
window.onscroll = function (){
    navColor();
}