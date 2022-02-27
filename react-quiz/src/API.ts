import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

export type QuestionState = Question & {answers: string[]};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HASD = "hard"
}

export const fetchQuizQuestions = async (
  amount: number, 
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => (
    {
      ...question, // es6 syntax: called "spread" to access all of object's attributes
      answers: shuffleArray([
        ...question.incorrect_answers, 
        question.correct_answer
      ]),
    }));
};