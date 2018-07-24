import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="markdown" style="margin:0 20px">
    <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent {
  title = 'app';
}
