'use strict';

const root = document.getElementById('root');

const urls = {
    home : {
        open: showMenu
    },
    
    signup: {
        open: showSignUp
    },

    login: {
        open: null
    },

    profile: {
        open: null
    },

    about: {
        open: showAbout
    }
}

function showMenu() {
    root.innerHTML = '';
    /* В map передается массив из ключа и объека-значения. 
    Мы его деструктим [], затем также деструктим объект {} */
    Object.entries(urls).forEach(([key, link]) => {
        const menuElement = document.createElement('a');
        menuElement.href = key;
        menuElement.textContent = key.toUpperCase();
        root.appendChild(menuElement);
    });
}

function showAbout() {
    root.innerHTML = '';
    
    const text = document.createElement('p');
    text.textContent = 'Это учебный код. Изучаем как организовать работу SPA.'

    const back = document.createElement('a');
    back.href = "home";
    back.textContent = "Назад";

    root.appendChild(text);
    root.appendChild(back);
}

const createFormInput = (type, text, name) => {
    const input = document.createElement('input');
    input.type = type
    input.name = name;
    input.placeholder = name;
    input.text = text;
    return input;
}

function showSignUp() {
    root.innerHTML = '';

    const form = document.createElement('form');

    form.appendChild(createFormInput('text', 'Логин:', 'login'))
    form.appendChild(createFormInput('password', 'Логин:', 'password1'))
    form.appendChild(createFormInput('password', 'Пароль:', 'password2'))

    const btn = createFormInput('submit', 'Зарегистрироваться!', 'submit')
    form.appendChild(btn);
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('submint click!');
    });

    const back = document.createElement('a');
    form.appendChild(back);
    back.textContent = 'Назад';
    back.href = 'home';

    root.appendChild(form);
}

showMenu();

// Один обработчик для все ссылок страницы
root.addEventListener('click', (event) => {
    const {target} = event; //деструктим, берем только поле targer
    if (target instanceof HTMLAnchorElement) {
        event.preventDefault();
        urls[target.href.split('/').reverse()[0]].open();
    }
})
