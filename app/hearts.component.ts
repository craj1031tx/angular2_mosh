import {Component} from 'angular2/core';

@Component({
    selector: 'heart',
    template: `
        <span 
            class="glyphicon glyphicon-heart" 
            [class.highlighted]="isHeart"
            (click)="heartClick()"
        ></span>
        {{count}}
    `,
    styles: [`
        .glyphicon-heart {color: #ccc; cursor: pointer;}
        .highlighted {color: deeppink;}
    `]
})

export class HeartComponent{
    count = 10;
    isHeart = false;
    heartClick(){
        this.count += this.isHeart ? -1 : 1;
        
        this.isHeart = !this.isHeart
    }
}