import logo from './logo.svg';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import './Test.css';

const Test = () => {
    return (
    <div className = "Test">
        <h2> Тест по математике </h2>
        <form>
            <Question1/>
            <Question2/>
            <button id="submitAnswers"> Завершить тест </button>

        </form>

        <div className="Result">
            <h2> Результаты теста </h2>
            <h3> Вы ответили правильно на ${} из ${} вопросов. </h3>
        </div>
    </div>
    );
}

export default Test;