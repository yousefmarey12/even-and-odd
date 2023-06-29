import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  even: Number[] = []
  odd: Number[] = []
  counter: any
  obj: any
  changeNumber(inp: any) {
    this.obj = inp
    this.counter = setInterval(() => {
      this.obj.number += 1
      if (this.obj.number % 2 == 0) {
        this.even.push(this.obj.number)
      } 
      if (inp.number % 2 == 1) {
        this.odd.push(this.obj.number)
      } 
    }, 1000)
      }
      
  }
 

