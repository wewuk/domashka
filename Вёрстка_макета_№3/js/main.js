const burger = document.querySelector('.burger-icon')
const body = document.querySelector('.body')
const yakori = document.querySelectorAll('.nav__link')
const gift = document.querySelector('.about__img-link')
const modal = document.querySelector('.modal')
const modalCloseBtn = document.querySelector('.modal__cancel')

// ===================================================================
// ===================================================================
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
// ===================================================================
// ===================================================================
const closeModal = () => {
    body.classList.remove('body-modal--open')
}

const openModal = () => {
    body.classList.add('body-modal--open')
}

gift.addEventListener('click', openModal)

modalCloseBtn.addEventListener('click', closeModal)

modal.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal')) {
        closeModal()
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && body.classList.contains('body-modal--open')) {
        closeModal()
    }
})
// ===================================================================
// ===================================================================