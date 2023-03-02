var body = document.querySelector("body");

// window.addEventListener('scroll', function() {
    // console.log('scroll')

    //if (scrollY < 600) {
    //     bienvenue.style.opacity="1";
    //     PROFIL.style.opacity="0";
    // }
    // if (scrollY > 500) {
    //     PROFIL.style.opacity="1";
    // }
    // if (scrollY > 500) {
    //     body.classList.remove('BGColorOR');  
    //     body.classList.remove('BGColorBK');
    // }
    // if (scrollY > 600) {
    //     bienvenue.style.opacity="0";
        
    //     body.classList.add('BGColorBK');
    //     body.classList.remove('BGColorOR');  
    // }
    // if (scrollY > 1850) {
    //     PROFIL.style.opacity="0";
    //     FORMATIONS.style.opacity="1";
    //     EXPÉRIENCES.style.opacity="0";

    //     body.classList.add('BGColorOR');  
    //     body.classList.remove('BGColorBK'); 
    // }
    // if (scrollY > 2500) {
    //     FORMATIONS.style.opacity="0";
    //     EXPÉRIENCES.style.opacity="1";
    //     COMPÉTENCES.style.opacity="0";

    //     body.classList.add('BGColorBK');
    //     body.classList.remove('BGColorOR');  
    // }
    // if (scrollY > 3080) {
    //     EXPÉRIENCES.style.opacity="0";
    //     COMPÉTENCES.style.opacity="1";
    //     ATOUTS.style.opacity="0";

    //     body.classList.add('BGColorOR');  
    //     body.classList.remove('BGColorBK');  
    // }
    // if (scrollY > 4000) {
        
    //     COMPÉTENCES.style.opacity="0";
    //     ATOUTS.style.opacity="1";
    //     LOISIRS.style.opacity="0";

    //     body.classList.add('BGColorBK');
    //     body.classList.remove('BGColorOR');  
    // }
    // if (scrollY > 4500) {
        
    //     ATOUTS.style.opacity="0";
    //     LOISIRS.style.opacity="1";
    //     CONTACT.style.opacity="0";

    //     body.classList.add('BGColorOR');  
    //     body.classList.remove('BGColorBK');
    // }
    // if (scrollY > 5000) {
        
    //     LOISIRS.style.opacity="0";
    //     CONTACT.style.opacity="1";

    //     body.classList.remove('BGColorBK');
    //     body.classList.remove('BGColorOR');  
    // }
// })

// ============== apparition du menu au scroll ====================================

var menu = document.querySelector('.menu');
var profil = document.querySelector('.profil');

window.addEventListener('scroll', () => {
    
    const {scrollTop, clientHeight} = document.documentElement;
    
    // console.log(scrollTop, clientHeight);
    
    const topElementToTopViewport = profil.getBoundingClientRect().top;
    
    // console.log(topElementToTopViewport);
    
    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed()){
        menu.classList.add('active')
    }
    else {
        menu.classList.remove('active')
    }
})

// ================ remplacer "iconeMenu" par le menu =================================

var menu = document.querySelector('.menu');
var iconeMenu = document.querySelector('.iconeMenu');
var navMenu = document.querySelector('.navMenu');
// var txtMenu = document.querySelector('.txtMenu');

menu.addEventListener('mouseover', function () {
    iconeMenu.style.display = 'none';
    navMenu.classList.add('active');
    navMenu.style.display = 'flex';
    })   
menu.addEventListener('mouseleave', () => {
    iconeMenu.style.display = 'block';
    navMenu.style.display = 'none';
    })
iconeMenu.addEventListener('mouseover', function () {
    iconeMenu.style.display = 'none';
    navMenu.classList.add('active');
    navMenu.style.display = 'flex';
    })   
iconeMenu.addEventListener('mouseleave', () => {
    iconeMenu.style.display = 'block';
    navMenu.style.display = 'none';
    })

    // =============== apparition des cards au scroll ===================================================

var cards = document.querySelectorAll('.card');

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        for(card of cards) {
            card.style.opacity = 1;
        }
    } else {
        for(card of cards) {
            card.style.opacity = 0;
        }
    }
})


