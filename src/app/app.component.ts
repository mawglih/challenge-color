import { Component } from '@angular/core';
import { lorem } from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  success = false;
  randomText = lorem.sentence();
  text = '';
  compare = (char: string, i: number) => {
    if(!this.text) {
      return 'gray';
  } else if(char === this.text[i]) {
      return 'green';
    } else {
      return 'red';
    }

  }
  handleChange(value: string) {
    console.log(value);
    this.text =  value;
    this.success = this.randomText === this.text;
  }
}
