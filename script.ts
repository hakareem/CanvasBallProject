let canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
let ctx: any = canvas.getContext("2d");
let radius = 10;
let dx = Math.random() * 6;
let dy = Math.random() * 6;
let height1 = canvas.height;
let width1 = canvas.width;

function randomNumber() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class Ball {
  posx: number;
  posy: number;
  radius: number;
  movex: number;
  movey: number;
  colour: string;
  constructor(
    posy: number,
    posx: number,
    radius: number,
    movex: number,
    movey: number,
    colour: string
  ) {
    this.posy = posy;
    this.posx = posx;
    this.radius = radius;
    this.movey = movey;
    this.movex = movex;
    this.colour = colour;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.posx, this.posy, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.colour;
    ctx.fill();
    ctx.closePath();
  }
}

let numbballs = 100;

let balls: any[] = [];

for (let i = 0; i < numbballs; i++) {
  balls.push(
    new Ball(100, 100, 4, Math.random() * 6, Math.random() * 6, randomNumber())
  ); //Function "randomNumber" returns random colours
}

function cycle() {
  ctx.clearRect(0, 0, width1, height1);
  let i = 0;

  while (i < balls.length) {
    balls[i].draw();
    if (
      balls[i].posx + balls[i].movex > width1 - radius ||
      balls[i].posx + balls[i].movex < radius
    ) {
      balls[i].movex = -balls[i].movex;
    }
    if (
      balls[i].posy + balls[i].movey > height1 - radius ||
      balls[i].posy + balls[i].movey < radius
    ) {
      balls[i].movey = -balls[i].movey;
    }
    balls[i].posx += balls[i].movex;
    balls[i].posy += balls[i].movey;

    i++;
  }

  requestAnimationFrame(cycle);
}

cycle();
