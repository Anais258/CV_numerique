// var profil = document.querySelector('#profil');
// var formations = document.querySelector('#formations');


// $( function () {
//     $( window ).scroll( function () {
//         if ( $( this ).scrollTop() < 580 ) {
//             $( 'body' ).removeClass( 'BGColorBK' );
//             $( 'body' ).removeClass( 'BGColorOR' );
//         }
//     })})
    
// $( function () {
//     $( window ).scroll( function () {
//         if ( $( this ).scrollTop() > 580 ) {
//             $( 'body' ).addClass( 'BGColorBK' );
//             $( 'body' ).removeClass( 'BGColorOR' );
//         }
//     })})

// $( function () {
//     $( window ).scroll( function () {
//         if ( $( this ).scrollTop() > 1850 ) {
//             $( 'body' ).addClass( 'BGColorOR' );
//             $( 'body' ).removeClass( 'BGColorBK' );
        
//     }})})

// $( function () {
//     $( window ).scroll( function () {
//         if ( $( this ).scrollTop() > 2500 ) {
//             $( 'body' ).addClass( 'BGColorBK' );
//             $( 'body' ).removeClass( 'BGColorOR' );
//         }
//     })})
    
// $( function () {
//     $( window ).scroll( function () {
//         if ( $( this ).scrollTop() > 3080 ) {
//             $( 'body' ).addClass( 'BGColorOR' );
//             $( 'body' ).removeClass( 'BGColorBK' );
        
//     }})})

// $( function () {
//     $( window ).scroll( function () {
//         if ( $( this ).scrollTop() > 4000 ) {
//             $( 'body' ).addClass( 'BGColorBK' );
//             $( 'body' ).removeClass( 'BGColorOR' );
//         }
//     })})

// $( function () {
//     $( window ).scroll( function () {
//         if ( $( this ).scrollTop() > 4500 ) {
//             $( 'body' ).addClass( 'BGColorOR' );
//             $( 'body' ).removeClass( 'BGColorBK' );
        
//     }})})

// $( function () {
//     $( window ).scroll( function () {
//         if ( $( this ).scrollTop() > 5200 ) {
//             $( 'body' ).removeClass( 'BGColorBK' );
//             $( 'body' ).removeClass( 'BGColorOR' );
//         } 
//     })})

//=======================================================================================
//=======================================================================================

// const bienvenue = document.querySelector('.bienvenue');
// const profil = document.querySelector('#profil');
// const formations = document.querySelector('#formations');



// window.addEventListener('scroll', () => {

//     const {scrollTop, clientHeight} = document.documentElement;

//     // console.log(scrollTop, clientHeight);

//     const tettv1 = profil.getBoundingClientRect().top;
//     const tettv2 = formations.getBoundingClientRect().top;

//     // console.log(tettv);

//     if(scrollTop > (scrollTop + tettv1).toFixed() - clientHeight * 0.5){
//         bienvenue.style.opacity="0";
//         profil.style.opacity="1";
        
//     }
    
//     if(scrollTop > (scrollTop + tettv2).toFixed() - clientHeight * 0.5){
//         formations.style.opacity="1";
//         profil.style.opacity="0";
//     }
// })


// ================ remplacer "menu" par le menu =================================


// var menu = document.querySelector('.menu');
// var navMenu = document.querySelector('.navMenu');
// var txtMenu = document.querySelector('.txtMenu');

// menu.addEventListener('mouseover', () => {
//     console.log("OK");
//     navMenu.classList.add('active');
// })
// menu.addEventListener('mouseleave', () => {
//     console.log("OK");
//     navMenu.classList.remove('active');
// })
