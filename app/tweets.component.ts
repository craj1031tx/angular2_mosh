import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'tweet',
    template: `
        <div class="media">
            <div class="media-left">
            <a href="#">
            <img class="media-object" src={{tImg}}>
            </a>
            </div>
        <div class="media-body">
            <h4 class="media-heading">{{tHeading}}</h4>
            <h5>{{tBody}}</h5>
            <h5>
                {{tLikes + tUserLike}} 
                <span class="glyphicon glyphicon-heart" [class.userFave]="tUserLike==1" (click)="toggleUserFave()"></span>
            </h5>
        </div>
        </div>
    `,
    styles:[".userFave {color:deeppink;}"]
})

export class TweetComponent{
    @Input() tHeading;
    @Input() tBody;
    @Input() tImg;
    @Input() tLikes;
    @Input() tUserLike;

    toggleUserFave(){
        if(this.tUserLike==0){
            this.tUserLike = 1;
        }
        else{
            this.tUserLike = 0;
        }
    }

}