import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../summary/summary.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Question } from '../quiz/question.model';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit {
  questionList: Question[] = [];
  imagePath: string = "assets/quiz_images/";

  constructor (private summaryService: SummaryService) {}

  ngOnInit(): void {
    this.questionList = this.summaryService.getQuestionList();
  }
}
