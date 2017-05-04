import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.components';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
        <courses></courses>
        <authors></authors>
        <div (click)="onDivClick()">
            <button on-click="onClickFunction($event)">Click Me!</button>
        </div>
        <input type="text" bind-value="someTitle" on-input="someTitle = $event.target.value"/>
        Preview: {{someTitle}}
        <button on-click="someTitle = ''">click to clear!</button>
        `,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {
    someTitle = "this is some title"

    onClickFunction($event){
        $event.stopPropagation();
        console.log("the button has been clicked!", $event)
    }

    onDivClick(){
        console.log("was handled by div")
    }

 }