import { Component, OnInit } from '@angular/core';
import { Album } from '../Album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  albuns: Album[] = [];

  constructor(private AlbumService: AlbumService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.AlbumService.getAlbuns()
      .subscribe(albuns => this.albuns = albuns.slice(3, 4));
  }
}