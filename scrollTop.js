const scrollTopBtn = document.querySelector('.scrollBtn');


function scrollToTop()
{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    console.log("Scroll Clicked!!");
}

scrollTopBtn.addEventListener('click', scrollToTop);
