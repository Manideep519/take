// (function($) {
//     var $window = $(window),
//         $galleryBoxone = $('.gallery-box-one');
//         $galleryBoxtwo = $('.gallery-box-two');
//         $galleryBoxthree = $('.gallery-box-three');
//         $galleryBoxfour = $('.gallery-box-four');
//         $galleryBoxfive = $('.gallery-box-five');

//     function resize() {
//         if ($window.width() < 710) {
//             return $galleryBoxone.addClass('cycle-slideshow');
//             return $galleryBoxtwo.addClass('cycle-slideshow');
//             return $galleryBoxthree.addClass('cycle-slideshow');
//             return $galleryBoxfour.addClass('cycle-slideshow');
//             return $galleryBoxfive.addClass('cycle-slideshow');
//         }

//         $galleryBoxone.removeClass('cycle-slideshow');
//         $galleryBoxtwo.removeClass('cycle-slideshow');
//         $galleryBoxthree.removeClass('cycle-slideshow');
//         $galleryBoxfour.removeClass('cycle-slideshow');
//         $galleryBoxfive.removeClass('cycle-slideshow');
//     }
    
//     $window
//         .resize(resize)
//         .trigger('resize');
// })(jQuery);


// (function($) {
//     var $window = $(window),
//         $gallery = $('.gallery-box-main');

//     function resize() {
//         if ($window.width() < 720) {
//             return $gallery.addClass('slideshow-container');
//         }
//         $gallery.removeClass('slideshow-container');
//     }
    
//     $window
//         .resize(resize)
//         .trigger('resize');
// })(jQuery);



// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
// }