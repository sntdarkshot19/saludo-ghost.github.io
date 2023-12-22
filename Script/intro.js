let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');
let logoSpan = document.querySelectorAll('.logo-parts');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, piano) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (piano + 1) * 100);
        });

        setTimeout(() => {
            logoSpan.forEach((span, piano) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (span + 1) * 50);
            });
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
            window.location.href = 'saludo.html';
        }, 3000);

    });
});