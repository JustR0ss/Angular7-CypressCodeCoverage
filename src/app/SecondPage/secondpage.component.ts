import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.less']
})
export class SecondpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.thisIsBlankFunction();
  }

  thisIsBlankFunction(): void {
    if(false) {
      console.log(1);
    } else {
      console.log(2);
    }
  }

}
