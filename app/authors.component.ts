import {Component} from 'angular2/core';
import {AuthorService} from './author.service';

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        <h3>{{authorTitle}}</h3>
        <ul>
            <li *ngFor="#authorVar of authorsArray">{{authorVar}}</li>
        </ul>
        `,
    providers: [AuthorService]
})

export class AuthorsComponent{
    authorTitle = "Here is the author's component title text",
    authorsArray;

    constructor(authorServiceParameter: AuthorService){
        this.authorsArray = authorServiceParameter.getAuthors();
    }
}

