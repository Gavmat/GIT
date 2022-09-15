



// здесь мы не импортируем компонент и не наследуем extends Components, потому что
// класс который мы создаем будет на чистом js ему от реакта ничего не нужно.
// Внутрь помещаем функцию getResurses

class MarvelService {

    // чтобы заменить длинные строчки адресов api делаем так - 
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=4ae85ef0761074341f2022d724450ad9';
    // return this.getResource('https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=4ae85ef0761074341f2022d724450ad9');
    // заменяется на см. ниже

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



    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }
    // Получаем одного персонажа по id
    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?limit=9&offset=210&${this._apiKey}`);
    }

}

export default MarvelService;