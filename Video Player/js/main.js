const player = document.querySelector('.player');
const play  = document.querySelector('.btn.play');
const pause = document.querySelector('.btn.pause');
const next = document.querySelector('.btn.next');
const prev = document.querySelector('.btn.prev');
const stop  = document.querySelector('.btn.stop');
const clickListVideo = document.querySelectorAll('.clickListVideo');
const clickVideoBox = document.querySelectorAll('.clickVideoBox');
const listIcon = document.querySelector('.listIcon');
const listVideos = document.querySelector('.listVideos');
const control = document.querySelector('.control');
const up = document.querySelector('.up');
const video = document.querySelector('.video');
const volume = document.querySelector('.volume');
const range = document.querySelector('.range');
const sizeVolume = document.querySelector('.sizeVolume');
const btnvol = document.querySelector('.btnvol');
const line  = document.querySelector('.line');
const speedText = document.querySelector('.speedText');
const speedBox = document.querySelector('.speedBox');
const speedTime = document.querySelectorAll('.sppedTime');
const loop  = document.querySelector('.loop');
const loopNumber = document.querySelector('.loopNumber');
const currentTimeMin = document.querySelector('.currentTimeMin');
const currentTimeSec = document.querySelector('.currentTimeSec');
let durMin = document.querySelector('.durMin');
let durSec = document.querySelector('.durSec');
const cameraIcon = document.querySelector('.cameraIcon');
const cameraVideo = document.querySelector('.cameraVideo');
const screenBlock = document.querySelector('.screenBlock');
const listScreenPhotos = document.querySelector('.listScreenPhotos');
const watchPhotos = document.querySelector('.watchPhotos');
const screenSound = new Audio('effect sound/camera-13695.mp3');
console.log(clickVideoBox)
let currentNumber = 0;
let arrayTime = [10, 8, 4, 2, 1, .5, .25];
let videoArray = ['video/video.mp4', 'video/video2.mp4', 'video/video3.mp4'];
let nextAndPrevNumber = 0;
let bool = true;
let boolTwo = true;
let screenBool = true;
let mouseX;
let loopNextvideoboool = true;
let miniVideoBool = true;
listIcon.onclick = () => {
    listVideos.classList.toggle('toggleListVideo');
}

clickVideoBox[nextAndPrevNumber].style.background = '#888484';
document.onmousedown = e => {
    mouseX = e.x;
}

document.onmouseup = () => {
    mouseX = undefined;
}

document.onmousemove = e => {
    if(e.x > mouseX + 100 && miniVideoBool){
        screenBlock.style = 'top: 0; left: 0';
    }else if(e.x < mouseX - 100){
        screenBlock.style = null;
    }
}   

cameraIcon.onclick = () => {
    if(screenBool){
        screenBool = false;
        video.pause()
        screenSound.play();
        cameraVideo.style.transition = '.4s';
        cameraVideo.style.scale = 1;
        cameraVideo.src = video.src;
        cameraVideo.currentTime = video.currentTime;
        let photo = document.createElement("video");
        photo.classList.add('photo');
        photo.src = video.src;
        photo.currentTime = cameraVideo.currentTime;
        photo.onclick = () => {
            watchPhotos.src = photo.src;
            watchPhotos.currentTime = photo.currentTime;
        }
        setTimeout(() => {
            cameraVideo.style.left = '-50%';
            setTimeout(() => {
                screenBool = true;
                cameraVideo.style = null;
                listScreenPhotos.appendChild(photo);
            }, 600)
        }, 550);
    }
}

clickListVideo.forEach((item, index) => {
    item.onclick = () => {
        nextAndPrevNumber = index;
        video.src = item.src;
        video.play();
        clickVideoBox.forEach((item) => {
            item.style.background = null;
        });
        clickVideoBox[index].style.background = '#888484';
    }
});

next.onclick = () => {
    nextAndPrevNumber++;
    nextAndPrevNumber > videoArray.length - 1 ? nextAndPrevNumber = 0 : '';
    clickVideoBox.forEach((item) => {
        item.style.background = null;
    });
    clickVideoBox[nextAndPrevNumber].style.background = '#888484';
    video.src = videoArray[nextAndPrevNumber];
    video.play()
}

prev.onclick = () => {
    nextAndPrevNumber--;
    nextAndPrevNumber < 0 ? nextAndPrevNumber = videoArray.length - 1 : '';
    clickVideoBox.forEach((item) => {
        item.style.background = null;
    });
    clickVideoBox[nextAndPrevNumber].style.background = '#888484';
    video.src = videoArray[nextAndPrevNumber];
    video.play()
}

play.onclick = () => {
    video.play()
};

pause.onclick = () => {
    video.pause();
};

stop.onclick = () => {
    video.pause();
    video.currentTime = 0;
}

up.onclick = () => {
    bool ? (control.style.translate = '0 100%', up.innerHTML = '<i class="fa-solid fa-chevron-up"></i>') : (control.style.translate = null, up.innerHTML = '<i class="fa-solid fa-chevron-down"></i>');
    bool = !bool;
}

range.oninput = () => { 
    volfunc()
}

player.onwheel = e => {
    e.deltaY > 0 ? (range.value--,  sizeVolume.style.opacity = 1, sizeVolume.innerText = range.value + '%', volfunc()) : (range.value++,  sizeVolume.style.opacity = 1, sizeVolume.innerText = range.value + '%', volfunc());
}

