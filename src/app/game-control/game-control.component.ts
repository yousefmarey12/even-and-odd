import { FunctionExpr } from '@angular/compiler';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() started = new EventEmitter<{number: number, endEvent?: any}>()
  @Input() element: { number: number; endEvent?: any; } | undefined
  @Input() intervalFunction: any
  onStart() {
    this.started.emit({
      number: 0
     })
  }
  stopDisplay() {
    clearInterval(this.intervalFunction)
   }
}
