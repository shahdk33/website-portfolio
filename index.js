function openResume() {
  window.open('resume.pdf', '_blank');
}

function openCertificate1(){
  window.open('certificate1.pdf', '_blank');
}

function openVideo(url){
  window.open(url, '_blank');

}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  
  var nav = document.getElementById('navigation');
  nav.classList.toggle("dark-mode");

  var text = document.getElementById("regular");
  text.classList.toggle("dark-mode");

  var about = document.getElementById("aboutMe");
  about.classList.toggle("dark-mode");

}
