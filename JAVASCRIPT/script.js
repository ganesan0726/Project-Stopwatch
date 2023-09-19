const btnStart = document.querySelector('.start-btn');
const btnStop = document.querySelector('.stop-btn');
const btnReset = document.querySelector('.reset-btn');

let hrs = min = sec = ms = 0 , startTimer;

btnStart.addEventListener('click',()=>{

    btnStart.classList.add('start-btn-active');
    btnStop.classList.remove('stop-btn-active');
    startTimer = setInterval(()=>{
        ms++;
        if(ms==100){
            sec++;
            ms=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hrs++;
            min=0;
        }
        updateDisplay();
    },10)
});

btnStop.addEventListener('click',()=>{
    clearInterval(startTimer);
    btnStart.classList.remove('start-btn-active');
    btnStop.classList.add('stop-btn-active');
});

btnReset.addEventListener('click',()=>{
    hrs = min = sec = ms = 0;
    clearInterval(startTimer)
    updateDisplay();
    btnStart.classList.remove('start-btn-active');
    btnStop.classList.remove('stop-btn-active');
});

function updateDisplay(){
    //formated Display
    phrs=hrs<10 ? '0' + hrs : hrs;
    pmin=min<10 ? '0' + min : min;
    psec=sec<10 ? '0' + sec : sec;
    pms=ms<10 ? '0' + ms : ms;

    document.querySelector('.hrs').innerText=phrs;
    document.querySelector('.min').innerText=pmin;
    document.querySelector('.sec').innerText=psec;
    document.querySelector('.ms').innerText=pms;
}