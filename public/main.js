'use strict';

const root = document.getElementById('root');

const configApp = {
    signup: {
        href: '/signup',
        name: 'Registration'
    },
    login: {
        href: '/login',
        name: 'Login'
    },
    profile: {
        href: '/profile',
        name: 'Profile'
    },
    abount: {
        href: '/about',
        name: 'About'
    }
}

function showMenu() {
    root.innerHTML = '';
    /* В map передается массив из ключа и объека-значения. 
    Мы его деструктим [], затем также деструктим объект {} */
    Object.entries(configApp).forEach(([key, { href, name }]) => {
        const menuElement = document.createElement('a'); // Созадем тег 
        menuElement.href = href;
        menuElement.textContent = name;
        menuElement.id = key;
        root.appendChild(menuElement);
    });

    const signup = document.getElementById('signup');
    signup.addEventListener('click', (event) => {
        event.preventDefault(); // Отключаем default поведение - переход по ссылке
        showSignUp();
    });

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
        console.log('submint click!');
    });

    const back = document.createElement('a');
    form.appendChild(back);
    back.textContent = 'Назад';
    back.href = '/menu';
    back.addEventListener('click', (event) => {
        event.preventDefault();
        showMenu();
    });

    root.appendChild(form);
}

showMenu();
