/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById('top-container');
  if (x.className === 'top-container') {
    x.className += ' responsive';
  } else {
    x.className = 'top-container';
  }
}
