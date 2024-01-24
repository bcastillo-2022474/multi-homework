const navBar = document.querySelector('#nav-bar');
const floatingToggleNavBarButton = document.querySelector('#floating-toggle-nav-bar-button');

function toggleNavBar() {
    if (navBar.classList.contains('-translate-x-full')) {
        navBar.classList.remove('-translate-x-full');
        navBar.classList.add('translate-x-0');
    } else {
        navBar.classList.remove('translate-x-0');
        navBar.classList.add('-translate-x-full');
    }
}

floatingToggleNavBarButton.addEventListener('click', toggleNavBar);