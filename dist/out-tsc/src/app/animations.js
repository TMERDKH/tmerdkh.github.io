import { trigger, animate, transition, style, query } from '@angular/animations';
export var fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
        query(':enter', [style({ opacity: 0 })], { optional: true }),
        query(':leave', [style({ opacity: 1 }), animate('0.8s', style({ opacity: 0 }))], { optional: true }),
        query(':enter', [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))], { optional: true })
    ])
]);
//# sourceMappingURL=animations.js.map