import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { QuestionModalComponent } from './question-modal/question-modal.component';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {

  constructor() {

  }

  ngAfterViewInit() {

  }

}




