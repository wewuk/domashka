const burger = document.querySelector('.burger-icon')
const body = document.querySelector('.body')
const yakori = document.querySelectorAll('.nav__link')

const openBurger = () => {
    body.classList.toggle('body--open-menu')
}
const closeBurger = () => {
    body.classList.remove('body--open-menu')
}

burger.addEventListener('click', openBurger)

yakori.forEach(yakor => {
    yakor.addEventListener('click', closeBurger)
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && body.classList.contains('body--open-menu')) {
        closeBurger()
    }
})