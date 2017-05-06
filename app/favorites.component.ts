import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html'
    styles: [`
        .glyphicon-star {
            color:orange;
        }
    `]
})

export class FavoritesComponent{
    @Input() isFavorite = true;

    @Output() change = new EventEmitter();

    changeStar(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: this.isFavorite});
    }
}