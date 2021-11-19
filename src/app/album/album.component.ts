import { Component, OnInit } from '@angular/core';
import { Album } from "../Album";
import { AlbumService } from '../album.service';



@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  
})
export class AlbumComponent implements OnInit {

  albuns: Album[] = [];
  
  constructor(
    private albumService: AlbumService,
 
  ) { }

  ngOnInit(): void {
    this.getAlbuns();
  }

  getAlbuns(): void {
   this.albumService.getAlbuns()
     .subscribe(albuns => this.albuns = albuns);
  }

}
