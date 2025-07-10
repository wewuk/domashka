const burger = document.querySelector('.burger-icon')
const body = document.querySelector('.body')
const yakori = document.querySelectorAll('.nav__link')
const gift = document.querySelector('.about__img-link')
const modal = document.querySelector('.modal')
const modalCloseBtn = document.querySelector('.modal__cancel')

// ===================================================================
// ========================burger===========================================
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
// ===========================modal========================================
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
// ===========================tab========================================
const tabControls = document.querySelector('.tab-controls')

tabControls.addEventListener('click', event => {

    const tabControl = event.target.closest('.tab-controls__link')

    if (!tabControl) return
    event.preventDefault()
    if (tabControl.classList.contains('tab-controls__link--active')) return

    const tabContentID = tabControl.getAttribute('href')

    document.querySelector('.tab-content--show').classList.remove('tab-content--show')
    document.querySelector(tabContentID).classList.add('tab-content--show')

    document.querySelector('.tab-controls__link--active').classList.remove('tab-controls__link--active')
    tabControl.classList.add('tab-controls__link--active')
})
// ===================================================================
// =========================accordion==========================================
const accordionLists = document.querySelectorAll('.accordion-list')

accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

        const accordionControl = e.target.closest('.accordion-list__control')
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement
        const accordionContent = accordionControl.nextElementSibling

        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened')
            accordionOpenedContent.style.maxHeight = null
        }
        accordionItem.classList.toggle('accordion-list__item--opened')

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        } else {
            accordionContent.style.maxHeight = null
        }

    })
})
// ===================================================================
// ===================================================================