function startSurprise(){
  console.log("clicked"); // DEBUG LINE

  const audio = document.getElementById('bgm');
  audio.volume = 0.8;
  audio.play().catch(err => console.log("audio blocked"));

  document.querySelector('.intro').classList.remove('active');
  document.querySelector('.reveal').classList.add('active');

  roseRain();
}

function roseRain(){
  for(let i=0;i<55;i++){
    let r=document.createElement('div');
    r.className='rose';
    r.innerHTML='🌹';
    r.style.left=Math.random()*100+'vw';
    r.style.fontSize=(Math.random()*30+45)+'px';
    r.style.animationDuration=(Math.random()*3+3)+'s';
    document.body.appendChild(r);
    setTimeout(()=>r.remove(),7000);
  }
}
