var canClick = true;

document.querySelector('.centered-image img').addEventListener('click', function() {
    if (canClick) {
        var image = document.querySelector('.centered-image img');
        image.classList.add('shake-image');
        setTimeout(function() {
            image.classList.remove('shake-image');
        }, 500);

        canClick = false;

        setTimeout(function() {
            canClick = true;
        }, 10000);

        // Получаем информацию о том, было ли куплено улучшение
        var boostPurchased = localStorage.getItem('boostPurchased');
        
        // Определяем значение, на которое увеличим баланс
        var increment = (boostPurchased === 'true') ? 0.00010 : 0.00005;

        // Добавляем класс для отображения полосы прогресса
        var progressBarContainer = document.querySelector('.progress-bar-container');
        progressBarContainer.classList.remove('hidden');

        // Начинаем анимацию
        var progressBar = document.querySelector('.progress-bar');
        progressBar.style.animationPlayState = 'running';

        // Слушаем событие окончания анимации
        progressBar.addEventListener('animationend', function() {
            // Скрываем полосу прогресса
            progressBarContainer.classList.add('hidden');
        }, {once: true}); // Отписываемся после первого срабатывания

        // Увеличиваем баланс при нажатии на изображение
        var balanceElement = document.querySelector('.balance-container p');
        var balance = parseFloat(balanceElement.textContent.replace('Баланс: $', ''));
        balance += increment;
        balanceElement.textContent = balance.toFixed(5);

        // Сохраняем баланс в localStorage
        localStorage.setItem('balance', balance);
    }
});

// Получаем текущий баланс из localStorage, если он там есть
var balance = localStorage.getItem('balance');
if (balance === null) {
    // Если баланс еще не установлен, устанавливаем его в 0
    balance = 0;
} else {
    // Преобразуем строку в число
    balance = parseFloat(balance);
}

// Обновляем отображение баланса на странице
var balanceElement = document.querySelector('.balance-container p');
balanceElement.textContent = '' + balance.toFixed(5);

// Добавляем обработчик события для кнопки "💲"
document.querySelector('.menu-button').addEventListener('click', function() {
    var balanceElement = document.querySelector('.balance-container p');
    var balance = parseFloat(balanceElement.textContent);
    
    // Проверяем, достаточно ли у пользователя средств
    if (balance >= 0.00020) {
        window.location.href = 'pay.html';
    } else {
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var menuButtons = document.querySelectorAll('.menu-button');
    menuButtons.forEach(function(button) {
        if (button.innerText === "✨") {
            button.addEventListener('click', function() {
                window.location.href = 'boost.html';
            });
        }
    });
});
