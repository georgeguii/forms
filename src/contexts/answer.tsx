import { createContext } from "react";

interface Answer {
  questionId: string;
  value: string;
  description: string
}

export const AnswerContext = createContext({} as any);