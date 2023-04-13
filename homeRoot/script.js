const h1 = document.querySelector("h1");
const directories = document.querySelectorAll(".directories");
const directory_container = document.querySelector(".directory-container");

console.log(h1)
console.log(directories)
h1.addEventListener("mouseover", function showHiddenContent() {
    for (let i = 0; i < directories.length; i++) {
        directories[i].style.display = "block";
    }
})

