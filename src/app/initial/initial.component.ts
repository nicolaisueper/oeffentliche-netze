import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.transitions';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class InitialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
