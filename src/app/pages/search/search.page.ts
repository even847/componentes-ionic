import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums: any[] = [];
  textoBuscar: string;

  constructor( private dataService: DataService) {
    this.textoBuscar = '';
   }

  ngOnInit() {
    this.obtenerAlbums();
  }

  onSearchChange( event ) {
    // console.log( event );
    this.textoBuscar = event.detail.value;
  }

  obtenerAlbums() {
    this.dataService.getAlbums().subscribe( albums => {
      this.albums = albums;
    });
  }

}
