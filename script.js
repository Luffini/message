document.addEventListener("DOMContentLoaded", () => {
    const flower = document.getElementById("flower");
    const message = document.getElementById("message");
    const numPetals = 16;
    const delay = 200;
  
    for (let i = 0; i < numPetals; i++) {
      setTimeout(() => {
        const petal = document.createElement("div");
        petal.className = "petal";
        const angle = i * (360 / numPetals);
        // centramos, rotamos y desplazamos radialmente
        petal.style.transform = `translate(-50%,-50%) rotate(${angle}deg) translateY(-70px)`;
        petal.style.animationDelay = `${i * 0.1}s`;
        flower.appendChild(petal);
  
        if (i === numPetals - 1) {
          setTimeout(() => {
            const center = document.createElement("div");
            center.className = "center";
            flower.appendChild(center);
          }, 600);
        }
      }, i * delay);
    }
  
    message.textContent = "🌻 Este girasol creció para ti 🌻";
  });
  