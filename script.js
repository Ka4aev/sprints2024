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

    // группировка отзывов
    reviewsButton.addEventListener('click', () => {
        reviewsBlock.classList.toggle('active');
        document.querySelector('.reviews-group').style.display = 'inline';
        console.log('класс "active" дан:', reviewsBlock.classList.contains('active'));
    });

    window.addEventListener('resize', () => {
        document.documentElement.getBoundingClientRect().width > 1200 ? burgerMenu.classList.remove('active') : null;
        if (document.documentElement.getBoundingClientRect().width < 1200){
            reviewsBlock.classList.remove('active')
            document.querySelector('.reviews-group').style.display='none'
        }
    })

    // выдвижение описания вопросов
    document.querySelectorAll('.question-topic').forEach(topic => {
        topic.addEventListener('click', () => {
            const question = topic.parentElement;
            question.classList.toggle('active');
        });
    });
});