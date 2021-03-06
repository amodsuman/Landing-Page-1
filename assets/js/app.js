import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Navbar Styling On Scrolling
const nav = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 5) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px';
    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.boxShadow = 'none';
    }
});

//Hamburger Menu
const body = document.querySelector('body');
const hamburger = document.querySelector('#hamburger');
const hammenu = document.querySelector('#hammenu');
const span1 = document.querySelector('#span1');
const span2 = document.querySelector('#span2');
const span3 = document.querySelector('#span3');
const span4 = document.querySelector('#span4');
hamburger.addEventListener("click", () => {
    if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        span1.style.transform = 'translateX(0px)';
        span2.style.width = '100%';
        span2.style.transform = 'rotate(0deg)';
        span3.style.width = '100%';
        span3.style.transform = 'rotate(0deg)';
        span4.style.transform = 'translateX(0px)';
        hammenu.style.left = '-500px';
        body.style.overflow = 'auto';
    } else {
        hamburger.classList.add('active');
        span1.style.transform = 'translateX(32px)';
        span2.style.width = '20px';
        span2.style.transform = 'rotate(45deg)';
        span3.style.width = '20px';
        span3.style.transform = 'rotate(-45deg)';
        span4.style.transform = 'translateX(-32px)';
        hammenu.style.left = '0px';
        body.style.overflow = 'hidden';
    }
});

// Swiper JS
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
});

// GSAP Animations

// Hero Section
gsap.from('#heroDesc', {
    duration: 1,
    x: -200,
    opacity: 0,
    scrollTrigger: {
        trigger: '#heroDesc',
        toggleActions: 'restart reverse restart reverse',
    }
});
gsap.from('#heroImg', {
    duration: 1,
    y: 200,
    delay: 0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: '#heroDesc',
        toggleActions: 'restart reverse restart reverse',
    }
});

// Clients Section
gsap.from('#clients div', {
    duration: 1,
    scale: 0,
    opacity: 0,
    scrollTrigger: {
        trigger: '#clients div',
        toggleActions: 'restart reverse restart reverse',
    }
});

// Roadmap Section
if (screen.width >= 768) {
    gsap.timeline({
        scrollTrigger: {
            trigger: '#roadmapSvg',
            toggleActions: 'restart reverse restart reverse',
        }
    })
        .to("#svgPath", {
            strokeDashoffset: 0,
            duration: 2,
            ease: "none"
        })
        .from("#roadmapStep1", {
            y: 100,
            opacity: 0,
        }, '-=2')
        .from("#roadmapStep2", {
            y: 100,
            opacity: 0,
        }, '-=1.3')
        .from("#roadmapStep3", {
            y: 100,
            opacity: 0,
        }, '-=0.5');
} else {
    gsap.from('#roadmapStep1', {
        duration: 1,
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: '#roadmapStep1',
            toggleActions: 'restart reverse restart reverse',
        }
    });
    gsap.from('#roadmapStep2', {
        duration: 1,
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: '#roadmapStep2',
            toggleActions: 'restart reverse restart reverse',
        }
    });
    gsap.from('#roadmapStep3', {
        duration: 1,
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: '#roadmapStep3',
            toggleActions: 'restart reverse restart reverse',
        }
    });
}

// About1 Section
gsap.from('#about1Desc', {
    duration: 1,
    scale: 0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: '#about1Desc',
        toggleActions: 'restart reverse restart reverse',
    }
});
gsap.from('#about1Box1', {
    duration: 1,
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#about1Box1',
        toggleActions: 'restart reverse restart reverse',
    }
});
gsap.from('#about1Box2', {
    duration: 1,
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#about1Box2',
        toggleActions: 'restart reverse restart reverse',
    }
});
gsap.from('#about1Box3', {
    duration: 1,
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#about1Box3',
        toggleActions: 'restart reverse restart reverse',
    }
});
gsap.from('#moreAboutPlatform', {
    duration: 0.8,
    scale: 0.7,
    yoyo: true,
    repeat: -1,
    scrollTrigger: {
        trigger: '#moreAboutPlatform',
        toggleActions: 'restart reverse restart reverse',
    }
});

// About2 Section
gsap.from('.about2Card', {
    duration: 1,
    x: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '.about2Card',
        toggleActions: 'restart reverse restart reverse',
    }
});

// About3 Section
gsap.from('#about3Box1', {
    duration: 1,
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#about3Box1',
        toggleActions: 'restart reverse restart reverse',
    }
});
gsap.from('#about3Box2', {
    duration: 1,
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#about3Box2',
        toggleActions: 'restart reverse restart reverse',
    }
});

// Testimonials Section
gsap.from('#testimonialsImg', {
    duration: 1,
    x: -100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#testimonialsImg',
        toggleActions: 'restart reverse restart reverse',
    }
});
gsap.from('#testimonialsDesc', {
    duration: 1,
    x: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#testimonialsDesc',
        toggleActions: 'restart reverse restart reverse',
    }
});

// Download Section
gsap.from('#downloads', {
    duration: 1,
    scale: 0,
    opacity: 0,
    scrollTrigger: {
        trigger: '#downloads',
        toggleActions: 'restart reverse restart reverse',
    }
});

// Blogs Section
gsap.from('#seeAllBlogs', {
    duration: 0.8,
    scale: 0.7,
    yoyo: true,
    repeat: -1,
    scrollTrigger: {
        trigger: '#seeAllBlogs',
        toggleActions: 'restart reverse restart reverse',
    }
});
gsap.from('#blogCol1', {
    duration: 1,
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#blogCol1',
        toggleActions: 'restart reverse restart reverse',
    }
});
gsap.from('#blogCol2', {
    duration: 1,
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#blogCol2',
        toggleActions: 'restart reverse restart reverse',
    }
});
gsap.from('#blogCol3 .lastColBlog', {
    duration: 1,
    x: 100,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: '#blogCol3',
        toggleActions: 'restart reverse restart reverse',
    }
});

// Form Section
gsap.from('#formDesc', {
    duration: 1,
    x: -100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#formDesc',
        toggleActions: 'restart reverse restart reverse',
    }
});
gsap.from('#form', {
    duration: 1,
    x: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '#form',
        toggleActions: 'restart reverse restart reverse',
    }
});