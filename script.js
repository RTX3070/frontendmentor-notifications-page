const resetBtn = document.querySelector('.reset-btn');
const counter = document.querySelector('.badge');
const redBullets = document.querySelectorAll('.bullet');

resetBtn.addEventListener('click', () => {
    counter.style.opacity = 0;

    redBullets.forEach(bullet => {
        bullet.parentElement.style.backgroundColor = 'transparent';
        bullet.style.opacity = 0;
    });
});