// Это скрипт подключения header на страницы (переиспользование)
window.addEventListener('load', function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        document.getElementById('header').innerHTML = xhr.responseText;
      } else if (xhr.status === 404) {
        window.location.href = '404.html';
      }
    }
  };
  xhr.open('GET', 'header.html');
  xhr.send();
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 40,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  centeredSlides: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

  // Get the navbar element
  var navbar = document.getElementById('navbar');

  // Get the current page URL
  var currentUrl = window.location.pathname;

  // Loop through the menu links and add the 'active' class to the one that matches the current URL
  var links = navbar.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    if (link.getAttribute('href') === currentUrl) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  }

  // Add a click event listener to the menu links
  navbar.addEventListener('click', function(e) {
    // Only handle clicks on links
    if (e.target.tagName === 'A') {
      // Remove the 'active' class from all links
      for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
      }

      // Add the 'active' class to the clicked link
      e.target.classList.add('active');
    }
  });





// Инициализация слайдеров
// const swiper_v1 = new Swiper('.swiper_v1', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
//   centeredSlides: true,
//   slidesPerView: 2,
//   spaceBetween: 0,
//   // If we need pagination

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   // autoplay: {
//   //   delay: 5000,
//   // },
// });


// const swiper = new Swiper('.swiper_v2', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination1',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next_v2',
//     prevEl: '.swiper-button-prev_v2',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
//   // autoplay: {
//   //   delay: 3000,
//   // },
//   slidesPerGroup: 5,
//   // Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 320px
//     575: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//       slidesPerGroup: 1,
//     },
//     767: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//       slidesPerGroup: 2,
//     },
//     // when window width is >= 480px
//     991: {
//       slidesPerView: 3,
//       spaceBetween: 5,
//       slidesPerGroup: 3,
//     },
//     // when window width is >= 640px
//     1199: {
//       slidesPerView: 5,
//       spaceBetween: 10,
//       slidesPerGroup: 5,
//     }
//   },

// });


// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horisontal',
//   loop: true,

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

// });