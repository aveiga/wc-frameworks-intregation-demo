import { Component, Input, Output, EventEmitter } from '@angular/core';

interface NameObj {
  name: String,
  number: Number
}

@Component({
  selector: 'custom-angular-grid',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // encapsulation: ViewEncapsulation.Native
})

export class AppComponent {
  @Input() name = 'friend';
  focus: string;
  focusSet = false;

  @Output('nameobj') nameObj: EventEmitter<NameObj> = new EventEmitter();

  setFocus(value) {
    this.focus = value;
    this.focusSet = true;
    
    let obj:NameObj = {
      name: value,
      number: 1
    };

    this.nameObj.emit(obj);
  }
}