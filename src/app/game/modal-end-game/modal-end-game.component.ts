import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GameComponent } from '../game.component';

@Component({
  selector: 'app-modal-end-game',
  templateUrl: './modal-end-game.component.html',
  styleUrls: ['./modal-end-game.component.css']
})
export class ModalEndGameComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GameComponent>,
    @Inject(MAT_DIALOG_DATA) public win: boolean) { }

  ngOnInit(): void {
  }

}
