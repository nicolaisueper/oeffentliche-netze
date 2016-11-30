import {Component, HostListener} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    private slides: Array<string> = [
        '/initial',
        '/structure',
        '/pots'
    ];

    private headings: Array<string> = [
        'Festnetz-, Internet- und Mobilfunkzugang',
        'Inhaltsverzeichnis',
        'Plain old telephone service'
    ];

    currentSlide: string = this.slides[0];
    currentHeading: string = this.headings[0];


    constructor(private router: Router) {
        this.router.events.subscribe(
            route => {
                this.currentSlide = route.url;
                let idx = this.slides.indexOf(this.currentSlide);
                this.currentHeading = this.headings[idx];
                console.log(this.currentSlide);
            }
        );
    }

    isFirstSlide(): boolean {
        return this.slides.indexOf(this.currentSlide) === 0;
    }

    isLastSlide(): boolean {
        return this.slides.indexOf(this.currentSlide) === this.slides.length - 1;
    }

    previousSlide() {
        console.debug('previous slide called');
        let prev: number = this.slides.indexOf(this.currentSlide) - 1;
        if (prev < 0) {
            return;
        }
        this.router.navigate([this.slides[prev]]);
        this.currentHeading = this.headings[prev];
    }

    nextSlide() {
        console.debug('next slide called');
        let next: number = this.slides.indexOf(this.currentSlide) + 1;
        if (next > this.slides.length - 1) {
            return;
        }
        this.router.navigate([this.slides[next]]);
        this.currentHeading = this.headings[next];
    }

    @HostListener('document:keyup', ['$event'])
    onKeyUp(event: KeyboardEvent) {
        if (event.key === 'ArrowLeft') {
            this.previousSlide();
        } else if (event.key === 'ArrowRight') {
            this.nextSlide();
        }
    }
}
