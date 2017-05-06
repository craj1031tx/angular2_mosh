import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoritesComponent} from './favorites.component'
import {HeartComponent} from './hearts.component'
import {VotesComponent} from './votes.component'
import {TweetComponent} from './tweets.component'
import {TweetService} from './tweets.service'

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
        <span class="glyphicon glyphicon-star"></span>
        <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
        <heart></heart>
        <vote [voteCount]="serverData.voteCount" [myVote]="serverData.myVote" (theVote)="userVotes($event)"></vote>

        <div *ngFor="#eachTweet of listOfTweets">
            <tweet [tHeading]="eachTweet.tHeading" [tBody]="eachTweet.tBody" [tImg]="eachTweet.tImg" [tLikes]="eachTweet.tLikes" [tUserLike]="eachTweet.tUserLike"></tweet>
        </div>
        `,
    directives: [CoursesComponent, AuthorsComponent, FavoritesComponent, HeartComponent, VotesComponent, TweetComponent],
    providers: [TweetService]
})
export class AppComponent {
    listOfTweets = [];
    constructor(tweetService: TweetService){
        this.listOfTweets = tweetService.getTweets();
    }

    post = {
        title: "The Title",
        isFavorite: true
    };

    serverData = {
        voteCount: 10,
        myVote: 0
    };

    onFavoriteChange($event){
        console.log($event)
    }

    userVotes($event){
        console.log($event);
    }
 }