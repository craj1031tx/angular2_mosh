import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'vote',
    template: `
    <div class="voteWrapper" style="width: 20px;">
    <span class="glyphicon glyphicon-menu-up" (click)="upvote()" [class.voteActive]="myVote==1"></span>
    <h4>{{voteCount + myVote}}</h4>
    <span class="glyphicon glyphicon-menu-down" (click)="downvote()" [class.voteActive]="myVote==-1"></span>
    </div>
    `,
    styles: [".voteActive {color: orange;}", ".glyphicon {cursor: pointer;}", ".voteWrapper {text-align: center;}"]
})

export class VotesComponent{
    @Input() voteCount = 0;
    @Input() myVote = 0;

    @Output() theVote = new EventEmitter();

    upvote(){
        if(this.myVote == 1){
            return
        }

        this.myVote++;
        this.theVote.emit({myVote: this.myVote})

    }

    downvote(){
        if(this.myVote == -1){
            return
        }

        this.myVote--;
        this.theVote.emit({myVote: this.myVote})
    }
}