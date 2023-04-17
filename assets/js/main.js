// show menu //
const navMenu = document.getElementById('nav_menu');
const navToggle = document.getElementById('nav_toggle');
const navClose = document.getElementById('nav_close');

// menu shown //
if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show_menu');
    })
}

// menu hidden //
if(navClose) {
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show_menu');
    })
}

// remove menu mobile //
const navLink = document.querySelectorAll('.nav_link');
const linkAction = () => {
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show_menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// swiper projects //

let swiperProjects = new Swiper(".projects_container", {
    loop: true,
    spaceBetween: 24,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        }
    },
    mousewheel: true,
    keyboard: true,
});

// swiper review //
let swiperReview = new Swiper(".review_container", {
    grabCursor: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

// email js //
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactProject = document.getElementById('contact-project');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefaut();
    
        // service id, template id, #form, publickey //
        emailjs.sendForm('service_luzw3p6','template_sj75fnh','#contact-form','pyC9F-GLuJ8qHSAm-')
            .then(() => {

                // show message, add color
                contactMessage.classList.add('color-blue');
                contactMessage.textContent = 'Message sent';

                // clear input field
                contactName.value = '';
                contactEmail.value = '';
                contactProject.value = '';


            }, (error) => {
                alert('OOPS! Something has failed...', error);
            })

    }

contactForm.addEventListener('submit', sendEmail)

// scroll sections active link //
const section = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;
    
    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
        
    })
}

window.addEventListener('scroll', scrollActive);

// show scroll up //
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                            :scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// dark light theme //
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    // add or remove dark //
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

// change background header //
const scrollHeader = () => {
    const header = document.getElementById('header');
    // when scroll is greater than 50 viewport height, add scroll-header class //
    this.scrollY >= 50  ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);

// scroll reveal animation //
const sr = ScrollReveal({
    origin: 'top',
    distance: '68px',
    duration: 2500,
    delay: 400
    //reset: true /* animations repeat */
});

sr.reveal(`.home_data, .projects_container, .review_container, .qualification_container, .footer_container`);
sr.reveal(`.home_info div`, {delay: 600, origin: 'bottom', interval: 100});
sr.reveal(`.skills_container, .contact_container, .services_card`, {origin: 'left'});