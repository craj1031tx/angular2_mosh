import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoritesComponent} from './favorites.component'
import {HeartComponent} from './hearts.component'
import {VotesComponent} from './votes.component'

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
        <span class="glyphicon glyphicon-star"></span>
        <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
        <heart></heart>
        <vote></vote>
        `,
    directives: [CoursesComponent, AuthorsComponent, FavoritesComponent, HeartComponent, VotesComponent]
})
export class AppComponent {
    post = {
        title: "The Title",
        isFavorite: true
    }

    onFavoriteChange($event){
        console.log($event)
    }
 }