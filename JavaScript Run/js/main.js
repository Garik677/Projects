const data = Object.freeze({
    edit: document.querySelector('.edit'),
    edtitor: document.querySelector('.editor'),
    btns: document.querySelectorAll('.btn'),
    data: { 
        ckors: [],
        cur: 0
    }
});

document.onwheel = e => {
    e.deltaY > 0 ? data.edit.style.left = '1.5%' : data.edit.style.left = null;
};

size.oninput = () => {
    data.edtitor.style.fontSize = size.value + 'px';
}

color.oninput = () => {
    data.edtitor.style.background = color.value;
};

data.btns[2].onclick = () => {
    !data.edtitor.innerText.includes('document.write') ? eval(data.edtitor.innerText) : '';
}

data.btns[3].onclick = () => {
    data.edtitor.innerText = '';
    console.clear()
    data.data.ckors.length = 0;
    data.data.cur = 0;
}

data.edtitor.oninput = () => {
    data.data.cur++
    data.data.ckors.length = data.data.cur;
    data.data.ckors[data.data.cur] = data.edtitor.innerText;
}

data.btns[0].onclick = () => {
    data.data.cur--
    data.edtitor.innerText = data.data.ckors[data.data.cur];
    data.data.cur < 1 ? (data.data.cur = 0, data.edtitor.innerText = ''): '';
}

data.btns[1].onclick = () => {
    data.data.cur++
    data.edtitor.innerText = data.data.ckors[data.data.cur];
    data.data.cur > data.data.ckors.length - 1 ? (data.data.cur = data.data.ckors.length - 1, data.edtitor.innerText = data.data.ckors[data.data.cur]): '';
 }














