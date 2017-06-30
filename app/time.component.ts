import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

@Component({
    template: `
        <h1>{{year}}/{{month}}
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class TimeComponent implements OnInit{
    constructor(private _routeParams: RouteParams){}

    year;
    month;

    ngOnInit(){
        console.log(this._routeParams.get("year"));
        this.year = this._routeParams.get("year");
        this.month = this._routeParams.get("month")
    }


}