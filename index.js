function toggle(elementId) {
  var element = document.getElementById(elementId);
  
  if (element) {
    // This is the simplest way: it flips the presence of the class
    element.classList.remove('hide');
  }
}