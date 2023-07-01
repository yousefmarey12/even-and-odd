import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements AfterViewInit {
  
  @Output() started = new EventEmitter<{number: number}>()
  @Output() stoppedDisplay  = new EventEmitter<{even: any[], odd: any[]}>()
  @Input() intervalFunction: any
  onStart() {
    this.started.emit({
      number: 0
     })
  }
  ngAfterViewInit(): void {
    
  }
  stopDisplay() {
    this.stoppedDisplay.emit({even: [], odd: []})
    clearInterval(this.intervalFunction)
   }

}
