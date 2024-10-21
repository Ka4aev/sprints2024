document.addEventListener('DOMContentLoaded',() => {
    const burgerButton = document.querySelector('.header-burger');
    const burgerMenu = document.querySelector('.burger-menu');
    const reviewsButton = document.querySelector('.reviews-button');
    const reviewsBlock = document.querySelector('.reviews-block');

    // открыть меню
    burgerButton.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
    });

    // закрывать меню когда кликаешь мне поля
    document.addEventListener('click', (e) => {
        if (!burgerMenu.contains(e.target) && !burgerButton.contains(e.target)) {
            burgerMenu.classList.remove('active');
        }
    });
    // скрытие меню если ширина сайта больше планшетной
    window.addEventListener('resize', () => {
        document.documentElement.getBoundingClientRect().width > 1200 ? burgerMenu.classList.remove('active') : null;
    })

    // группировка отзывов
    reviewsButton.addEventListener('click', () => {
        reviewsBlock.classList.toggle('active');
        document.querySelector('.reviews-group').style.display = 'inline';
        console.log('класс "active" дан:', reviewsBlock.classList.contains('active'));
    });
});