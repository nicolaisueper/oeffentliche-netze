import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {InitialComponent} from './initial/initial.component';
import {Routing} from './routing';
import { StructureComponent } from './structure/structure.component';
import { PotsComponent } from './pots/pots.component';

@NgModule({
    declarations: [
        AppComponent,
        InitialComponent,
        StructureComponent,
        PotsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}