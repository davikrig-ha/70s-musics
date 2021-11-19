import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../Album';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AlbumService } from '../album.service';




@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {

  album: Album | undefined;

  

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location
  ) { }

  ngOnInit(): void {
           
   this.getAlbum();
  }

  getAlbum(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id)
     .subscribe(album => this.album = album);
  }

  goBack(): void {
    this.location.back();
  }

}
