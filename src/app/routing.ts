import {RouterModule, Route} from '@angular/router';
import {InitialComponent} from './initial/initial.component';
import {StructureComponent} from './structure/structure.component';
import {PotsComponent} from './pots/pots.component';

export const routes: Route[] = [
    {path: 'initial', component: InitialComponent},
    {path: 'structure', component: StructureComponent},
    {path: 'pots', component: PotsComponent},
    {path: '', redirectTo: 'initial', pathMatch: 'full'},
    {path: '*', component: InitialComponent}
];

export const Routing = RouterModule.forRoot(routes);