range.onmousedown  = () => {
    sizeVolume.style.opacity = 1;
}

range.onmouseup  = () => {
    setTimeout(() => {
        sizeVolume.style.opacity = null;
    }, 2000)
}

btnvol.onmouseover = () => {
    volume.style.width = '130px';
    volume.style.height = '50px';
    volume.style.transition = '.5s';
    volume.style.left = null;
}

volume.onmouseover = () => {
    volume.style.width = '130px';
    volume.style.height = '50px';
    volume.style.transition =  '.5s';
    volume.style.left = null;
}

volume.onmouseleave = () => {
    volume.style.width = null;
    volume.style.height = null;
    volume.style.left = '2.3%';
    volume.style.transition =  null;
}

btnvol.onmouseleave = () => {
    volume.style.width = null;
    volume.style.height = null;
    volume.style.left = '2.3%';
    volume.style.transition =  null;
}

const volfunc = () => {
    sizeVolume.innerText = range.value + '%';
    range.value > 0 ? (line.style.width = null, line.style.height = null) : line.style.width = '30px', line.style.height = '3px';
    if(range.value == 100){
        video.volume = range.value / 100;
    }else{
        if(range.value % 10 == 0){
          video.volume = '0.' + range.value / 10;
        }
    }
}

btnvol.onclick = () => {
    boolTwo ? (line.style.width = '30px', line.style.height = '3px', range.value = 0, video.volume = 0, sizeVolume.innerText = range.value + '%') : (line.style.width = null, line.style.height = null, range.value = 100, video.volume = 1, sizeVolume.innerText = range.value + '%' );
    boolTwo = !boolTwo
}

videoTime.onmousedown = () => {
    miniVideoRange.style.opacity = 1;
    miniVideoBool = false;
    video.pause();
}

videoTime.onmouseup = () => {
    miniVideoRange.style.opacity = null;
    miniVideoBool = true;
    video.play()
}

videoTime.oninput  = () => {
    videoTime.style.background = `linear-gradient(to right, red ${videoTime.value + '%'}, #111 ${videoTime.value + '%'})`;
    video.currentTime = videoTime.value * video.duration / 100;
    videoTime.value >= 85 ? miniVideoRange.style.left = videoTime.value - 14 + '%' : miniVideoRange.style.left = videoTime.value  + '%';
    miniVideoRange.src = video.src;
    miniVideoRange.currentTime = video.currentTime;
}


video.onloadedmetadata = () => {
    let durM = Math.floor(video.duration / 60);
    durM < 10 ? durM = '0' +  Math.floor(video.duration / 60) : '';
    durMin.innerHTML = durM;
    let durS = Math.trunc(video.duration - durM * 60);
    durS < 10 ? durS = '0' + Math.trunc(video.duration - durM  * 60) : '';
    durSec.innerText = durS;
}

video.ontimeupdate  = () => {
    videoTime.value = video.currentTime * 100 / video.duration;
    videoTime.style.background = `linear-gradient(to right, red ${videoTime.value + '%'}, #111 ${videoTime.value + '%'})`
    if(video.currentTime == video.duration && loopNextvideoboool){
        nextAndPrevNumber++;
        nextAndPrevNumber > videoArray.length - 1 ? nextAndPrevNumber = 0 : '';
        clickVideoBox.forEach((item) => {
            item.style.background = null;
        });
        clickVideoBox[nextAndPrevNumber].style.background = '#888484';
        video.src = videoArray[nextAndPrevNumber];
        video.play()
    }
    if(video.currentTime == video.duration && currentNumber == 1){
        video.currentTime = 0;
        video.play()
    }else if(video.currentTime == video.duration && currentNumber == 2){
        video.currentTime = 0;
        video.play()
        loop.style = null;
        loopNumber.style = null
        currentNumber = 0;
        loopNextvideoboool = true;
    }
    let curM = Math.floor(video.currentTime / 60);
    curM < 10 ? curM = '0' + Math.floor(video.currentTime / 60): '';
    currentTimeMin.innerText = curM;
    let curSec = Math.floor(video.currentTime - curM * 60);
    curSec < 10 ? curSec = '0' + Math.floor(video.currentTime - curM * 60) : '';
    currentTimeSec.innerText = curSec;
    let durM = Math.floor(video.duration / 60);
    durM < 10 ? durM = '0' +  Math.floor(video.duration / 60) : '';
    durMin.innerText = durM;
    let durS = Math.floor(video.duration - durM * 60);
    durS < 10 ? durS = '0' + Math.floor(video.duration - durM  * 60) : '';
    durSec.innerText = durS;
}


speedText.onclick = () => {
    speedBox.classList.toggle('inset');
}

speedTime.forEach((item, index) => {
    item.onclick = () => {
        video.playbackRate = arrayTime[index];
        speedTime.forEach((item) => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    }
});

loop.onclick = () => {
    if(currentNumber == 0){
        loop.style.color = 'white';
        currentNumber = 1;
        loopNextvideoboool = false;      
    }else if(currentNumber == 1){
        loopNumber.style = 'color: white; opacity: 1;';
        currentNumber = 2
        loopNextvideoboool = false;
    }else{
        loop.style = null;
        loopNumber.style = null
        currentNumber = 0;
        loopNextvideoboool = true;
    }
}