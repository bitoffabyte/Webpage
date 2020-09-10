const left = document.querySelector('.left');
const cent = document.querySelector('.cent');
const right = document.querySelector('.right');
const cont1 = document.querySelector('.cont1');
const cont2 = document.querySelector('.cont2');
const cont3 = document.querySelector('.cont3');
left.addEventListener('mouseover', () => {
    let opacity = 1;
    left.style.width = '100%';
    cent.style.width = '0%';
    right.style.width = '0%';
    cont1.style.opacity = 1;
    cont1.style.height = '100%';
    cont1.style.width = '100%';

    document.querySelectorAll('.imgimg')[1].style.width = 0;
    document.querySelectorAll('.imgimg')[2].style.width = 0;
    // document.querySelectorAll('.imgimg')[0].style.opacity = 0;
    document.querySelector('.cent').style.border = 'none';
});
left.addEventListener('mouseout', () => {
    left.style.width = '33.333%';
    cent.style.width = '33.333%';
    right.style.width = '33.333%';
    cont1.style.opacity = 0;
    cont1.style.height = '0%';
    cont1.style.width = '0%';
    document.querySelectorAll('.imgimg')[1].style.width = s;
    document.querySelectorAll('.imgimg')[2].style.width = s;
    document.querySelectorAll('.imgimg')[0].style.opacity = 1;
    document.querySelector('.cent').style.borderRight = '#696969 5px solid';
    document.querySelector('.cent').style.borderLeft = '#696969 5px solid';
});

cent.addEventListener('mouseover', () => {
    cent.style.width = '100%';
    left.style.width = '0%';
    right.style.width = '0%';
    cont2.style.opacity = 1;
    cont2.style.height = '100%';
    cont2.style.width = '100%';
    document.querySelectorAll('.imgimg')[0].style.width = 0;
    document.querySelectorAll('.imgimg')[2].style.width = 0;
    // document.querySelectorAll('.imgimg')[1].style.opacity = 0;
    document.querySelector('.cent').style.border = 'none';
});
cent.addEventListener('mouseout', () => {
    cent.style.width = '33.333%';
    left.style.width = '33.333%';
    right.style.width = '33.333%';
    cont2.style.opacity = 0;
    cont2.style.height = '0%';
    cont2.style.width = '0%';
    document.querySelectorAll('.imgimg')[0].style.width = s;
    document.querySelectorAll('.imgimg')[2].style.width = s;
    document.querySelectorAll('.imgimg')[1].style.opacity = 1;
    document.querySelector('.cent').style.borderRight = '#696969 5px solid';
    document.querySelector('.cent').style.borderLeft = '#696969 5px solid';
});

right.addEventListener('mouseover', () => {
    right.style.width = '100%';
    cent.style.width = '0%';
    left.style.width = '0%';
    cont3.style.height = '100%';
    cont3.style.width = '100%';
    cont3.style.opacity = 1;

    document.querySelectorAll('.imgimg')[0].style.width = 0;
    document.querySelectorAll('.imgimg')[1].style.width = 0;
    // document.querySelectorAll('.imgimg')[2].style.opacity = 0;
    document.querySelector('.cent').style.border = 'none';
});
right.addEventListener('mouseout', () => {
    right.style.width = '33.333%';
    cent.style.width = '33.333%';
    left.style.width = '33.333%';
    cont3.style.opacity = 0;
    cont3.style.height = '0%';
    cont3.style.width = '0%';
    document.querySelectorAll('.imgimg')[0].style.width = s;
    document.querySelectorAll('.imgimg')[1].style.width = s;
    document.querySelectorAll('.imgimg')[2].style.opacity = 1;
    document.querySelector('.cent').style.borderRight = '#696969 5px solid';
    document.querySelector('.cent').style.borderLeft = '#696969 5px solid';
});

document.querySelector('.info1').onclick = () => {
    document.querySelector('.pop').style.opacity = '1';
    document.querySelector('.pop').style.height = '80%';
    document.querySelector('.pop').style.width = '80%';

    document.querySelector('.hor').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
};

document.querySelector('.info2').onclick = () => {
    document.querySelector('.pop').style.opacity = '1';
    document.querySelector('.pop').style.height = '80%';
    document.querySelector('.pop').style.width = '80%';
    document.querySelector('.md').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
};

document.querySelector('.info3').onclick = () => {
    document.querySelector('.pop').style.opacity = '1';
    document.querySelector('.pop').style.height = '80%';
    document.querySelector('.pop').style.width = '80%';
    document.querySelector('.Equinox').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
};

document.querySelectorAll('.close')[0].onclick = () => {
    // document.querySelector('.pop').style.display = 'none';
    document.querySelector('.Equinox').style.display = 'none';
    document.querySelector('.md').style.display = 'none';
    document.querySelector('.hor').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';

    document.querySelector('.pop').style.opacity = '0';
    document.querySelector('.pop').style.height = '0%';
    document.querySelector('.pop').style.width = '0%';
};
document.querySelectorAll('.close')[1].onclick = () => {
    // document.querySelector('.pop').style.display = 'none';
    document.querySelector('.Equinox').style.display = 'none';
    document.querySelector('.md').style.display = 'none';
    document.querySelector('.hor').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';

    document.querySelector('.pop').style.opacity = '0';
    document.querySelector('.pop').style.height = '0%';
    document.querySelector('.pop').style.width = '0%';
};
document.querySelectorAll('.close')[2].onclick = () => {
    // document.querySelector('.pop').style.display = 'none';
    document.querySelector('.Equinox').style.display = 'none';
    document.querySelector('.md').style.display = 'none';
    document.querySelector('.hor').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';

    document.querySelector('.pop').style.opacity = '0';
    document.querySelector('.pop').style.height = '0%';
    document.querySelector('.pop').style.width = '0%';
};

console.log(screen.height);
let s = left.offsetWidth;
document.querySelectorAll('.imgimg')[0].style.width = s;
document.querySelectorAll('.imgimg')[1].style.width = s;
document.querySelectorAll('.imgimg')[2].style.width = s;
