import React, { useEffect } from "react";
import "./Marketing.css";


function DiplomaAndAdvancedDiplomaCourses() {
 
useEffect(() => {
  const canvas = document.getElementById("fireworks-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;

  const resize = () => {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = Math.random() * 2 + 1;
      this.color = `hsl(${Math.random() * 360},100%,60%)`;
      this.vx = (Math.random() - 0.5) * 4;
      this.vy = (Math.random() - 0.5) * 4;
      this.life = 60;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += 0.02;
      this.life--;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  let particles = [];

  const explode = () => {
    const x = Math.random() * width;
    const y = Math.random() * height * 0.6;
    for (let i = 0; i < 30; i++) {
      particles.push(new Particle(x, y));
    }
  };

  let frame = 0;
  const animate = () => {
    ctx.clearRect(0, 0, width, height);
    particles = particles.filter(p => p.life > 0);
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    frame++;
    if (frame % 40 === 0) explode();

    requestAnimationFrame(animate);
  };

  animate();

  return () => {
    window.removeEventListener("resize", resize);
  };
}, []);

  return (
    <>

     
    
  <a href="#ribbon" class="mainribbonbc">
  <div class="scallopc animatec">
    <div class="stripdbc">
        <canvas id="fireworks-canvas"></canvas>
      <div class="marquee">
        <div class="marquee__track mainhdb1c">
          <p>Last Chance! Offer Ends Jan 15, 2026</p>
          <p>Last Chance! Offer Ends Jan 15, 2026</p>
        </div>
      </div>
    </div>
  </div>
</a>




    </>
  );
}

export default DiplomaAndAdvancedDiplomaCourses;
