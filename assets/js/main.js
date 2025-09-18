/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper('.projects__container', {
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
        },
    },
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) =>{
  e.preventDefault();
  if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
    contactMessage.classList.remove('color-blue');
    contactMessage.classList.add('color-red');
    contactMessage.textContent = 'Escriba todos los campos de entrada 📩';
  }else{
                     /*   Service ID  ,     Template ID   ,     #form      ,  Public Key     */
    emailjs.sendForm('service_2yiriqk', 'template_lyrte2o', '#contact-form', 'Hks3YszxywVo3x--K')
        .then(() =>{
          contactMessage.classList.add('color-blue');
          contactMessage.textContent = 'Mensaje enviado ✅';
          setTimeout(() =>{
            contactMessage.textContent = '';
          }, 5000);
          contactForm.reset(); // limpia todo
        }, (error) =>{
          contactMessage.classList.remove('color-blue');
          contactMessage.classList.add('color-red');
          contactMessage.textContent = '¡UY! ALGO HA FALLADO... ❌';
          console.error('EmailJS Error:', error);
        });

      contactName.value = '';
      contactEmail.value = '';
      contactProject.value = '';

  }
};
contactForm.addEventListener('submit', sendEmail);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
  	const scrollDown = window.scrollY;

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
		}else{
			sectionsClass.classList.remove('active-link');
		}                                                    
	});
};
window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up');
    window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                           : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/*=============== DARK LIGHT THEME ===============*/ 
/* document.addEventListener('DOMContentLoaded', () => {
  const themeButton = document.getElementById('theme-button');
  const darkTheme = 'dark-theme';
  const iconMoon = 'ri-moon-line';
  const iconSun = 'ri-sun-line';

  // Recuperar tema guardado en localStorage
  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');

  if (selectedTheme) {
    if (selectedTheme === 'dark') document.body.classList.add(darkTheme);
    if (selectedIcon === iconSun) themeButton.classList.add(iconSun);
    else themeButton.classList.add(iconMoon);
  } else {
    themeButton.classList.add(iconMoon); // Por defecto
  }

  // Cambiar tema al hacer clic
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);

    if (themeButton.classList.contains(iconMoon)) {
      themeButton.classList.replace(iconMoon, iconSun);
    } else {
      themeButton.classList.replace(iconSun, iconMoon);
    }

    // Guardar elección en localStorage
    localStorage.setItem('selected-theme', document.body.classList.contains(darkTheme) ? 'dark' : 'light');
    localStorage.setItem('selected-icon', themeButton.classList.contains(iconSun) ? iconSun : iconMoon);
  });
}); 



/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header');
  window.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header');
};
window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance:'60px',
  duration:2500,
  delay:400,
});

sr.reveal(`.home__data, .projects__container, .testimonial__container, .footer__container`);
sr.reveal(`.home__info div`,{delay:600, origin:'bottom', interval:100});
sr.reveal(`.skills__content:nth-child(1), contact__content:nth-child(1)`,{origin:'left'});
sr.reveal(`.skills__content:nth-child(2), contact__content:nth-child(2)`,{origin:'right'});
sr.reveal(`.qualification__content, .services__card`,{interval:100});
