import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public board: string[][] = [];
  public boardHint: string[][] = [];
  private positionInTurn: number = 0;
  private positionInLine: number = 0;
  public numberTurn: number = 8;
  // is the number of posible position in a line 
  private numberOfColorsPerLine: number = 4;
  public possibleColors: string[] = ['#0078D7','#E81224','#16C60C','#FFF100','#886CE4','#F2F2F2'];
  private dayResult: string[] = [];
  private win: boolean = false;

  constructor() { }

  ngOnInit(): void {
    //generate the board
    for(let i = 0; i < this.numberTurn; i++) {
      this.board[i] = ['', '', '', ''];
      this.boardHint[i] = [];
    }
    this.generateSolution();
  }

  public play(color: string): void {
    if(this.positionInTurn < this.numberTurn && !this.win) {
      this.board[this.positionInTurn][this.positionInLine] = color;
      this.positionInLine++;
        if(this.positionInLine === this.numberOfColorsPerLine) {
          let res = this.compareLineResult(this.board[this.positionInTurn]);
          if(res) {
            this.win = true;
            alert('win');
          } else {
          this.positionInTurn++;
          this.positionInLine = 0; 
          }
      }
    }
  }

  public generateSolution(): void {
    let possibleColorsClone = [...this.possibleColors];
    for(let i = 0; i < this.numberOfColorsPerLine; i++) {
      const randomColor = possibleColorsClone[Math.floor(Math.random() * possibleColorsClone.length)];
      possibleColorsClone.splice(possibleColorsClone.indexOf(randomColor), 1);
      this.dayResult.push(randomColor);
    }
    console.log(this.dayResult);
  }

  public compareLineResult(line:string[]): boolean {
    let dayResultClone = [...this.dayResult];

    //else result is not same and we check if color are in array
    for(let i = 0; i < this.numberOfColorsPerLine; i++) {
      //if line[i] is at the same emplacement as dayResult[i]
      if(line[i] === this.dayResult[i]) {
        this.boardHint[this.positionInTurn].push('🟠');
        dayResultClone.splice(dayResultClone.indexOf(line[i]), 1);
      }
    }
    for(let i = 0; i < this.numberOfColorsPerLine; i++) {
      //if line[i] is at the same emplacement as dayResult[i]
        if(dayResultClone.includes(line[i])) {
          this.boardHint[this.positionInTurn].push('⚪');
          dayResultClone.splice(dayResultClone.indexOf(line[i]), 1);
        }
    }
    console.log(this.boardHint)
    return JSON.stringify(this.dayResult) === JSON.stringify(line);
  }

  public deleteLastColorInLine(): void {
    if(this.positionInLine > 0 && !this.win) {
      this.positionInLine--;
      this.board[this.positionInTurn][this.positionInLine] = '';
    }
  }

}
