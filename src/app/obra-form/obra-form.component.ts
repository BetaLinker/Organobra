import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ListProprietariosFormComponent } from '../list-proprietarios-form/list-proprietarios-form.component';

@Component({
  selector: 'app-obra-form',
  templateUrl: './obra-form.component.html',
  styleUrls: ['./obra-form.component.css']
})
export class ObraFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ObraFormComponent>, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  search(){

    const dialogRef = this.dialog.open(ListProprietariosFormComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

}
