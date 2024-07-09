import QuestionText from "./QuestionText";

const Question1 = () => {
    return (
    <div className = "Question1">
        <div>
            <QuestionText props={"Вопрос1: Сколько будет 2 + 2?"}/>
            <label><input type="radio" name="q1" value="a"/> 3 </label>
            <label><input type="radio" name="q1" value="b"/> 4 </label>
            <label><input type="radio" name="q1" value="c"/> 5 </label>
        </div>
    </div>
    );
}

export default Question1;