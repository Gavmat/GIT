
import { Component } from 'react';
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import MarvelService from '../../services/MarvelServiсe';

// внутри компонента будет состояние, тк когда мы будем делать запрос - нужно
// будет данные где то сохранять.Тем более данные будут меняться по клику на кнопку
// поэтому делаем компонент - классовым.
class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.updateChar();
    }


    state = {
        //    первоначально name: null, потому что когда приложение будет загружаться
        // они ничего не будет знать о данных 
        name: null,
        description: null,
        // картинка превьюшка
        thumbnail: null,
        homepage: null,
        wiki: null,
    }
    // Эта запись означает, что мы создаем новое свойство внутри класса randomChar
    // те this.MarvelService с помещением туда нового конструктора.
    // те теперь в классе будет существовать новое свойство -this.MarvelService
    marvelService = new MarvelService();
    // теперь этот сервис используем и пишем метод который будет обращаться к серверу, 
    // получать данные и записывать это в стейт
    // пишем метод, который будет обновлять персонажа. Используем стрелочную функцию чтобы не терять контекст.

    updateChar = () => {
        // обращаемся к marvelService и вызываем один из его методов. Нам нужен один персонаж.Этот персонаж
        // должен получаться по какому то персон-му идентификатору id . Реализуем случайный id
        // floor - округляет до целого числа. так все id - целые числа.
        const id = Math.floor(Math.random() * (1010789 - 1009146) + 1009146)
        // const id = 1009664;

        this.marvelService
            .getCharacter(id)
            // далее результат нам нужно обработать
            .then(res => {
                //полученный объект сразу передаем в сетстейт
                this.setState(res)
            })

    }


    render() {
        // используем стейт внутри рендера.Используем функцию деструктаризации и получаем все переменные
        // и вытаскиеваем все из стейта. Далее подставляем переменные в нужные места.
        const { name, discription, thumbnail, homepage, wiki } = this.state;

        return (
            <div className="randomchar" >
                <div className="randomchar__block">
                    <img src={thumbnail} alt="Random character" className="randomchar__img" />
                    <div className="randomchar__info">
                        <p className="randomchar__name">{name}</p>
                        <p className="randomchar__descr">
                            {discription}
                        </p>
                        <div className="randomchar__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br />
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
                </div>
            </div>
        )
    }

}


export default RandomChar;