const navToggle = document.querySelector('.nav-toggle')
const navList = document.querySelector('.nav-list')

navToggle.addEventListener('click', () => {
    const navShown =  navList.classList.contains('show-nav')

    if(navShown){
        navList.classList.remove('show-nav')
    }

    else{
        navList.classList.add('show-nav')
    }
})
