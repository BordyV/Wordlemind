import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-hint',
  templateUrl: './line-hint.component.html',
  styleUrls: ['./line-hint.component.css']
})
export class LineHintComponent implements OnInit {
  @Input() lineHint: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
