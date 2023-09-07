import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      { name: 'description', content: '9ja bdc landing page' },
      { name: 'author', content: 'ABCON | SBSC' },
      {
        name: 'keywords',
        content:
          'bdc, naijabdc, 9jaBdc, exchange, Bureau De Change, operator, parallel, sell, fx',
      },
    ]);
    this.setTitle('9ja-bdc');
  }
  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
