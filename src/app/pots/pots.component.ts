import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.transitions';

@Component({
  selector: 'app-pots',
  templateUrl: './pots.component.html',
  styleUrls: ['./pots.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class PotsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
