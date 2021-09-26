import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/inicio', icon: 'browsers' },
    { title: 'Login', url: '/login', icon: 'person' },
    { title: 'Restaurar', url: '/restaurar', icon: 'key' },
  ];

  constructor() {}
}

