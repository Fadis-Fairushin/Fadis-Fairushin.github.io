let language = true; // если true, то включен переход на английский. Если false, то обратно

const title = document.querySelector('title');
const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');
const p_oblasti = document.getElementsByClassName('p_oblasti')[0];
const chat_bot = document.getElementsByClassName('chat-bot')[0];
const auto_bot = document.getElementsByClassName('auto-bot')[0];
const p_learning = document.getElementsByClassName('p_learning')[0];
const p1 = document.getElementsByClassName('p1')[0];
const p2 = document.getElementsByClassName('p2')[0];
const p3 = document.getElementsByClassName('p3')[0];
const telegramChannel = document.getElementsByClassName('telegramChannel')[0];
const telegramProfile = document.getElementsByClassName('telegramProfile')[0];
const githubProfile = document.getElementsByClassName('githubProfile')[0];
const languageButton = document.getElementById('languageButton');

function changeLanguage() {
    if (language) {
        title.textContent = "My business card";
        h1.textContent = "Hi there, I'm Fairushin Fadis | Tailogs";
        h3.textContent = "An empty-headed and clumsy programmer";
        p_oblasti.textContent = "I am studying programming in areas such as:"
        chat_bot.textContent = "Creating chat bots";
        auto_bot.textContent = "Automation and development of bots for games";
        p_learning.textContent = "I work with languages such as:";
        p1.textContent = "I'm learning a little Linux, but the main system is Windows";
        p2.textContent = "In the future, when I learn everything above, I will learn React, Vue, TypeScript and PowerShell. I also want to become proficient in Bash and Batch.";
        p3.textContent = "In recent years I have been tired and lazy every day, so I made a decision a week ago that I would slowly crawl towards change. Perhaps everything will change in the future and I really want to believe in it. And yes, forgive me for my English, because I don’t know it, but I’m using a translator. I'm from Russia myself...";
        telegramChannel.innerHTML = 'My telegram channel: <a class="a_telegramChannel" href="https://t.me/fadis_org" target="_blank">https://t.me/fadis_org</a>';
        telegramProfile.innerHTML = 'My telegram profile: <a class="a_telegramProfile" href="https://t.me/my_life_is_too_dark" target="_blank">https://t.me/my_life_is_too_dark</a>';
        githubProfile.innerHTML = 'My github profile: <a class="a_githubProfile" href="https://github.com/Fadis-Fairushin" target="_blank">https://github.com/Fadis-Fairushin</a>';
        languageButton.textContent = "Change Language to Russian";
    } else {
        title.textContent = "Моя визитка";
        h1.textContent = "Привет, я Файрушин Фадис | Тайлогс";
        h3.textContent = "Пустоголовый и неуклюжий программист";
        p_oblasti.textContent = "Я изучаю программирование в таких областях, как:"
        chat_bot.textContent = "Создание чат-ботов";
        auto_bot.textContent = "Автоматизация и разработка ботов для игр";
        p_learning.textContent = "Я работаю с такими языками, как:";
        p1.textContent = "Я понемногу изучаю Linux, но основная система - Windows";
        p2.textContent = "В будущем, когда я изучу все вышеперечисленное, то буду изучать React, Vue, TypeScript и PowerShell. Я также хочу стать опытным в Bash и Batch.";
        p3.textContent = "В последние годы я каждый день устаю и ленюсь, поэтому неделю назад я принял решение медленно ползти к переменам. Возможно, все изменится в будущем, и я очень хочу в это верить.";
        telegramChannel.innerHTML = 'Мой телеграм-канал: <a class="a_telegramChannel" href="https://t.me/fadis_org" target="_blank">https://t.me/fadis_org</a>';
        telegramProfile.innerHTML = 'Мой телеграм-профиль: <a class="a_telegramProfile" href="https://t.me/my_life_is_too_dark" target="_blank">https://t.me/my_life_is_too_dark</a>';
        githubProfile.innerHTML = 'Мой профиль на GitHub:  <a class="a_githubProfile" href="https://github.com/Fadis-Fairushin" target="_blank">https://github.com/Fadis-Fairushin</a>';
        languageButton.textContent = "Изменить язык на английский";
    }
}

// Добавляем обработчик события click
languageButton.addEventListener('click', function() {
    language = !language;
    changeLanguage();
});