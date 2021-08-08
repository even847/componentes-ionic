import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes: any[] = [];
  publisher: string;

  constructor( private dataService: DataService) {
    this.publisher = '';
   }

  ngOnInit() {
    this.getHeroes();
  }

  segmentChanged( event ) {
    // console.log( event.detail.value );
    // if (event.detail.value === 'todos') {
    //   return this.publisher = '';
    // }

    this.publisher = event.detail.value;
  }

  getHeroes() {
    this.dataService.getHeroes().subscribe( heroes => {
      // console.log( heroes );
      this.superHeroes = heroes;
    });
  }

}
