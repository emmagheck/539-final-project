document.addEventListener("DOMContentLoaded", function() {
    const flipBoxes = document.querySelectorAll(".flip-box");

    flipBoxes.forEach(function(box) {
      box.addEventListener("click", function() {
        this.querySelector(".flip-box-inner").style.transform = "rotateY(180deg)";});
    });
  });