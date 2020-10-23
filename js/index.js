/**
 * render Footer
 */
const printFooter = function(){
    $('.footer').empty();
    let year = new Date().getFullYear();
    let url = window.location.href;
    let prefix = "";
    if(url.includes("product-type") || url.includes("product-details")){
        prefix = ".";
    }
    $('.footer').append(`
    <div class='footer-box1'>
            <div class='footer-center-box'>
                <p class='footer-title'>Everel America Pool and Wellness Products</p>
                <p class='footer-content'>5095 Bristol Industrial Way</p>
                <p class='footer-content'>Buford, Georgia, 30518</p>
                <p class='footer-title'>contact Us</p>
                <p class='footer-content'>Phone: 678-765-8966</p>
                <p class='footer-content'>Email: sales@everelamerica.com</p>
            </div>
        </div>
        <div class='footer-box2'>
            <div class='footer-center-box'>
                <p class='footer-title'>Hours</p>
                <p class='footer-content'>Mon. - Thur.: 8 am - 5 pm </p>
                <p class='footer-content'>Fri.: 8 am - 4 pm </p>
                <p class='footer-title'>Follow Us On</p>
                <p class='footer-media-logo'>
                    <a href='https://www.facebook.com/Everel-America-252511976225/' alt='facebook link'
                        target='_blank'><i class="fab fa-facebook"></i></a>
                    <a href='https://www.linkedin.com/in/everelamerica/' alt='linkedin link' target='_blank'><i
                            class="fab fa-linkedin"></i></a>
                    <a href='https://twitter.com/EverelAmerica' alt='twitter link' target='_blank'><i
                            class="fab fa-twitter"></i></a>
                </p>
            </div>
        </div>       
        <div class="footer-box3">
            <div class='footer-logo'><img src='${prefix}./img/logo-new.png' alt='everel america logo' /></div>
        </div>
        <div class='footer-box4'>Everel America Pool and Wellness Products &copy; ${year}<br/>
            <img height="35px" alt="Visa credit card" src='${prefix}./img/Visa-256.PNG'/>
            <img height="35px" alt="American Express credit card" src='${prefix}./img/American-Express-256.PNG'/>
            <img height="35px" alt="master card credit card" src='${prefix}./img/Master-Card-256.png'/>
        </div>`);
}
printFooter();


/*
 * render navigation bar
 */
const printNavigation = function(){
    let url = window.location.href;
    let prefix = "";
    if(url.includes("product-type") || url.includes("product-details")){
        prefix = "../";
    }
    $('.header-nav').empty();
    $('.header-nav').append(`
        <a href="${prefix}index.html" class="header-nav-item">Home</a>
        <a href="${prefix}#intro" class="header-nav-item">About the Company</a>
        <a href="${prefix}#news" class="header-nav-item">News</a>
        <a href="${prefix}#service" class="header-nav-item">Services</a>
        <a href="${prefix}#contact" class="header-nav-item">Contact Us</a>
    `);

    $('.navigation__nav').empty();
    $('.navigation__nav').append(`
    <ul class="navigation__list">
        <li class="navigation__item"><a href="${prefix}index.html" class="navigation__link" ><span>01</span>Home</a></li>
        <li class="navigation__item"><a href="${prefix}#intro" class="navigation__link" ><span>02</span>About Us</a></li>
        <li class="navigation__item"><a href="${prefix}#news" class="navigation__link" ><span>03</span>News</a></li>
        <li class="navigation__item"><a href="${prefix}#service" class="navigation__link" ><span>04</span>Services</a></li>
        <li class="navigation__item"><a href="${prefix}#contact" class="navigation__link" ><span>06</span>Contact Us</a></li>
    </ul>
    `);
}

printNavigation();


/*
 *sticky feature for nav-bar 
 */
function navSticky(x) {
    let navbar1 = document.getElementById('header-nav1');


    if (x.matches) {
        if (window.pageYOffset >= 100) {
            navbar1.classList.add("sticky");
            navbar1.style.display = 'inline-block';
        } else {
            navbar1.classList.remove("sticky");
        }
    }
}

let viewPort = window.matchMedia("(min-width: 56.26em)");
window.onscroll = function () { navSticky(viewPort) };

/*
 * Function for the scroll Arrow in the Header 
 */
function scrollArrow() {
    window.scroll(0, 500);
}


/*
 * Slide show  
 */
function showSlides(n, viewPort2, viewPort3) {
    let i;
    let slides = document.getElementsByClassName("brands-box");
    //let dots = document.getElementsByClassName("dot");
    if (viewPort2.matches) {
        if (n > slides.length - 1) { slideIndex = 0 }
        if (n < 0) { slideIndex = slides.length - 1 }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        slides[slideIndex].style.display = "inline-block";
        //dots[slideIndex-1].className += " active";
    } else if (viewPort3.matches) {
        if (n > slides.length -1) { slideIndex = 0 }
        if (n < 0) { slideIndex = slides.length - 3 }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "inline-block";
        slides[slideIndex + 1].style.display = "inline-block";
        slides[slideIndex + 2].style.display = "inline-block";
    } else {
        if (n > slides.length -1) { slideIndex = 0 }
        if (n < 0) { 
            if(slides.length >= 4){
                slideIndex = slides.length - 4; 
            }else{
                slideIndex = 0
            }
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "inline-block";
        slides[slideIndex + 1].style.display = "inline-block";
        slides[slideIndex + 2].style.display = "inline-block";
        slides[slideIndex + 3].style.display = "inline-block";

    }


}


let viewPort2 = window.matchMedia("(max-width: 600px)");
let viewPort3 = window.matchMedia("(max-width: 56.25em)");
let slideIndex = 0;
showSlides(slideIndex, viewPort2, viewPort3);

function plusSlides(n) {
    if (viewPort2.matches) { slideIndex = slideIndex + n }
    else if (viewPort3.matches) { slideIndex = slideIndex + 3 * n }
    else { slideIndex = slideIndex + 4 * n }
    showSlides(slideIndex, viewPort2, viewPort3);
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex, viewPort2, viewPort3);
}

/*
 * phone size nav-bar checkbox 
 */
function navCheckbox() {
    let naviToggle = document.getElementById('navi-toggle');
    naviToggle.checked = false;
}

