import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.scss'
})
export class HeaderComponentComponent {
  menus = [
    { id: 1, name: 'About' },
    { id: 2, name: 'Works' },
    { id: 3, hover:"cc-hover", name: 'Design System', submenu:['Main Design System'] },
    { id: 4, hover:"cc-hover", name: 'Components', submenu:['Angular', 'React', 'Vue JS'] }
  ];
}
