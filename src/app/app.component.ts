import { Component } from '@angular/core';
import { Menu } from './menu.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recursive-menu';
  menu: Menu = {
    title: 'Root Menu',
    isCollapsed: true,
    subMenu: [
      {
        title: 'Menu 1',
      },
      {
        title: 'Menu 2',
      },
      {
        title: 'Menu 3',
      },
      {
        title: 'Menu 4',
      }
    ]
  }
}

