let currentContent = null;

function toggleContent(container) {
  const hiddenContent = container.querySelector('.hidden-content');
  
  if (currentContent && currentContent !== hiddenContent) {
    currentContent.style.display = 'none';
  }

  if (hiddenContent.style.display === 'none') {
    hiddenContent.style.display = 'block';
    currentContent = hiddenContent;
  } else {
    hiddenContent.style.display = 'none';
    currentContent = null;
  }
}



    function openResume() {
        window.open('resume.pdf', '_blank');
    }

    // Add an event listener to the "my resume" button
    document.getElementById('resumeBtn').addEventListener('click', openResume);
