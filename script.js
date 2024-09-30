
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled'); // Add class when scrolled
       
    } else {
        navbar.classList.remove('scrolled'); // Remove class when at top
        
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.menu-bar').addEventListener('click', function(){
    const mobilenav = document.getElementById('mobile-nav-show-off');
    // console.log(mobilenav.classList.contains('hidden'));
    if(mobilenav.classList.contains('hidden')) {
        mobilenav.classList.remove('hidden');
        // console.log('i am here');
    }
    else {
        mobilenav.classList.add('hidden');
        // console.log('i am not')
    }
})