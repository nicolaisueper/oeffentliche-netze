import {style, animate, transition, state, trigger} from '@angular/core';
export function routerTransition() {
 return slideToLeft();
}
function slideToLeft() {
    return trigger('routerTransition', [
        state('void', style({position: 'fixed', width: '100%'})),
        state('*', style({position: 'fixed', width: '100%'})),
        transition(':enter', [
            style({opacity: 0}),
            animate('0.5s ease', style({opacity: 1}))
        ]),
        transition(':leave', [
            style({opacity: 1}),
            animate('0.5s ease', style({opacity: 0}))
        ])
    ]);
}