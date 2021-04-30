let hamicon = document.getElementById('hamicon');
let nav = document.getElementById('navbar');
let c = 0;
let header = document.getElementById('header');
hamicon.addEventListener('click', () => {

    if (c != 1) {
        nav.classList.toggle('navbar-show');
        header.classList.toggle('header-show');
        hamicon.style.animationName = 'spin';
        c = 1;
    } else {
        nav.classList.remove('navbar-show');
        header.classList.remove('header-show');
        hamicon.style.animationName = 'spinback';

        c = 0;
    }
})

let startbtn = document.getElementById('getstarted');
let mains = document.getElementById('mains');
let bbtn = document.getElementById('businessbtn');
let mebtn = document.getElementById('mebtn')
startbtn.addEventListener('click', ()=>{
    
        mains.classList.add('main-show')
        startbtn.style.display= 'none';
        mebtn.style.display= 'block';
        bbtn.style.display= 'block'


})
//home btn
let home = document.getElementById('home')
home.addEventListener('click', ()=> alert('You Already In Home Page'))

//scroll up btn
let scrollupbtn = document.getElementById('scrollupbtn');
window.onscroll = function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollupbtn.style.display = "block";
      } else {
        scrollupbtn.style.display = "none";
      }
}

 scrollupbtn.addEventListener('click', ()=>{
     document.body.scrollTop= 0;
     document.documentElement.scrollTop = 0;
 })
