import { Component, OnInit } from '@angular/core';
import {PeriodicElement} from 'src/app/viagem/viagem.component'
import {Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.scss']
})
export class ElementDialogComponent implements OnInit {
  element!: PeriodicElement;


  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: PeriodicElement,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
    
  ) {}

  ngOnInit():void{}
  
  onNoClick(): void {
    this.dialogRef.close();
  }

} 
  