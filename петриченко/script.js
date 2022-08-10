
'use strict';




const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов уже просмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов уже просмотрели?', '');
        }
    },

    rememberMyFilms: function () {

        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("вы киноман ");
        } else {
            console.log("ошибка")
        }

    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    },

    toggleVisibleMyDB: function () {

        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;

        }
    },


    writeYourGenres: function () {

        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == "" || genre == null) {
                console.log("ds ввели некорректные данные или не ввели ничего ");
                i--;

            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {

            console.log(`любимый жанр ${i + 1} - это ${item}`);
        });

    },
};




