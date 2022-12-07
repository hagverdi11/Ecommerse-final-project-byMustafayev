// Copy menu for mobile
function copyMenu() {
    // Copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat')
    var dptPlace = document.querySelector('.departments')
    dptPlace.innerHTML = dptCategory.innerHTML;

    // Copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav')
    var navPlace = document.querySelector('.off-canvas nav')
    navPlace.innerHTML = mainNav.innerHTML;

    // Copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper')
    var topPlace = document.querySelector('.off-canvas .thetop-nav')
    topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();


// Show mobile menu
const menuButton = document.querySelector('.trigger')
const closeButton = document.querySelector('.t-close')
const addClass = document.querySelector('.site')

menuButton.addEventListener('click', () => {
    addClass.classList.toggle('showmenu')
})

closeButton.addEventListener('click', () => {
    addClass.classList.remove('showmenu')
})

// Show sub-menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small')
submenu.forEach(menu => menu.addEventListener('click', toggle))

function toggle(e) {
    e.preventDefault()

    submenu.forEach(
        item => item !== this
            ? item.closest('.has-child').classList.remove('expand')
            : null
    )

    if (this.closest('.has-child').classList !== 'expand') {
        this.closest('.has-child').classList.toggle('expand')
    }
}


//slider

const swiper = new Swiper('.swiper', {

    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});