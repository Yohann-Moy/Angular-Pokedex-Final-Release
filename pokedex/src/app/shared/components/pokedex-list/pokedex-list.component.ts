import { Component, OnInit } from '@angular/core';
import { RegionService } from '../../../pokemon/services/regions.service';
import { Region } from 'src/app/shared/models/region';


@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss']
})
export class PokedexListComponent implements OnInit {

  constructor(private regionService: RegionService) { }

  regionList: Region[];

  ngOnInit() {
    this.regionService.getRegion().subscribe(
      data => {
        this.regionList = data;
      }
    );
  }

}
