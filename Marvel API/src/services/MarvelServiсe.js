

// здесь мы не импортируем компонент и не наследуем extends Components, потому что
// класс который мы создаем будет на чистом js ему от реакта ничего не нужно.
// Внутрь помещаем функцию getResurses

class MarvelService {

    // чтобы заменить длинные строчки адресов api делаем так - 
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=4ae85ef0761074341f2022d724450ad9';
    // return this.getResource('https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=4ae85ef0761074341f2022d724450ad9');
    // заменяется на см. ниже

    // почему await нужно ставить перед присвоением, но не перед return?
    //     метод getResource у нас асинхронный: мы не знаем точно через сколько будет получен ответ
    //      от сервера, поэтому хотим его подождать (await), прежде чем код пойдет дальше.
    // А вот метод transformCharacter абсолютно синхронный. Он не работает с сервером/промисами/таймерами и тп.
    //  Он просто принимает на вход данные и возвращает модифицированные. За счет этого js точно знает, 
    //  сколько времени ему понадобится на этот процесс и результат функции всегда будет получен точно и 
    //  перед return.

    getResource = async (url) => {
        // по определенному url запрашиваются данные через fetch, ждем ответа, если будет
        // какая то серверная ошибка мы выводим ее в консоль. Если все ок - выводим ответ 
        // преобразованный в формат json 
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url},status:${res.status}`);
        }
        return await res.json();
    }
    // Далее будем делать какие то запросы к нашему api. И в этот класс добавляем методы которые
    // будут этим заниматься.

    // Получаем всех персонажей. Внутри будем использовать getResource



    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }


    // return this.getResource(`${this._apiBase}characters/${id}?limit=9&offset=210&${this._apiKey}`);
    // у вас была функция getCharacter, которая возвращала this.getResource без async, но присвоив
    // this.getResource переменой res, вы добавили async. - Просто тогда нам достаточно было вернуть 
    // промис из функции и все. При использовании мы его обрабатывали через then. А вот тут мы результат 
    // промиса передаем в transformCharacter. То есть, нам уже нужно, чтобы был какой-то результат, 
    // чтобы его обработать.


    // В randomChart мы сформировали стейт.Но в таком виде нам пришлось бы эти операции копировать в каждый компонент
    //         (если их несколько) по получению персонажа и придется код еще раз полностью копировать из метода в метод
    // это нерационально. Поэтому мы эти операции централизуем. И переносим функцию по вычленению данных сюда.

    _transformCharacter = (char) => {
        // в этом методе мы будем получать какие то данные и возвращать трансформированный объект. 
        // если на входе мы будем получать огромный объект с кучей данных, то возвращать тот, который нам нужен
        return {
            // Здесь нет никакой зависимости от предыдущего стейта. тк персонаж всегда разный
            // поэтому формируем объект
            name: char.name,
            description: char.description,
            // там есть и расширение картинки. поэтому будем складывать строки. название+jpg description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url
        }
    }

}

export default MarvelService;