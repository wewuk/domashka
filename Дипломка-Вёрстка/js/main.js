const body = document.querySelector('.body')

// ===================================================================
// ========================burger=====================================
const yakori = document.querySelectorAll('.nav__item-link')
const burger = document.querySelector('.burger-icon')

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
// ===========================slider-offers==========================
const swiperOffers = new Swiper('.offers__slider', {
    spaceBetween: 20,
    slidesPerView: 1,

    grid: {
        fill: 'row',
        rows: 2,
    },

    pagination: {
        el: '.offers__pagination',
        type: 'fraction'
    },

    navigation: {
        nextEl: '.offers__next',
        prevEl: '.offers__prev',
    },

    breakpoints: {
        470: {
            slidesPerView: 1.2,
            spaceBetween: 20,

            grid: {
                fill: 'row',
                rows: 2,
            },
        },
        570: {
            slidesPerView: 1.4,
            spaceBetween: 20,

            grid: {
                fill: 'row',
                rows: 2,
            },
        },
        640: {
            slidesPerView: 1.5,
            spaceBetween: 20,

            grid: {
                fill: 'row',
                rows: 2,
            },
        },
        700: {
            slidesPerView: 1.7,
            spaceBetween: 20,

            grid: {
                fill: 'row',
                rows: 2,
            },
        },
        780: {
            slidesPerView: 1.9,
            spaceBetween: 20,

            grid: {
                fill: 'row',
                rows: 2,
            },
        },
        880: {
            slidesPerView: 2,
            spaceBetween: 20,

            grid: {
                fill: 'row',
                rows: 2,
            },
        },
        920: {
            slidesPerView: 2.2,
            spaceBetween: 20,

            grid: {
                fill: 'row',
                rows: 2,
            },
        },
        1020: {
            slidesPerView: 2.6,
            spaceBetween: 20,

            grid: {
                fill: 'row',
                rows: 2,
            },
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,

            grid: {
                fill: 'row',
                rows: 2,
            },
        },
    }
})
// ===================================================================
// ===========================tab=====================================
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
// ===========================seeAll-offers==================================
const seeAllOffers = document.querySelector('.tab-controls__all')
let seeAllContentOffers = seeAllOffers.textContent = 'Показать еще'
const tabOffers = document.querySelectorAll('.tab-controls__item')
const tabItemHideOffers = document.querySelectorAll('.tab-controls__item--hide')

seeAllOffers.addEventListener('click', event => {

    event.preventDefault()

    tabItemHideOffers.forEach(tabHideOffers => {
        tabHideOffers.classList.toggle('tab-controls__item--show')
    })

    if (seeAllContentOffers == 'Показать еще') {
        seeAllOffers.textContent = 'Скрыть'
        seeAllContentOffers = seeAllOffers.textContent = 'Скрыть'
    } else if (seeAllContentOffers == 'Скрыть') {
        seeAllOffers.textContent = 'Показать еще'
        seeAllContentOffers = seeAllOffers.textContent = 'Показать еще'
    }
})
// ===================================================================
// =========================accordion-offers=================================
const accordionLists = document.querySelectorAll('.accordion-list')

accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

        const accordionControl = e.target.closest('.accordion-list__control')
        if (!accordionControl) return
        e.preventDefault()
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
// =====filters========
const filters = document.querySelector('.accordion-content')

filters.addEventListener('click', event => {
    const filter = event.target.closest('.accordion-content__row')

    if (!filter) return
    event.preventDefault()
    if (filter.classList.contains('accordion-content__row--active')) return

    document.querySelector('.accordion-content__row--active').classList.remove('accordion-content__row--active')
    filter.classList.add('accordion-content__row--active')
})
// ===================================================================
// =========================seeAll-comment===================================
const commentButton = document.querySelector('.comment__button')
const commentItems = document.querySelectorAll('.comment__item')
const seeAllComment = document.querySelector('.comment__button-text')
let seeAllContentComment = seeAllComment.textContent = 'Показать еще'

commentButton.addEventListener('click', event => {
    commentItems.forEach(element => {
        element.classList.toggle('comment__item--show')
    })

    if (seeAllContentComment == 'Показать еще') {
        seeAllComment.textContent = 'Скрыть'
        seeAllContentComment = seeAllComment.textContent = 'Скрыть'
    } else if (seeAllContentComment == 'Скрыть') {
        seeAllComment.textContent = 'Показать еще'
        seeAllContentComment = seeAllComment.textContent = 'Показать еще'
    }
})
// ===================================================================
// ===========================modal===================================
const modal = document.querySelector('.modal')
const modalOpen = document.querySelector('.comment__score-button')
const modalCloseBtn = document.querySelector('.modal__cancel')

const closeModal = () => {
    body.classList.remove('body-modal--open')
}

const openModal = () => {
    body.classList.add('body-modal--open')
}

modalOpen.addEventListener('click', openModal)

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
// =========================accordion-questions=================================
const accordionListsQuestions = document.querySelectorAll('.accordion-list-questions')

accordionListsQuestions.forEach(el => {

    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenedItem = accordionList.querySelector('.accordion-list-questions__item--opened')
        const accordionOpenedContent = accordionList.querySelector('.accordion-list-questions__item--opened .accordion-list-questions__content')

        const accordionControl = e.target.closest('.accordion-list-questions__control')
        if (!accordionControl) return
        e.preventDefault()
        const accordionItem = accordionControl.parentElement
        const accordionContent = accordionControl.nextElementSibling

        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list-questions__item--opened')
            accordionOpenedContent.style.maxHeight = null
        }
        accordionItem.classList.toggle('accordion-list-questions__item--opened')

        if (accordionItem.classList.contains('accordion-list-questions__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        } else {
            accordionContent.style.maxHeight = null
        }

    })
})
// ===================================================================
// =========================seeAll-news===================================
const newsButton = document.querySelector('.news__button')
const newsItems = document.querySelectorAll('.news__item')
const seeAllNews = document.querySelector('.news__button-text')
let seeAllContentNews = seeAllNews.textContent = 'Показать еще'

newsButton.addEventListener('click', event => {
    newsItems.forEach(element => {
        element.classList.toggle('news__item--show')
    })

    if (seeAllContentNews == 'Показать еще') {
        seeAllNews.textContent = 'Скрыть'
        seeAllContentNews = seeAllNews.textContent = 'Скрыть'
    } else if (seeAllContentNews == 'Скрыть') {
        seeAllNews.textContent = 'Показать еще'
        seeAllContentNews = seeAllNews.textContent = 'Показать еще'
    }
})