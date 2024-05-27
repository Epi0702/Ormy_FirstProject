const mobileMenu = document.querySelector('.mobileMenu');
const showBtn = document.querySelectorAll('.headerMenuBtn');
const hideBtn = document.querySelectorAll('.mobileMenu_HideButton');


function ShowMobileMenu() {

    mobileMenu.style.display = 'flex';
    console.log("Show!!");
}

function HideMobileMenu() {

    mobileMenu.style.display = 'none';
    console.log("Hide!!");
}

function CheckWindowSize()
{
    const vw = document.documentElement.clientWidth;

    if(vw > 768)
    {
        HideMobileMenu();
    }
}

showBtn.forEach(button => {
    button.addEventListener('click', ShowMobileMenu);
})

hideBtn.forEach(button => {
    button.addEventListener('click', HideMobileMenu);
})

window.addEventListener('resize', CheckWindowSize);