document.getElementById("backButton").onclick = function() {
    window.location.href = "index.html";
};

document.addEventListener("DOMContentLoaded", function() {
    var boostButton = document.querySelector('.center-block');

    // Проверяем, была ли кнопка уже нажата при предыдущих посещениях страницы
    if (localStorage.getItem('boostButtonClicked') === 'true') {
        // Если да, делаем кнопку неактивной и меняем её стиль
        boostButton.classList.add('clicked');
        boostButton.disabled = true;
        boostButton.style.backgroundColor = 'grey';
    }

    boostButton.addEventListener('click', function() {
        // Проверяем, не была ли кнопка уже нажата
        if (!boostButton.classList.contains('clicked')) {
            // Получаем текущий баланс из localStorage страницы index.html
            var balance = localStorage.getItem('balance');
            
            // Проверяем, достаточно ли у пользователя средств для покупки
            if (balance >= 0.00010) {
                // Уменьшаем баланс на 0.00010
                balance -= 0.00010;
                
                // Обновляем отображение баланса на странице index.html
                localStorage.setItem('balance', balance);
                
                // Записываем в localStorage информацию о том, что улучшение было куплено
                localStorage.setItem('boostPurchased', 'true');
                
                // Делаем кнопку неактивной и меняем её стиль
                boostButton.classList.add('clicked');
                boostButton.disabled = true;
                boostButton.style.backgroundColor = 'grey';
                
                // Сохраняем информацию о том, что кнопка была нажата
                localStorage.setItem('boostButtonClicked', 'true');
            } else {
                // Если у пользователя недостаточно средств, выводим сообщение или предпринимаем другие действия
                alert('Недостаточно средств для покупки');
            }
        } else {
            // Если кнопка уже была нажата, выводим сообщение или предпринимаем другие действия
            alert('Улучшение уже было куплено');
        }
    });
});
