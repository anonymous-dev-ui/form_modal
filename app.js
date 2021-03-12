// storing a elements in the variables 
let loginBtn = document.getElementById('loginBtn');
let regbtn = document.getElementById('regbtn');
let close = document.getElementById('crossBtn');
var box = document.querySelector('.formArea');
var login_form = document.querySelector('.login_form');
var reg_form = document.querySelector('.reg_form');


// login form 
function popup() {
    

loginBtn.addEventListener('click', function () {
    box.style.display = "flex";
    loginBtn.style.display = "none";
    regbtn.style.display = "none";
    reg_form.style.display = "none";
    login_form.style.display = "flex";
    box.classList.add('active');
})
// register form popup 
regbtn.addEventListener('click', function () {
    box.style.display = "flex";
    reg_form.style.display = "flex";
    loginBtn.style.display = "none";
    regbtn.style.display = "none";
    login_form.style.display = "none";
    box.classList.add('active');
})
}
popup();

// close function 
close.addEventListener('click', function () {
    box.classList.remove('active');
    box.classList.add('r_anime');
    setTimeout(() => {
        box.classList.remove('r_anime');
    box.style.display="none";
    loginBtn.style.display = "";
    regbtn.style.display = "";
   
    }, 5000)
} )




