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
        isCollapsed: true,
        subMenu: [
          {
            title: 'Menu 3.1',
          },
          {
            title: 'Menu 3.2',
          },
          {
            title: 'Menu 3.3',
          },
          {
            title: 'Menu 3.4',
          }
        ]
      },
      {
        title: 'Menu 4',
      }
    ]
  }
}

