System.register(['angular2/core', './courses.component', './authors.component', './favorites.component', './hearts.component', './votes.component', './tweets.component', './tweets.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, favorites_component_1, hearts_component_1, votes_component_1, tweets_component_1, tweets_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favorites_component_1_1) {
                favorites_component_1 = favorites_component_1_1;
            },
            function (hearts_component_1_1) {
                hearts_component_1 = hearts_component_1_1;
            },
            function (votes_component_1_1) {
                votes_component_1 = votes_component_1_1;
            },
            function (tweets_component_1_1) {
                tweets_component_1 = tweets_component_1_1;
            },
            function (tweets_service_1_1) {
                tweets_service_1 = tweets_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetService) {
                    this.listOfTweets = [];
                    this.post = {
                        title: "The Title",
                        isFavorite: true
                    };
                    this.serverData = {
                        voteCount: 10,
                        myVote: 0
                    };
                    this.listOfTweets = tweetService.getTweets();
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.userVotes = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>My First Angular 2 App</h1>\n        <span class=\"glyphicon glyphicon-star\"></span>\n        <favorite [isFavorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></favorite>\n        <heart></heart>\n        <vote [voteCount]=\"serverData.voteCount\" [myVote]=\"serverData.myVote\" (theVote)=\"userVotes($event)\"></vote>\n\n        <div *ngFor=\"#eachTweet of listOfTweets\">\n            <tweet [tHeading]=\"eachTweet.tHeading\" [tBody]=\"eachTweet.tBody\" [tImg]=\"eachTweet.tImg\" [tLikes]=\"eachTweet.tLikes\" [tUserLike]=\"eachTweet.tUserLike\"></tweet>\n        </div>\n        ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favorites_component_1.FavoritesComponent, hearts_component_1.HeartComponent, votes_component_1.VotesComponent, tweets_component_1.TweetComponent],
                        providers: [tweets_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweets_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map