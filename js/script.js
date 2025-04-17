// js/script.js

function loadComponent(id, file) {
    fetch(`../Component/${file}`) // Corrected path to look inside 'components' folder
    .then(response => response.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error(`Error loading ${file}:`, error));
}

document.addEventListener('contextmenu', function (event) {
    event.preventDefault(); // Disable right-click menu
});

document.addEventListener('copy', function (event) {
    event.preventDefault(); // Disable copying
});
