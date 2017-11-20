'use strict';


window.renderStatistics = function (ctx, names, times) {
  ctx.beginPath();

  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowBlur = 2;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';

  ctx.fillStyle = 'rgb(240, 128, 128)';
  ctx.moveTo(100, 10);
  ctx.lineTo(310, 50);
  ctx.lineTo(520, 10);
  ctx.lineTo(520, 280);
  ctx.lineTo(100, 280);
  ctx.lineTo(100, 10);
  ctx.fill();

  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 110, 60);
  ctx.fillText('Список результатов:', 130, 80);

  var maxResult = 0;

  for (var i = 0; i <= times.length - 1; i++) {
    var time = times[i];
    if (time > maxResult) {
      maxResult = time;
    }
  }


  var histogramHeight = 150;
  var widthColumn = 40;
  var columnInterval = 50;
  var step = histogramHeight / (maxResult - 0);
  var initialX = 200;
  var initialY = 250;
  var nameHeight = 15;

  for (i = 0; i <= times.length - 1; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgb(0,0,128)';
    }
    ctx.globalAlpha = getRandomFloat(0.1, 1);
    ctx.fillRect(initialX + columnInterval * i, initialY, widthColumn, -times[i] * step);

    ctx.fillStyle = '#000000';
    ctx.globalAlpha = 1;
    ctx.fillText(names[i], initialX + columnInterval * i, initialY + nameHeight);
  }

  for (i = 0; i <= times.length - 1; i++) {
    var j = histogramHeight - times[i] * step;
    var timeHeight = j + 90;
    ctx.fillText(times[i].toFixed(), initialX + columnInterval * i, timeHeight);
  }
};

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

