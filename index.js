function openResume() {
  window.open('resume.pdf', '_blank');
}

function openCertificate(x){
  window.open(x, '_blank');
}


function openVideo(url){
  window.open(url, '_blank');

}

let vantaEffect = VANTA.HALO({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  baseColor: 0x3a146a,
  backgroundColor: 0xedcff4 , 
  amplitudeFactor: 2.70,
  xOffset: 0.14,
  yOffset: -0.05,
  size: 1.4
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var toggleButton = document.getElementById('toggleDark');
  if (element.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️ light mode";
    vantaEffect.setOptions({ backgroundColor: 0x000000 });

  } else {
    toggleButton.textContent = "🌙 dark mode";
    vantaEffect.setOptions({ backgroundColor: 0xedcff4 });

  }

}



// Add this JavaScript to your index.js file

function toggleMenu() {
  var element = document.body;


  const menuContainer = document.getElementById('menuContainer');
  menuContainer.classList.toggle('menu-visible');

  const button = document.getElementById('openMenu');

}
