System.register(['angular2/core', './post.service', 'angular2/http', './github.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, post_service_1, http_1, github_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (github_component_1_1) {
                github_component_1 = github_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_postService) {
                    this._postService = _postService;
                    this.isLoading = true;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._postService.getPosts()
                        .then(function (butt) {
                        _this.isLoading = false;
                        console.log(butt);
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <div *ngIf=\"isLoading\">\n            <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n        </div>\n\n        <github></github>\n    ",
                        directives: [github_component_1.Github],
                        providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map