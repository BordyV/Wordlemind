import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-modal-help',
  templateUrl: './modal-help.component.html',
  styleUrls: ['./modal-help.component.css']
})
export class ModalHelpComponent implements OnInit {

  public lineHint: string[]= [];
  constructor(public dialogRef: MatDialogRef<GameComponent>) { }

  ngOnInit(): void {
    this.lineHint = ['🟠', '⚪', '⚪', ''];
  }

}
