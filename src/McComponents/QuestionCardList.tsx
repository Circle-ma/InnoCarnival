import { QuestionsProps } from "../Questions";
import QuestionCard from "./QuestionCard";

type questionListProps = {
  questions: QuestionsProps[];
};

const QuestionCardList: React.FC<questionListProps> = ({ questions }) => {
  return (
    <>
      {questions.map((question) => {
        return (
          <QuestionCard
            key={question.questionNumber}
            questionNumber={question.questionNumber}
            topic={question.topic}
            description={question.description}
            option={question.option}
          />
        );
      })}
    </>
  );
};

export default QuestionCardList;
