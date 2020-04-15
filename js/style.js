function myFunction() {
    var x = document.getElementById("text-title-8");
    if (window.matchMedia("(max-width: 700px)").matches) {
       x.document.style.color="red"
    } else {
       x.document.style.color = "yellow";
    }
  }
  myFunction()