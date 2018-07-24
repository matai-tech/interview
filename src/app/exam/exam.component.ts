import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styles: [``]
})
export class ExamComponent implements OnInit {
  code1 = `
    class Observable \{
      _subscribe: any;
      constructor(subscribe) \{
        this._subscribe = subscribe
      \}
      // ...
    \}

    const observable = new Observable((o) => \{
      // ...
    \});

    const observer = \{
      next: (value) => console.log(value)
    \}

    observable.subscribe(observer); // 输出结果：1  2
  `;

  constructor() { }

  ngOnInit() {
  }

}
