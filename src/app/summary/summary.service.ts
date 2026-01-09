import { Injectable } from '@angular/core';

import { Question } from '../quiz/question.model';

@Injectable({ providedIn: 'root' })
export class SummaryService {
  #questionList: Question[] = [];

  addQuestionList(allQuestions: Question[]) {
    this.#questionList = allQuestions;
  }

  getQuestionList() {
    return [...this.#questionList];
  }
}
