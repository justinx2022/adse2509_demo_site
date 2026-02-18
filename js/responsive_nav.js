//Javascript document to handle the click event in the hamburger icon in our site
(function () {
    let menuToggle = document.getElementById('menu-toggle');
    let navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        })
    }
    document.addEventListener('click', function (event) {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    })

})()