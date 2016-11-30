import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.transitions';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class StructureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
