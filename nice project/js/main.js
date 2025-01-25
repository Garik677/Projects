const overLine = document.querySelector('.overline');
const line = document.querySelector('.line');
let effects = ['grayscale', 'invert', 'brightness'];
let cur = 0;
let moveBool = true;
line.onmousedown = e => {
    moveBool = true;
    document.onmousemove = e => {
        if(moveBool){
            line.style.left = e.x  - 7.5 + 'px';
            overLine.style.clipPath = `inset(0 0 0 ${e.x}px)`;
            if(e.x > innerWidth - 15){
                line.style.left = null;
                overLine.style.clipPath = `inset(0 0 0 100%)`;
            }

            if(e.x < 15){
                line.style.left = 0;
            }
        } 
    }
};

line.onmouseup = () => {
    moveBool = false;
}


overLine.onclick = () => {
    cur++
    cur > effects.length - 1 ? (cur = 0) : '';
    overLine.style.filter = `${effects[cur]}(${Math.floor(Math.random() * 10)})`;
    console.log(cur);
};

