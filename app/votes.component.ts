import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'vote',
    template: `
    <div style="width: 20px;">
    <span class="glyphicon glyphicon-menu-up" (click)="upvote()" ></span>
    <h4>{{voteCount}}</h4>
    <span class="glyphicon glyphicon-menu-down" (click)="downvote()" ></span>
    </div>
    `
})

export class VotesComponent{
    voteCount = 10;
    hasVoted = false;

    upvote(){
        if(this.hasVoted){
            this.voteCount--
            this.hasVoted = false;
        }
        else{
            this.voteCount++
            this.hasVoted = true;
        }
    }

    downvote(){
        if(this.hasVoted){
            this.voteCount++
            this.hasVoted = false;
        }
        else{
            this.voteCount--
            this.hasVoted = true;
        }
    }
}