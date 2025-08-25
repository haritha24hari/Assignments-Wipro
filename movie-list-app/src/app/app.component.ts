import { Component } from '@angular/core';
import { MovieListComponent } from './components/movie-list/movie-list.component';  // Import the standalone component
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieListComponent, MatToolbarModule],  // Import here
  template: `
    <mat-toolbar color="primary">
      <span>🎬 Movie List App</span>
    </mat-toolbar>
    <app-movie-list></app-movie-list>  <!-- Using the selector -->
  `,
  styles: [`
    mat-toolbar {
      display: flex;
      justify-content: center;
      font-size: 20px;
      font-weight: bold;
    }
  `]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
