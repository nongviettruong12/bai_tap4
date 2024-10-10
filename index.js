const navbarLeft = document.getElementsByClassName('navbar-left')[0]
const hiddenMenu = document.getElementsByClassName('hidden')[0]

hiddenMenu.addEventListener('click', ()=>{
    navbarLeft.classList.toggle('open')
    navbarLeft.classList.toggle('closed')
})