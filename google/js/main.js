const google = document.querySelector('.google');
const block = document.querySelector('.block');
const title = document.querySelectorAll('.title span');
const search = document.querySelector('.search input');
const colors  = document.querySelector('.colors');
const allColor = document.querySelector('.allColor');
const btnColors = document.querySelectorAll('.allColor button');
const slide = document.querySelector('.slide');
const big = document.querySelector('.big');
const sun = document.querySelector('.son');
const moon = document.querySelector('.moon');
const searchBtn = document.querySelector('.btn');
const list  = document.querySelector('.list');
const listItems = document.querySelectorAll('.listItem');
const cells = document.querySelectorAll('.cell');
const cards = document.querySelectorAll('.card');
console.log(cards)
let val;
console.log(searchBtn)
let bool = true;
let allbool = false;
let cur = 0;
let inpbool = false;
let monnbool = false;
google.onwheel = e => {
    if(e.deltaY < 0){
        slide.style.top = '0';
    }else{
        slide.style.top = null;
        allColor.style = null;
        bool = true;
    }
};

moon.onclick = () => {
    big.style.left = '0';
    google.style.background = '#222';
    block.style = 'background: #222; box-shadow: 0 0 10px white;'
    search.style.background = '#222';
    search.style.color = 'white';
    allbool = true;
    monnbool = true;
    cur = 0;
    list.style.boxShadow = '0 0 10px white';
    list.style.background = 'black';
    google.style.setProperty('--list', '#484848')
    for(let i = 0; i < listItems.length; i++){
        listItems[i].style.boxShadow = '0 0 4px white';
        listItems[i].style.color = 'white';
    }
    google.style.setProperty('--Hc', 'white');
    google.style.setProperty('--filter', '1');
    for(let i =0; i < title.length; i++){
        title[i].style.color = 'white';
    }
};

sun.onclick = () => {
    big.style.left = null;
    google.style.background = 'white';
    block.style = null
    search.style.background = null;
    search.style.color = 'black';
    allbool = false;
    monnbool = false;
    cur = 0;
    list.style.boxShadow = null;
    list.style.background = null;
    google.style.setProperty('--list', '#e1dcdc');
    for(let i = 0; i < listItems.length; i++){
        listItems[i].style.boxShadow = null;
        listItems[i].style.color = null;
    }
    google.style.setProperty('--Hc', 'black');
    google.style.setProperty('--filter', '0');
    for(let i =0; i < title.length; i++){
        title[i].style.color = null;
    }
};

colors.onclick = () => {
    if(bool){
        allColor.style = 'top: -38.5px; left: 18px; opacity: 1; pointer-events: auto';
        if(cur == 1){
            allColor.style.background = 'white';
        }
        if(allbool){
            allColor.style.boxShadow = '0 0 10px white';
        }
    }else{
        allColor.style = null;
    }
    bool = !bool;
};

for(let i = 0; i < btnColors.length; i++){
    btnColors[i].onclick = () => {
        monnbool = false;
        google.style.background = btnColors[i].style.getPropertyValue('--gc');
        google.style.setProperty('--list', '#e1dcdc')
        cur = 1;
        allColor.style.background = 'white';
        for(let j =0; j < title.length; j++){
            title[j].style.color = 'white';
            block.style.background = 'white';
            search.style.background = 'white';
            search.style.color = 'black';
            google.style.setProperty('--Hc', 'black');
        }
        list.style.boxShadow = '0 0 10px black';
        list.style.background = 'white'
    for(let i = 0; i < listItems.length; i++){
        listItems[i].style.boxShadow = '0 0 4px black';
        listItems[i].style.color = 'black';
    }
    };
}

search.oninput = () => {
   if(search.value.length > 0){
        list.style.display = 'block';
   }else{
        list.style.display = 'none';
   }
   for(let i = 0; i < listItems.length; i++){
    listItems[i].className = 'listItem'
    if(inpbool){
        listItems[i].style.color = null;
        if(monnbool){
            listItems[i].style.color = 'white';
        }
    }
    if(listItems[i].innerText.toUpperCase().startsWith(search.value.toUpperCase())){
        listItems[i].innerHTML = '<span style="color: green;">'+listItems[i].innerText.substring(0, search.value.length) +'</span>' + listItems[i].innerText.substring(search.value.length);
        listItems[i].className = 'listItem active';
       }
       listItems[i].style.display = 'none';
       if(listItems[i].innerHTML.toUpperCase().includes(search.value.toUpperCase())){
           listItems[i].style.display = 'block';
       }
           
            listItems[i].onclick = () => {
                search.value = listItems[i].innerText;
                listItems[i].style.color = 'green';
                listItems[i].style.transition = 'none';
                inpbool = true;
            }; 
        }
};


searchBtn.onclick = () => {
    searchBtn.style.rotate = '360deg';
    searchBtn.ontransitionend = () => {
        if(search.value != undefined){
            location.href = `https://www.google.com/search?q=${search.value}`;
        }
    };
};
let sec;
let child;
let child2;
let sec2;
for(let i = 0; i < cells.length; i++){
    cards[i].ondragstart = () => {
        cards[i].style.opacity = '0';
        google.style.setProperty('--cardBg', 'none');
        sec = cards[i].parentElement;
        child = sec.firstElementChild;
    };

    cards[i].ondragend = () => {
        cards[i].style.opacity = null;
        google.style.setProperty('--cardBg', '#d1c7c7');
    }

    cards[i].ondragover = () => {
        sec2 = cards[i].parentElement;
        child2 = sec2.firstElementChild;
        sec.append(child2)
        sec2.append(child);
        sec = sec2;
        return false;
    };

}




