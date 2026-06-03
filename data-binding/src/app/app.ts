import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentDashboard } from './student-dashboard/student-dashboard';
@Component({
  selector: 'app-root',
  imports: [StudentDashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('data-binding');
}
