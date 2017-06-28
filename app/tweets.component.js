System.register(['angular2/core'], function(exports_1) {
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
            TweetComponent = (function () {
                function TweetComponent() {
                }
                TweetComponent.prototype.toggleUserFave = function () {
                    if (this.tUserLike == 0) {
                        this.tUserLike = 1;
                    }
                    else {
                        this.tUserLike = 0;
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
                        template: "\n        <div class=\"media\">\n            <div class=\"media-left\">\n            <a href=\"#\">\n            <img class=\"media-object\" src={{tImg}}>\n            </a>\n            </div>\n        <div class=\"media-body\">\n            <h4 class=\"media-heading\">{{tHeading}}</h4>\n            <h5>{{tBody}}</h5>\n            <h5>\n                {{tLikes + tUserLike}} \n                <span class=\"glyphicon glyphicon-heart\" [class.userFave]=\"tUserLike==1\" (click)=\"toggleUserFave()\"></span>\n            </h5>\n        </div>\n        </div>\n    ",
                        styles: [".userFave {color:deeppink;}"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TweetComponent);
                return TweetComponent;
            })();
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweets.component.js.map