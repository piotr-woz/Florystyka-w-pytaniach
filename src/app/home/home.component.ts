import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { QuizComponent } from '../quiz/quiz.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent, QuizComponent, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements OnInit {
  showHomePage: boolean = false;
  showHomePageBox: boolean = false;
  goToQuestions: boolean = false;
  goToFirstQuestions: boolean = false;
  goToSecondQuestions: boolean = false;
  goToThirdQuestions: boolean = false;
  goToQuizSummary: boolean = false;
  goToQuizSummaryReport: boolean = false;
  turnOnRandomQuestions: boolean = false;

  numberOfQuestions: number;
  enteredName: string = '';
  userName: string;
  nameAlert: string = '';
  onOffMessage: string = 'wyłączona';

  ngOnInit() {
    setTimeout(() => {
      this.showHomePage = true;
    }, 25);
    setTimeout(() => {
      this.showHomePageBox = true;
    }, 900);
  }

  startQuiz(numberOfQuestions: number): void {
    this.userName = this.enteredName;
    if (this.userName.length > 0) {
      this.goToQuestions = true;
      this.numberOfQuestions = numberOfQuestions;
      setTimeout(() => {
        this.goToFirstQuestions = true;
      }, 1250);
    } else {
      this.nameAlert = 'uzupełnij to pole :)';
      setTimeout(() => {
        this.nameAlert = '';
      }, 1200);
    }
  }

  randomQuestions(): void {
    this.turnOnRandomQuestions = !this.turnOnRandomQuestions;
    this.turnOnRandomQuestions
      ? (this.onOffMessage = 'włączona')
      : (this.onOffMessage = 'wyłączona');
  }

  secondBackgroundChange(goToSecondQuestions: boolean): void {
    setTimeout(() => {
      this.goToSecondQuestions = goToSecondQuestions;
    }, 300);
  }

  thirdBackgroundChange(goToThirdQuestions: boolean): void {
    setTimeout(() => {
      this.goToThirdQuestions = goToThirdQuestions;
    }, 300);
  }

  homePageBoxSummaryChange(goToQuizSummary: boolean): void {
    this.goToQuizSummary = goToQuizSummary;
  }

  homePageBoxSummaryReportChange(goToQuizSummaryReport: boolean): void {
    this.goToQuizSummaryReport = goToQuizSummaryReport;
  }
}
