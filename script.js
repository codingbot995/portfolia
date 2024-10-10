let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

const text = document.querySelector('.text1');
const textload = () =>{
    setTimeout(()=>{
        text.textContent = 'FullStack Developer';
    },0);
    setTimeout(()=>{
        text.textContent = 'Blogger';
    }, 4000);
    setTimeout(()=>{
        text.textContent = 'Frelancer';
    }, 8000);

 setTimeout(()=>{
        text.textContent = 'kenyan';
    }, 12000);

}
textload();
setInterval(textload, 16000)