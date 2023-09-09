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
      { name: 'description', content: 'EnTurquoiseGlobal' },
      { name: 'author', content: 'ABCON | SBSC' },
      {
        name: 'EnTurquoiseGlobal',
        content:
          'EnTurquoiseGlobal, EnTurquoiseGlobal',
      },
    ]);
    this.setTitle('EnTurquoiseGlobal');
  }
  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
