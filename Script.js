document.addEventListener("DOMContentLoaded", function(event) {
  var container = document.getElementById("container");
  
  container.addEventListener("mousemove", function(event) {
    var bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.top = event.clientY + "px";
    bubble.style.left = event.clientX + "px";
    container.appendChild(bubble);
    
    // Remove the bubble after a certain time
    setTimeout(function() {
      bubble.remove();
    }, 2000);
  });
});
