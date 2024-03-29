import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  @Input() line: string[]= ['', '', '', ''];

  constructor() { }

  ngOnInit(): void {
  }

  public trackColor(index: number, color: string): string {
    return color;
  }
}
