import { Injectable } from '@angular/core';
import { Album } from './Album';
import { albuns } from './mock-albuns';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(
    private messageService: MessageService
  ) { }

  getAlbuns(): Observable<Album[]> {
    const Albuns = of(albuns);
    this.messageService.add('albumService: albuns for sale');
     return Albuns;
  }

  getAlbum(id: Number): Observable<Album> {
    const album = albuns.find(a => a.id === id)!;
    this.messageService.add('albumService: fetched album id=${id}');
    return of(album);
  }
}
