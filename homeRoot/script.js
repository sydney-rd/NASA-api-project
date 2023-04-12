const h1 = document.querySelector("h1");
const directories = document.querySelectorAll(".directories");

console.log(h1)
console.log(directories)
h1.addEventListener("mouseover", function showHiddenContent() {
    for (let i = 0; i < directories.length; i++) {
        directories[i].style.display = "block";
    }
})

for (let i = 0; i < directories.length; i++) {
    directories[i].addEventListener("mouseleave", function hideContent() {
      for (let j = 0; j < directories.length; j++) {
        directories[j].style.display = "none";
      }
    });
  }