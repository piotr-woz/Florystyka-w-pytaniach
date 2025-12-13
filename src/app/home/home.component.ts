import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
// import { VideoListComponent } from '../education/video-list/video-list.component';
import { QuizComponent } from '../quiz/quiz.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, QuizComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  showHomePage: boolean = false;
  showHomePageBox: boolean = false;
  goToQuestions: boolean = false;
  goToFirstQuestions: boolean = false;
  goToSecondQuestions: boolean = false;
  goToThirdQuestions: boolean = false;
  goToQuizSummary: boolean = false;
  goToQuizSummaryReport: boolean = false;
  turnOnRandomQuestions: boolean = false;
  goToVideoEducation: boolean = false;

  numberOfQuestions: number;
  enteredName: string = '';
  userName: string;
  nameAlert: string = '';
  onOffMessage: string = 'wyłączona';

  ngOnInit() {
    // this.backToVideoList_start();
    setTimeout(() => { this.showHomePage = true }, 25);
    setTimeout(() => { this.showHomePageBox = true }, 900);
  }

  // backToVideoList_start(): void {
  //   if (sessionStorage.getItem("value") === "back") {
  //     this.goToVideoEducation = true;
  //   }
  //   sessionStorage.clear();
  // }

  startQuiz(numberOfQuestions: number): void {
    this.userName = this.enteredName;
    if (this.userName.length > 0) {
      this.goToQuestions = true;
      this.numberOfQuestions = numberOfQuestions;
      setTimeout(()=> {
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
    this.turnOnRandomQuestions ? this.onOffMessage = "włączona" : this.onOffMessage = "wyłączona";
  }

  secondBackgroundChange(goToSecondQuestions: boolean): void {
    setTimeout(()=> {
      this.goToSecondQuestions = goToSecondQuestions;
    }, 300);
  }

  thirdBackgroundChange(goToThirdQuestions: boolean): void {
    setTimeout(()=> {
      this.goToThirdQuestions = goToThirdQuestions;
    }, 300);
  }

  homePageBoxSummaryChange(goToQuizSummary: boolean): void {
    this.goToQuizSummary = goToQuizSummary;
  }

  homePageBoxSummaryReportChange(goToQuizSummaryReport: boolean): void {
    this.goToQuizSummaryReport = goToQuizSummaryReport;
  }

  videoEducation(): void {
    this.goToVideoEducation = true;
  }
}
