import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  //constructor() {}

  text='Bla, bla, bla..';

  onChangedText(){
    this.text = 'Hello worlds';
    console.log('clicked');
  }

}
