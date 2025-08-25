import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Song } from './song';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatToolbarModule, MatSelectModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedArtist = 'All';
  selectedAlbum = 'All';

  songs: Song[] = [
    { name: 'Kesariya', artist: 'Arijit Singh', album: 'Brahmastra', duration: '4:28', rating: 5 },
    { name: 'Tum Mile', artist: 'KK', album: 'Tum Mile', duration: '5:12', rating: 4 },
    { name: 'Naatu Naatu', artist: 'Rahul Sipligunj', album: 'RRR', duration: '3:45', rating: 5 },
    { name: 'Srivalli', artist: 'Sid Sriram', album: 'Pushpa', duration: '4:02', rating: 4 },
    { name: 'Jai Jai Shivshankar', artist: 'Vishal Dadlani', album: 'War', duration: '3:58', rating: 3 }
  ];

  get artists(): string[] {
    return ['All', ...new Set(this.songs.map(song => song.artist))];
  }

  get albums(): string[] {
    return ['All', ...new Set(this.songs.map(song => song.album))];
  }

  get filteredSongs(): Song[] {
    return this.songs.filter(song =>
      (this.selectedArtist === 'All' || song.artist === this.selectedArtist) &&
      (this.selectedAlbum === 'All' || song.album === this.selectedAlbum)
    );
  }

  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
