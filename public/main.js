'use strict';

console.log('code');

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
    }
}

/* В map передается массив из ключа и объека-значения. 
Мы его деструктим [], затем также деструктим объект {} */
Object.entries(configApp).map(([key, {href, name}]) => {
    const menuElement = document.createElement('a'); // Созадем тег 
    menuElement.href = href;
    menuElement.textContent = name;
    root.appendChild(menuElement);
});
