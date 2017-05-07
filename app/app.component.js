System.register(['angular2/core', './tweets.component', './tweets.service', './section5switch.component', './section5ngcontent.component', './zippy.component'], function(exports_1, context_1) {
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
    var core_1, tweets_component_1, tweets_service_1, section5switch_component_1, section5ngcontent_component_1, zippy_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweets_component_1_1) {
                tweets_component_1 = tweets_component_1_1;
            },
            function (tweets_service_1_1) {
                tweets_service_1 = tweets_service_1_1;
            },
            function (section5switch_component_1_1) {
                section5switch_component_1 = section5switch_component_1_1;
            },
            function (section5ngcontent_component_1_1) {
                section5ngcontent_component_1 = section5ngcontent_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <zippy>\n            <div class=\"zippy-heading\">Heading1</div>\n            <div class=\"zippy-body\">Content1</div>\n        </zippy>\n        <zippy>\n            <div class=\"zippy-heading\">Heading2</div>\n            <div class=\"zippy-body\">Content2</div>\n        </zippy>\n        ",
                        directives: [tweets_component_1.TweetComponent, section5switch_component_1.Section5Switch, section5ngcontent_component_1.Section5Content, zippy_component_1.ZippyComponent],
                        providers: [tweets_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map