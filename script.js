const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const mobileNav = document.querySelector('.mobile-nav-list')


openMenu.addEventListener('click', () => {
    openMenu.style.display = 'none'
    closeMenu.style.display = 'block'
    mobileNav.style.display = 'block'
})


closeMenu.addEventListener('click', () => {
    openMenu.style.display = 'block'
    closeMenu.style.display = 'none'
    mobileNav.style.display = 'none'
})