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
    var VotesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VotesComponent = (function () {
                function VotesComponent() {
                    this.voteCount = 0;
                    this.myVote = 0;
                    this.theVote = new core_1.EventEmitter();
                }
                VotesComponent.prototype.upvote = function () {
                    if (this.myVote == 1) {
                        return;
                    }
                    this.myVote++;
                    this.theVote.emit({ myVote: this.myVote });
                };
                VotesComponent.prototype.downvote = function () {
                    if (this.myVote == -1) {
                        return;
                    }
                    this.myVote--;
                    this.theVote.emit({ myVote: this.myVote });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VotesComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VotesComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VotesComponent.prototype, "theVote", void 0);
                VotesComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "\n    <div class=\"voteWrapper\" style=\"width: 20px;\">\n    <span class=\"glyphicon glyphicon-menu-up\" (click)=\"upvote()\" [class.voteActive]=\"myVote==1\"></span>\n    <h4>{{voteCount + myVote}}</h4>\n    <span class=\"glyphicon glyphicon-menu-down\" (click)=\"downvote()\" [class.voteActive]=\"myVote==-1\"></span>\n    </div>\n    ",
                        styles: [".voteActive {color: orange;}", ".glyphicon {cursor: pointer;}", ".voteWrapper {text-align: center;}"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VotesComponent);
                return VotesComponent;
            })();
            exports_1("VotesComponent", VotesComponent);
        }
    }
});
//# sourceMappingURL=votes.component.js.map