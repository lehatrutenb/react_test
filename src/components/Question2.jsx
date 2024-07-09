import QuestionText from "./QuestionText";

const Question2 = () => {
    return (
    <div className = "Question2">
        <div>
            <QuestionText props={"Вопрос2: Сколько будет 10 * 5?"}/>
            <label><input type="radio" name="q2" value="a"/> 40 </label>
            <label><input type="radio" name="q2" value="b"/> 50 </label>
            <label><input type="radio" name="q2" value="c"/> 60 </label>
        </div>
    </div>
    );
}

export default Question2;