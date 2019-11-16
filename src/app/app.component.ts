import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Angular7-CypressCodeCoverage';

  constructor(private readonly router: Router) {

  }

  changePage(): void {
    if (false) {
      console.log('this does no execute');
    } else {
      this.router.navigateByUrl('/secondpage');
    }
    
  }
}
