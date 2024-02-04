// Получаем последнее сохраненное значение баланса из localStorage
var lastBalance = localStorage.getItem('balance');
if (lastBalance === null) {
    // Если значение не найдено, устанавливаем значение по умолчанию
    lastBalance = 0;
} else {
    // Преобразуем строку в число
    lastBalance = parseFloat(lastBalance);
}

// Получаем элемент .container
var container = document.querySelector('.container');

// Создаем новый элемент для отображения баланса
var balanceDisplay = document.createElement('p');
balanceDisplay.classList.add('balance-display');

// Создаем элемент <img> для изображения
var balanceImage = document.createElement('img');
balanceImage.src = 'icon.png'; // Укажите путь к вашему изображению
balanceImage.alt = 'Balance Image'; // Добавьте атрибут alt для доступности
balanceImage.classList.add('balance-image'); // Добавляем класс для стилей

// Вставляем изображение внутрь элемента balanceDisplay
balanceDisplay.appendChild(balanceImage);

// Устанавливаем текст для баланса
balanceDisplay.textContent = lastBalance.toFixed(5); // Удалите 'Balance '

// Вставляем новый элемент перед .container
container.insertAdjacentElement('beforebegin', balanceDisplay);

// Получаем кнопку "Отправить"
var submitButton = document.querySelector('.submit-button');

// Добавляем обработчик события для клика по кнопке "Отправить"
submitButton.addEventListener('click', function() {
    // Обнуляем баланс в localStorage
    localStorage.setItem('balance', '0');

    // Обновляем отображение баланса на странице pay.html
    var balanceDisplay = document.querySelector('.balance-display');
    balanceDisplay.textContent = '0.00000';

    // Обновляем отображение баланса на странице index.html (перезагружаем страницу)
    window.location.href = 'index.html';
});

// Получаем поле ввода
var inputField = document.querySelector('.input-field');

// Функция для добавления анимации тряски
function addShakeAnimation() {
    inputField.classList.add('shake-animation');
    setTimeout(function() {
        inputField.classList.remove('shake-animation');
    }, 500);
}

// Функция для проверки длины текста и активации/деактивации кнопки
function checkInputLength() {
    if (inputField.value.length < 10) {
        submitButton.disabled = true;
        addShakeAnimation();
    } else {
        submitButton.disabled = false;
    }
}

// Добавляем обработчик события input к полю ввода
inputField.addEventListener('input', checkInputLength);

// Вызываем функцию проверки длины текста при загрузке страницы
checkInputLength();

// Добавляем класс для стилизации
balanceDisplay.classList.add('balance-display'); 

// Вставляем новый элемент в DOM перед блоком .container
container.insertAdjacentElement('beforebegin', balanceDisplay);


