const flower = document.getElementById("flower");
const message = document.getElementById("message");
const numPetals = 26;
const delay = 200;

// Genera pétalos animados
for (let i = 0; i < numPetals; i++) {
  setTimeout(() => {
    const p = document.createElement("div");
    p.className = "petal";
    const angle = i * (360 / numPetals);
    p.style.transform = `translate(-50%,-50%) rotate(${angle}deg) translateY(-80px)`;
    p.style.animationDelay = `${i * 0.1}s`;
    flower.appendChild(p);

    if (i === numPetals - 1) {
      setTimeout(() => {
        const c = document.createElement("div");
        c.className = "center";
        flower.appendChild(c);
      }, 600);
    }
  }, i * delay);
}

// Corazones al click
flower.addEventListener("click", () => {
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "absolute";
    heart.style.left = `\${50 + (Math.random()-0.5)*80}%`;
    heart.style.top = `\${50 + (Math.random()-0.5)*80}%`;
    heart.style.fontSize = "24px";
    heart.style.opacity = 1;
    flower.appendChild(heart);
    // animar subida y desvanecimiento
    setTimeout(() => {
      heart.style.transition = "transform 2s ease-out, opacity 2s";
      heart.style.transform = "translateY(-120px) scale(1.5)";
      heart.style.opacity = 0;
      setTimeout(() => flower.removeChild(heart), 1000);
    }, 50);
  }
});

// Mensaje máquina de escribir
document.addEventListener("DOMContentLoaded", () => {
  message.textContent = "Para ti";
});