import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard-key',
  templateUrl: './keyboard-key.component.html',
  styleUrls: ['./keyboard-key.component.css']
})
export class KeyboardKeyComponent implements OnInit {
  @Input() colorKey: string | undefined;
  @Output() colorKeyPlay = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  sendColorKey(colorKey: string): void {
    this.colorKeyPlay.emit(colorKey);
  }
}
