const BURGER_MENU = document.querySelector('.burger-menu')
const NAV = document.querySelector('.main-nav')

let x = window.matchMedia("(max-width: 700px)")
    if (x.matches){
        NAV.classList.add('burger')
        BURGER_MENU.addEventListener('click',()=> {
            NAV.classList.toggle('active')
            })
      
    }
    else {
        window.addEventListener('scroll',()=> {
            if (window.scrollY > 5){
                NAV.classList.add('burger')
                BURGER_MENU.style.display = 'initial'
            }
            else {
                    NAV.classList.remove('burger')
                   BURGER_MENU.style.display = 'none'
                }
            }
            )
            BURGER_MENU.addEventListener('click',()=> {
                NAV.classList.toggle('active')
                })
    }





