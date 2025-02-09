document.addEventListener('DOMContentLoaded', function() {
    applyls();

    document.getElementById("theme").addEventListener("change", function() {
        const theme = this.value;
        settheme(theme);
    });
});

function applyls() {
    const savedtheme = localStorage.getItem('theme') || 'Default';
    settheme(savedtheme);
}

function settheme(theme) {
    const body = document.body;
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const logo = document.querySelector('.header-img');
    const homelogo = document.querySelector('.title-img');

    body.classList.remove('light-mode', 'dark-mode');
    header.classList.remove('light-mode', 'dark-mode');
    footer.classList.remove('light-mode', 'dark-mode');

    body.dataset.theme = theme;

    body.classList.remove('selenite-mode', 'mocha-mode', 'latte-mode', 'macchiato-mode', 'ugly-mode', 'space-mode');
    header.classList.remove('selenite-mode', 'mocha-mode', 'latte-mode', 'macchiato-mode', 'ugly-mode', 'space-mode');
    footer.classList.remove('selenite-mode', 'mocha-mode', 'latte-mode', 'macchiato-mode', 'ugly-mode', 'space-mode');

    if (theme === 'Selenite') {
        body.classList.add('selenite-mode');
        header.classList.add('selenite-mode');
        footer.classList.add('selenite-mode');
    } else if (theme === 'Mocha') {
        body.classList.add('mocha-mode');
        header.classList.add('mocha-mode');
        footer.classList.add('mocha-mode');
    } else if (theme === 'Latte') {
        body.classList.add('latte-mode');
        header.classList.add('latte-mode');
        footer.classList.add('latte-mode');
    } else if (theme === 'Macchiato') {
        body.classList.add('macchiato-mode');
        header.classList.add('macchiato-mode');
        footer.classList.add('macchiato-mode');
    } else if (theme === 'Ugly') {
        body.classList.add('ugly-mode');
        header.classList.add('ugly-mode');
        footer.classList.add('ugly-mode');
    } else if (theme === 'Space') {
        body.classList.add('space-mode');
        header.classList.add('space-mode');
        footer.classList.add('space-mode');
    } else if (theme === 'Light') {
        body.classList.add('light-mode');
        header.classList.add('light-mode');
        footer.classList.add('light-mode');
        if (logo) logo.src = '/images/cybriagames/logo-name2half-lightmode.png';
        if (homelogo) homelogo.src = '/images/cybriagames/logo-name2half-lightmode.png';
    } else if (theme === 'Dark') {
        body.classList.remove('light-mode', 'selenite-mode', 'mocha-mode', 'latte-mode', 'macchiato-mode', 'ugly-mode', 'space-mode');
        header.classList.remove('light-mode', 'selenite-mode', 'mocha-mode', 'latte-mode', 'macchiato-mode', 'ugly-mode', 'space-mode');
        footer.classList.remove('light-mode', 'selenite-mode', 'mocha-mode', 'latte-mode', 'macchiato-mode', 'ugly-mode', 'space-mode');
        if (logo) logo.src = '/images/cybriagames/logo-name2half.png';
        if (homelogo) homelogo.src = '/images/cybriagames/logo-name2half.png';
    }

    localStorage.setItem('theme', theme);
    document.getElementById("theme").value = theme;
}

function reverts() {
    settheme('Default');
}

