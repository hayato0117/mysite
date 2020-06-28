window.addEventListener('load', () => {

    initialize();
    render();
})

function initialize() {
   let canvas = document.body.querySelector('#main_canvas');

   canvas.width = 640;
   canvas.height = 480;

  ctx = canvas.getContext('2d');

   
}

function render(){
    ctx.font = 'bold 30px cursive';
    ctx.textBaseline = 'alphabetic';
    ctx.textAlign = 'start';
    ctx.shadowBlur = 5; //影のぼかしを設定する
    ctx.shadowColor = '#666666';//影の色を設定する
    //影のオフセットする量を設定する
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 30;

    
  //テキストを描画する
  drawtext('グラフィックプログラミング', 100, 100, 'orange', 150);

  drawRect(100, 300, 100, 100);
  
}

function drawtext(text, x, y, color, width){
  if(color != null){
      ctx.fillStyle = color;
  }
  ctx.fillText(text, x, y, width);
}

function drawRect(x, y, w, h){
    let linearGradient = ctx.createLinearGradient(0, 0, 0, 200);

    linearGradient.addColorStop(0.0, '#ff0000');
    linearGradient.addColorStop(0.5, '#ffff00');
    linearGradient.addColorStop(1.0, '#0000ff');

  fillRect(x, y, w, h)
}


