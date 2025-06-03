document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("topo");
  
    if (header) {
      window.addEventListener("scroll", function () {
        var scrollY = window.scrollY;
        var opacity = Math.max(1 - scrollY / 300, 0);
        header.style.opacity = opacity;
      });
    }
  });
  
