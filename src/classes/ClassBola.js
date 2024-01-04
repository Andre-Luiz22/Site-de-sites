import { gsap } from "gsap";

export class BolaMetodos {
  constructor(bola, container) {
    this.bola = bola;
    this.container = container;
    this.valoresBola = this.bola.getBoundingClientRect();
  }

  sorteiaNumberRamdom(min, max) {
    return Math.random() * (max - min) + min;
  }

  aleatorizaTudo() {
    const numberX = this.sorteiaNumberRamdom(
      this.container.right,
      this.container.left
    );
    const numberY = this.sorteiaNumberRamdom(
      this.container.bottom,
      this.container.top
    );
    return {
      x: numberX,
      y: numberY,
      time: 20,
    };
  }

  goTo() {
    const numerosAleatorios = this.aleatorizaTudo();
    const { x, y, time } = numerosAleatorios;
    gsap.to(this.bola, {
      x: x - this.valoresBola.width / 2,
      y: y - this.valoresBola.height / 2,
      duration: time,
      onComplete: () => {
        this.goTo();
      },
    });
  }

  superiorDireito() {
    gsap.to(this.bola, {
      x: this.container.right,
      y: this.container.top,
    });
  }

  inferiorEsquerdo() {
    gsap.to(this.bola, {
      x: this.container.left,
      y: this.container.bottom,
    });
  }

  inferiorDireito() {
    gsap.to(this.bola, {
      x: this.container.right,
      y: this.container.bottom,
    });
  }

  superiorEsquerdo() {
    gsap.to(this.bola, {
      x: this.container.left,
      y: this.container.top,
    });
  }

  frente() {
    gsap.to(this.bola, {
      x: this.container.right - this.valoresBola.width / 2,
      duration: 20,
      onComplete: () => this.tras(),
    });
  }

  tras() {
    gsap.to(this.bola, {
      x: this.container.left,
      duration: 20,
      onComplete: () => this.frente(),
    });
  }
}
