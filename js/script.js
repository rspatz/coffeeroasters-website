/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//   var x = document.getElementById('top-container');
//   if (x.className === 'top-container') {
//     x.className += ' responsive';
//   } else {
//     x.className = 'top-container';
//   }
// }

const mainNav = document.querySelector('.main-nav-list');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = mainNav.getAttribute('data-visible');

  if (visibility === 'false') {
    mainNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    mainNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

// https://www.youtube.com/watch?v=HbBMp6yUXO0&t=2509s
// Begin @ 38'' 0'''
