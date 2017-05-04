import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.components';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
        <courses></courses>
        <authors></authors>
        

        <span on-click="changeStar()" class="glyphicon" [class.glyphicon-star]="isStar" [class.glyphicon-star-empty]="!isStar"></span>

        `,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {
    
    isStar = true;


    changeStar(){
        this.isStar = !this.isStar;
    }

 }