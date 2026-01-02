import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { QuestionsService } from './questions.service';
import { SummaryService } from '../summary/summary.service';
import { SummaryComponent } from '../summary/summary.component';
import { FormsModule } from '@angular/forms';

import { Question } from './question.model';

@Component({
    selector: 'app-quiz',
    imports: [CommonModule, FormsModule, SummaryComponent],
    templateUrl: './quiz.component.html',
    styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit {
  @Input() goToQuestions: boolean;
  @Input() numberOfQuestions: number;
  @Input() userName: string;
  @Input() turnOnRandomQuestions: boolean;
  @Output() backgroundChangedSecondTime = new EventEmitter<boolean>();
  @Output() backgroundChangedThirdTime = new EventEmitter<boolean>();
  @Output() quizSummaryStarted = new EventEmitter<boolean>();
  @Output() quizSummaryReportStarted = new EventEmitter<boolean>();

  allQuestions: Question[] = [];
  showQuizBox: boolean = false;
  showNextQuestionButton: boolean = false;
  goToQuizSummary: boolean = false;
  poorQuizScore: boolean = false;
  goToQuizSummaryReport: boolean = false;

  id: number;
  idSentance: string;
  title: string;
  answers: string[];
  correctAnswer: number;
  image: string | null;
  answerAlert: string = "";

  currentQuestionIndex: number = 0;
  score: number = 0;
  scoreCalculation: number;
  chosenQuestionIndex: number;

  arrayWithAnswersInNewOrder: string[][] = [];
  arrayWithCorrectAnswerIndexes: number[] = [];
  arrayWithChosenQuestionIndexes: number[] = [];

  constructor(private questionsService: QuestionsService, private summaryService: SummaryService) {}

  // landscape animations and random questions method
  ngOnInit() {
    let timeToShowQuizBox: number;
    let timeToShowQuestions: number;
    if (window.innerWidth < 576) {
      timeToShowQuizBox = 0;
      timeToShowQuestions = 0;
    } else {
      timeToShowQuizBox = 200;
      timeToShowQuestions = 1200;
    }

    this.allQuestions = this.questionsService.questions;
    if (this.turnOnRandomQuestions) {
      this.allQuestions = this.allQuestions.sort(() => 0.5 - Math.random());
    }
    this.allQuestions.length = this.numberOfQuestions;

    setTimeout(() => { this.showQuizBox = true }, timeToShowQuizBox);
    setTimeout(() => {
      this.showQuestions(this.allQuestions);
      this.showNextQuestionButton = true;
    }, timeToShowQuestions);
  }

  showQuestions(questions: Question[]): void {
    this.id = questions[this.currentQuestionIndex].id;
    this.idSentance = `Pytanie ${questions[this.currentQuestionIndex].id}`;
    this.title = questions[this.currentQuestionIndex].title;
    const randomAnswers = questions[this.currentQuestionIndex].answers.sort(() => 0.5 - Math.random());
    this.answers = randomAnswers.map(item => item.answer);
    this.correctAnswer = randomAnswers.map(item => item.isCorrect).indexOf(true);
    this.image = questions[this.currentQuestionIndex].image ? `assets/quiz_images/${questions[this.currentQuestionIndex].image}` : null;
  }

  onChange(e: any): void {
    this.chosenQuestionIndex = parseInt(e.target.value);
  }

  nextQuestion(id: number): void {
    if (this.chosenQuestionIndex >= 0) {

      if (this.chosenQuestionIndex === this.correctAnswer) {
        this.score++;
      }
      this.arrayWithAnswersInNewOrder.push(this.answers);
      this.arrayWithCorrectAnswerIndexes.push(this.correctAnswer);
      this.arrayWithChosenQuestionIndexes.push(this.chosenQuestionIndex);
      this.currentQuestionIndex++;

      if (this.currentQuestionIndex === this.allQuestions.length) {
        this.scoreCalculation = this.score / this.numberOfQuestions;
        if (this.scoreCalculation <= 0.5) {
          this.poorQuizScore = true;
        }
        this.goToQuestions = false;
        this.goToQuizSummary = true;
        this.quizSummaryStarted.emit(this.goToQuizSummary);
      } else {
        this.showQuestions(this.allQuestions);
        this.chosenQuestionIndex = undefined;

        // background changes
        const goToSecondQuestions = true;
        const goToThirdQuestions = true;
        if (this.currentQuestionIndex === 5) {
          this.backgroundChangedSecondTime.emit(goToSecondQuestions);
        } else if (this.currentQuestionIndex === 10) {
          this.backgroundChangedThirdTime.emit(goToThirdQuestions);
        }
      }
    } else {
      this.answerAlert = 'zaznacz jedną z odpowiedzi...';
      setTimeout(() => {
        this.answerAlert = '';
      }, 1400);
    }
  }

  showQuizSummaryReport() {
    this.allQuestions.forEach((item, index) => {
      item['answersInNewOrder'] = this.arrayWithAnswersInNewOrder[index];
      item['correctAnswer'] = this.arrayWithCorrectAnswerIndexes[index];
      item['userAnswer'] = this.arrayWithChosenQuestionIndexes[index]});
    this.summaryService.addQuestionList(this.allQuestions);
    this.goToQuizSummaryReport = true;
    this.quizSummaryReportStarted.emit(this.goToQuizSummaryReport);
  }
}
