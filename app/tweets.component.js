System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let TweetComponent = class TweetComponent {
                toggleUserFave() {
                    if (this.tUserLike == 0) {
                        this.tUserLike = 1;
                    }
                    else {
                        this.tUserLike = 0;
                    }
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], TweetComponent.prototype, "tHeading", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], TweetComponent.prototype, "tBody", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], TweetComponent.prototype, "tImg", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], TweetComponent.prototype, "tLikes", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], TweetComponent.prototype, "tUserLike", void 0);
            TweetComponent = __decorate([
                core_1.Component({
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
                    styles: [".userFave {color:deeppink;}"]
                }), 
                __metadata('design:paramtypes', [])
            ], TweetComponent);
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweets.component.js.map