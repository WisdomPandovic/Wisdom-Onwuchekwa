function applyEllipsis() {
    var elements = document.getElementsByClassName('hth');
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      if (element.scrollWidth > element.clientWidth) {
        element.style.textOverflow = "ellipsis";
      } else {
        element.style.textOverflow = "initial";
      }
    }
  }
  
  // Run the function when the page loads and on window resize
  window.onload = applyEllipsis;
  window.onresize = applyEllipsis;
  