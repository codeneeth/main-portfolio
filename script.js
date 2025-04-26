const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});



document.addEventListener("DOMContentLoaded", function () {
  const phrases = [ "Coder", "Python Dev",  "Web Developer", "Designer", "Tech Enthusiast"];
  const typedText = document.getElementById("typed-text");

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    const currentText = currentPhrase.substring(0, charIndex);

    typedText.textContent = currentText;

    if (!isDeleting && charIndex < currentPhrase.length) {
      charIndex++;
      typingSpeed = 100;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      typingSpeed = 50;
    } else {
      if (!isDeleting) {
        isDeleting = true;
        typingSpeed = 1000; // Pause before deleting
      } else {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before typing next phrase
      }
    }

    setTimeout(type, typingSpeed);
  }

  type();
});

