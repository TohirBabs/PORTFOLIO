const navToggle = document.querySelector('.nav-toggle')
const navList = document.querySelector('.nav-list')
const scrollProgress = document.querySelector('.scroll-progress')

navToggle.addEventListener('click', () => {
    const navShown =  navList.classList.contains('show-nav')

    if(navShown){
        navList.classList.remove('show-nav')
    }

    else{
        navList.classList.add('show-nav')
    }
})

window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    const scrolled = window.scrollY

    let percentageScrolled = 100

    if (scrollable > 0) {
        percentageScrolled = Math.ceil(scrolled/scrollable * 100)
    }

    scrollProgress.style.width = `${percentageScrolled}%`
})
