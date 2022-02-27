import React from 'react';
import { AnswerObject } from '../API';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionCounter: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
  question, 
  answers, 
  callback, 
  userAnswer, 
  questionCounter, 
  totalQuestions
}) => (
  <div>
    <p className="number">
      Question: {questionCounter}/{totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{__html: question}} />
    <div>
      {answers.map(answer =>(
        <div key={answer}>
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{__html: answer}} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;