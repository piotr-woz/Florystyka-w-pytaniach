export interface Question {
  title: string;
  answers: { answer: string; isCorrect: boolean }[];
  image: string;
  id: number;
  questionName: string;
  answersInNewOrder?: string[];
  correctAnswer?: number;
  userAnswer?: number;
}
