import {Component} from 'angular2/core';

@Component({
    selector: 'zippy',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading" (click)="toggleExpanded()">
                <ng-content select=".zippy-heading"></ng-content>
                <i class="pull-right glyphicon" 
                [ngClass]="{
                    'glyphicon-chevron-down': !expanded,
                    'glyphicon-chevron-up': expanded
                }"></i>
            </div>
            <div class="panel-body" [hidden]="!expanded">
                <ng-content select=".zippy-body"></ng-content>
            </div>
        </div>
    `
})

export class ZippyComponent{
    expanded = false;

    toggleExpanded(){
        this.expanded = !this.expanded;
    }
}