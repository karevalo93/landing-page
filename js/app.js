let btnMenu = document.querySelector(".btn-menu");
let menu = document.querySelector('.list-container')
let containerMenu = document.querySelector('.menu')
let activate = true



// Menu animation
btnMenu.addEventListener('click', () => {

    document.querySelector('.btn-menu i').classList.toggle('fa-times')

    if (activate) {
        menu.style.left = "0"
        menu.style.transition = "0.5s"

        activate = false
    } else {
        activate = false

        menu.style.left = "-100%"
        menu.style.transition = "0.5s"

        activate = true
    }
})



// Active link
let links = document.querySelectorAll('.list li a')

links.forEach((element) => {

    element.addEventListener('click', (event) => {

        links.forEach((link) => {
            link.classList.remove('active')
        })
        event.target.classList.add('active')
    })
})


// Scroll effect effect
let prevScrollPos = window.pageYOffset
let goTop = document.querySelector('.go-top')

window.onscroll = () => {
    let currentScrollPos = window.pageYOffset

    // show and hide menu
    if (prevScrollPos > currentScrollPos) {
        containerMenu.style.top = "0"
        containerMenu.style.transition = '0.5s'
    } else {
        containerMenu.style.top = "-60px"
        containerMenu.style.transition = '0.3s'
    }

    prevScrollPos = currentScrollPos

    // Show style scroll

    let up = window.pageYOffset

    if (up <= 600) {
        containerMenu.style.borderBottom = 'none';
        goTop.style.right = '-100%'

    } else {
        containerMenu.style.borderBottom = '2px solid #00305b'
        goTop.style.right = '0'
        goTop.style.transition = '0.5s'
    }

}

goTop.addEventListener('click', () => {
    document.documentElement.scrollTop = 0
})