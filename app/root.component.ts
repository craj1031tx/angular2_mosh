import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    template: `
    <h1>Hello</h1>
    <h2>Please select from the following options:</h2>
    <div *ngFor="#t of times">  
        <h3>
            <a [routerLink]="['Time', { year: t.year, month: t.month }]">
                {{t.year}}/{{t.month}}
            </a>
        </h3>
    </div>

    `,
    directives: [ROUTER_DIRECTIVES]
})

export class RootComponent {

    times = [{year: 2010, month: 1}, {year: 2011, month:2}, {year: 2012, month:3}];

}


