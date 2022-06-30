/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

const moviesSorted = movieDB.movies.sort(),
      adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      filmList = document.querySelectorAll('.promo__interactive-item');



// 1
adv.forEach(item => {
    item.remove();
});

// 2
genre.textContent = 'Драма';

// 3 
poster.style.backgroundImage = 'url(../img/bg.jpg)';

// 4 и 5
for(let i = 0; i < moviesSorted.length; i++) {
    filmList.forEach(item => {
        item.innerHTML = `${i + 1} ${moviesSorted[i]}`;
        i++;
    });
}

/* аналогичный метод с формированием массива по новой
    movieSorted.forEach((film, i) => {
        movielist.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
        `;
    });
*/











