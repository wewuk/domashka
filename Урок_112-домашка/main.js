const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const btnClose = document.querySelector('.modal__close-btn')
const body = document.body

const closeModal = () => {
    modal.classList.remove('modal--open')
    body.classList.remove('body--fixed')
}

const openModal = () => {
    modal.classList.add('modal--open')
    body.classList.add('body--fixed')
}

btn.addEventListener('click', openModal)

modal.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal')) {
        closeModal()
    }
})


btnClose.addEventListener('click', () => {
    closeModal()
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
        closeModal()
    }
})