// ============== apparition des sections au scroll ====================================

var choix = document.querySelector('.choix');
var profil = document.querySelector('.profil');
var formations = document.querySelector('.formations');
var experiences = document.querySelector('.experiences');
var competences = document.querySelector('.competences');
var atouts = document.querySelector('.atouts');
var loisirs = document.querySelector('.loisirs');
var contact = document.querySelector('.contact');

const {scrollTop, clientHeight} = document.documentElement;

window.addEventListener('scroll', () => {
    const topElementProfilToTopViewport = profil.getBoundingClientRect().top;
    
    if(scrollTop > (scrollTop + topElementProfilToTopViewport).toFixed()- clientHeight*0.6) {
        profil.classList.add('active');
        choix.classList.add('inactive');
    }
    else {
        profil.classList.remove('active')
        choix.classList.remove('inactive');
    }
})

window.addEventListener('scroll', () => {
    const topElementFormationsToTopViewport = formations.getBoundingClientRect().top;
    
    if(scrollTop > (scrollTop + topElementFormationsToTopViewport).toFixed()- clientHeight*0.4) {
        formations.classList.add('active')
        profil.classList.remove('active')
        body.classList.add('BGColorOR')
    }
    else {
        formations.classList.remove('active')
        body.classList.remove('BGColorOR')
    }
})

window.addEventListener('scroll', () => {
    const topElementExperiencesToTopViewport = experiences.getBoundingClientRect().top;
    
    if(scrollTop > (scrollTop + topElementExperiencesToTopViewport).toFixed()- clientHeight*0.4) {
        experiences.classList.add('active')
        formations.classList.remove('active')
        body.classList.add('BGColorBK')
        body.classList.remove('BGColorOR')
    }
    else {
        experiences.classList.remove('active')
    }
})

window.addEventListener('scroll', () => {
    const topElementCompetencesToTopViewport = competences.getBoundingClientRect().top;
    
    if(scrollTop > (scrollTop + topElementCompetencesToTopViewport).toFixed()- clientHeight*0.4) {
        competences.classList.add('active')
        experiences.classList.remove('active')
        body.classList.add('BGColorOR')
        body.classList.remove('BGColorBK')
    }
    else {
        competences.classList.remove('active')
    }
})

window.addEventListener('scroll', () => {
    const topElementAtoutsToTopViewport = atouts.getBoundingClientRect().top;
    
    if(scrollTop > (scrollTop + topElementAtoutsToTopViewport).toFixed()- clientHeight*0.4) {
        atouts.classList.add('active')
        competences.classList.remove('active')
        body.classList.add('BGColorBK')
        body.classList.remove('BGColorOR')
    }
    else {
        atouts.classList.remove('active')
    }
})
window.addEventListener('scroll', () => {
    const topElementContactToTopViewport = loisirs.getBoundingClientRect().top;
    
    if(scrollTop > (scrollTop + topElementContactToTopViewport).toFixed()- clientHeight*0.6) {
        loisirs.classList.add('active')
        atouts.classList.remove('active')
        body.classList.add('BGColorOR')
        body.classList.remove('BGColorBK')
    }
    else {
        loisirs.classList.remove('active')
    }
})
window.addEventListener('scroll', () => {
    const topElementContactToTopViewport = contact.getBoundingClientRect().top;
    
    if(scrollTop > (scrollTop + topElementContactToTopViewport).toFixed()- clientHeight*0.4) {
        contact.classList.add('active')
        loisirs.classList.remove('active')
        body.classList.add('BGColorBK')
        body.classList.remove('BGColorOR')
    }
    else {
        contact.classList.remove('active')
        body.classList.remove('BGColorBK')
    }
})


// ================ menu hamburger dynamique =================================

$(document).ready(function() {
    
    $('.iconeMenu').click(function(e){
        e.preventDefault();
        $this=$(this);
        if($this.hasClass('isOpened')){
            $this.addClass('isClosed').removeClass('isOpened');
        } else {
            $this.removeClass('isClosed').addClass('isOpened');
        }
    })
});

