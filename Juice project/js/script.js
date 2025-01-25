const fruitsBox = document.querySelector('.fruitsBox');
const boxJuices = document.querySelectorAll('.boxJuice');
const viewJuice = document.querySelector('.viewJuice');
let FruitsRotAndViewRot = 0;
let intTime = 5000;
let intSlider;
let lineLeftPos = 0;
const wrapperBg = ['linear-gradient(90deg, rgba(167,162,244,1) 0%, rgba(112,112,143,1) 35%, rgba(166,149,13,1) 100%, rgba(0,212,255,1) 100%)', 'linear-gradient(90deg, rgba(2,19,45,1) 4%, rgba(120,109,181,1) 49%, rgba(230,132,132,1) 100%, rgba(0,212,255,1) 100%)', 'linear-gradient(90deg, rgba(101,18,18,1) 0%, rgba(186,44,44,1) 49%, rgba(235,134,80,1) 100%, rgba(0,212,255,1) 100%)']
let num = 0;
console.log(viewJuice);
setInterval(() => {
    num++
    num == wrapperBg.length ? num = 0 : '';
    document.body.firstElementChild.style.opacity = 0;
    setTimeout(() => {
        document.body.firstElementChild.style.opacity = null;
    }, 500)
    document.body.firstElementChild.style.background = wrapperBg[num];
}, 20000)
const autoslider = () => {
    intSlider = setInterval(() => {
        lineLeftPos += 100;
        lineLeftPos ==  boxJuices.length * 100 ? lineLeftPos = 0 : '';
        boxJuices[0].lastElementChild.style.left = lineLeftPos + '%';
        FruitsRotAndViewRot -= 90;
        FruitsRotAndViewRot < -270 ? FruitsRotAndViewRot = 0 : '';
        fruitsBox.style.rotate = FruitsRotAndViewRot + 'deg';
        viewJuice.style.rotate = FruitsRotAndViewRot + 'deg';
    }, intTime)
}
autoslider();
boxJuices.forEach((item, index) => {
    item.onclick = () => {
        clearInterval(intSlider)
        FruitsRotAndViewRot = -index * 90;
        fruitsBox.style.rotate = FruitsRotAndViewRot + 'deg';
        viewJuice.style.rotate = FruitsRotAndViewRot + 'deg';
        lineLeftPos = index  * 100;
        boxJuices[0].lastElementChild.style.left = lineLeftPos + '%';
        autoslider();
    }
});
