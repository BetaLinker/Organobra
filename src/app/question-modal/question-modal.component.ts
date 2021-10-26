import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.css']
})
export class QuestionModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<QuestionModalComponent>
  ) { }

  ngOnInit(): void {
  }

  Close(param: boolean){
    this.dialogRef.close(param);
  }
}
