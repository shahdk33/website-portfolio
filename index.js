function openResume() {
  window.open('resume.pdf', '_blank');
}

function openCertificate(x){
  window.open(x, '_blank');
}


function openVideo(url){
  window.open(url, '_blank');

}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var toggleButton = document.getElementById('toggleDark');
  if (element.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️ light mode";
  } else {
    toggleButton.textContent = "🌙 dark mode";
  }

}



// Add this JavaScript to your index.js file

function toggleMenu() {
  var element = document.body;


  const menuContainer = document.getElementById('menuContainer');
  menuContainer.classList.toggle('menu-visible');

  const button = document.getElementById('openMenu');

}
