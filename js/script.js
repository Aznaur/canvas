'use strict';
{
  let star = document.querySelector('#input');
  let imgCanvas = document.querySelector('#ounput');

  let ctx = star.getContext('2d');
  let ctxImg = imgCanvas.getContext('2d');

  ctx.beginPath();
  ctx.rect(0,0, star.width, star.height);
  ctx.fillStyle = "#ffffff";
  ctx.fill();

  function createStar (widthStar, x, y, color) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(widthStar + x, y);
    ctx.lineTo(((widthStar/2 ) - widthStar/3) + x, widthStar/1.55 + y);
    ctx.lineTo((widthStar/2) + x, y - widthStar/2.6);
    ctx.lineTo(((widthStar/2) + widthStar/3) + x , widthStar/1.55 + y);
    ctx.lineTo(x, y);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
  }

  createStar(200, 0, 150, 'red');
  createStar(200, 200, 150, 'blue');
  createStar(200, 400, 150, 'green');
  createStar(200, 100, 400, 'yellow');
  createStar(200, 300, 400, 'black');

  star.addEventListener('click', function (event) {
    const x = event.offsetX;
    const y = event.offsetY;
    const imgData = ctx.getImageData(x, y, 1, 1);
    const pix = imgData.data;
    ctxImg.beginPath();
    ctxImg.rect(0,0, imgCanvas.width, imgCanvas.height);
    ctxImg.fillStyle = `rgba(${pix.join(',')})`;
    ctxImg.fill();
  });
}
