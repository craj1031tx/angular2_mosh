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
    var VotesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VotesComponent = (function () {
                function VotesComponent() {
                    this.voteCount = 10;
                    this.hasVoted = false;
                }
                VotesComponent.prototype.upvote = function () {
                    if (this.hasVoted) {
                        this.voteCount--;
                        this.hasVoted = false;
                    }
                    else {
                        this.voteCount++;
                        this.hasVoted = true;
                    }
                };
                VotesComponent.prototype.downvote = function () {
                    if (this.hasVoted) {
                        this.voteCount++;
                        this.hasVoted = false;
                    }
                    else {
                        this.voteCount--;
                        this.hasVoted = true;
                    }
                };
                VotesComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "\n    <div style=\"width: 20px;\">\n    <span class=\"glyphicon glyphicon-menu-up\" (click)=\"upvote()\" ></span>\n    <h4>{{voteCount}}</h4>\n    <span class=\"glyphicon glyphicon-menu-down\" (click)=\"downvote()\" ></span>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], VotesComponent);
                return VotesComponent;
            }());
            exports_1("VotesComponent", VotesComponent);
        }
    }
});
//# sourceMappingURL=votes.component.js.map