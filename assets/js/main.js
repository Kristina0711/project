// document.querySelector('.theme').addEventListener('change', (event) => {
// if (event.target.nodeName === 'INPUT') {
//     console.log('asdas');
//     document.documentElement.classList.remove('dark', 'light');
//     document.documentElement.classList.add(event.target)
// }
// });

// let header = document.querySelector(".header");

// document.addEventListener("scroll", () => {
//   if (document.documentElement.scrollTop > 1) {
//     header.classList.add("header_has-bg");
//   } else {
//     header.classList.remove("header_has-bg");
//   }
// });



var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block"
}
span.onclick = function() {
  modal.style.display = "none"
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}