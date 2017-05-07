import {Component} from 'angular2/core'

@Component({
    selector: 'switch',
    template:`
    <div>
        <ul class="nav nav-pills">
            <li [class.active]="currentView=='map'"><a (click)="currentView='map'">Map View</a></li>
            <li [class.active]="currentView=='list'"><a (click)="currentView='list'">List View</a></li>
        </ul>
    </div>
    <div [ngSwitch]="currentView">
        <template [ngSwitchWhen]="'map'">This is map content...</template>
        <template [ngSwitchWhen]="'list'">This is list content...</template>
    </div>
    `
})

export class Section5Switch{
    currentView = 'map'
}