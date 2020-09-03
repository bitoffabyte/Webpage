const left = document.querySelector('.left');
const cent = document.querySelector('.cent');
const right = document.querySelector('.right');
const cont1 = document.querySelector('.cont1');
const cont2 = document.querySelector('.cont2');
const cont3 = document.querySelector('.cont3');
left.addEventListener('mouseover', () => {
    left.style.width = '100%';
    cent.style.width = '0%';
    right.style.width = '0%';
    cont1.style.opacity = 1;
});
left.addEventListener('mouseout', () => {
    left.style.width = '33.333%';
    cent.style.width = '33.333%';
    right.style.width = '33.333%';
    cont1.style.opacity = 0;
});

cent.addEventListener('mouseover', () => {
    cent.style.width = '100%';
    left.style.width = '0%';
    right.style.width = '0%';
    cont2.style.opacity = 1;
});
cent.addEventListener('mouseout', () => {
    cent.style.width = '33.333%';
    left.style.width = '33.333%';
    right.style.width = '33.333%';
    cont2.style.opacity = 0;
});

right.addEventListener('mouseover', () => {
    right.style.width = '100%';
    cent.style.width = '0%';
    left.style.width = '0%';
    cont3.style.opacity = 1;
});
right.addEventListener('mouseout', () => {
    right.style.width = '33.333%';
    cent.style.width = '33.333%';
    left.style.width = '33.333%';
    cont3.style.opacity = 0;
});

document.querySelector('.info1').onclick = () => {
    document.querySelector('.pop').classList.toggle('focus');
    document.querySelector('.hor').style.display = 'block';
};

document.querySelector('.info2').onclick = () => {
    document.querySelector('.pop').classList.toggle('focus');
    document.querySelector('.md').style.display = 'block';
};

document.querySelector('.info3').onclick = () => {
    document.querySelector('.pop').classList.toggle('focus');
    document.querySelector('.Equinox').style.display = 'block';
};

document.querySelector('.close').onclick = () => {
    document.querySelector('.pop').classList.toggle('focus');
    document.querySelector('.Equinox').style.display = 'none';
    document.querySelector('.md').style.display = 'none';
    document.querySelector('.hor').style.display = 'none';
};

console.log(screen.height);
document.querySelector('.pop').style.height = screen.height * 0.8 + 'px';
document.querySelector('.pop').style.top = screen.height * 0.05 + 'px';
