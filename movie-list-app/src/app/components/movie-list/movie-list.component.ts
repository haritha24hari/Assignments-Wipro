import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-movie-list',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  selectedGenre = 'All';
  Math = Math;

  movies = [
    {
      title: 'RRR',
      genre: 'Action',
      rating: 5,
      description: ' Powerful and Emotional Action Drama.',
      poster: 'https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg',
    },
    {
      title: 'The Dark Knight',
      genre: 'Action',
      rating: 5,
      description: 'Batman faces off against the Joker in Gotham.',
      poster:
        'https://w0.peakpx.com/wallpaper/578/765/HD-wallpaper-dark-knight-poster-batman-dark-knight.jpg',
    },
    {
      title: 'Fear',
      genre: 'Thriller',
      rating: 4,
      description:
        'The movie explores themes of fear, mental illness, and the human psyche, often using suspenseful and unsettling elements to create a sense of unease and dread. ',
      poster:
        'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fear-et00416214-1729067455.jpg',
    },
    {
      title: 'MAD',
      genre: 'Comedy',
      rating: 5,
      description:
        'Engineering students live carefree in their hostel, playing pranks on their warden while dealing friendships, romance and unexpected challenges.',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTBiNDVkOWQtMGZhMC00MDA0LWI4ZjUtMWE3YjRmMDc3NzBjXkEyXkFqcGc@._V1_.jpg',
    },
    {
      title: 'Manjummel Boys',
      genre: 'Drama',
      rating: 5,
      description:
        'After one of them falls inside a dangerous pit in the Guna Caves, a group of childhood friends muster courage to rescue him out of a space from where a return is next to impossible.',
      poster:
        'https://c.saavncdn.com/779/Manjummel-Boys-Telugu-2024-20240410005403-500x500.jpg',
    },
  ];

  get genres(): string[] {
    return ['All', ...new Set(this.movies.map((m) => m.genre))];
  }

  get filteredMovies() {
    return this.selectedGenre === 'All'
      ? this.movies
      : this.movies.filter((m) => m.genre === this.selectedGenre);
  }

  get averageRating(): number {
    const total = this.movies.reduce((sum, m) => sum + m.rating, 0);
    return total / this.movies.length;
  }

  getStars(rating: number): number[] {
    return Array.from({ length: rating }, (_, i) => i + 1);
  }

  isTopRated(movie: any): boolean {
    return movie.rating === 5;
  }
}