if (document.body.classList.contains('index')) {
    var lang = navigator.language || navigator.userLanguage;
    var title = document.querySelector('.js-title');
    var desc = document.querySelector('.js-desc');
    var advise = document.querySelector('.js-advise');
    if (lang === 'ru-RU') {
        title.textContent = "Enter website RUSSIAN";
        desc.textContent = "Choose language above RUSSIAN";
        advise.textContent = "You can directly import it and use it with RUSSIAN";
    } else {
        title.textContent = "Enter website";
        desc.textContent = "Choose language above";
        advise.textContent = "You can directly import it and use it with";
    }
}