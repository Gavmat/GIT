
import { Component } from 'react';
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';


// внутри компонента будет состояние, тк когда мы будем делать запрос - нужно
// будет данные где то сохранять.Тем более данные будут меняться по клику на кнопку
// поэтому делаем компонент - классовым.
class RandomChar extends Component {


    state = {
        //    первоначально name: null, потому что когда приложение будет загружаться
        // они ничего не будет знать о данных 
        name: null,
        discription: null,
        // картинка превьюшка
        thumbnail: null,
        homepage: null,
        wiki: null,
    }
    // Эта запись означает, что мы создаем новое свойство внутри класса randomChar
    // те this.MarvelService с помещением туда нового конструктора.
    // те теперь в классе будет существовать новое свойство -this.MarvelService
    marvelService = new MarvelService()


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