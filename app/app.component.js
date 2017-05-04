System.register(['angular2/core', './courses.component', './authors.components'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_components_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_components_1_1) {
                authors_components_1 = authors_components_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.someTitle = "this is some title";
                    this.twoWayBinding = "hello there";
                    this.alsoTwoWayBinding = "Now I'm leaving...";
                    this.isStar = true;
                }
                AppComponent.prototype.onClickFunction = function ($event) {
                    $event.stopPropagation();
                    console.log("the button has been clicked!", $event);
                };
                AppComponent.prototype.onDivClick = function () {
                    console.log("was handled by div");
                };
                AppComponent.prototype.changeStar = function () {
                    this.isStar = !this.isStar;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>My First Angular 2 App</h1>\n        <courses></courses>\n        <authors></authors>\n        <div (click)=\"onDivClick()\">\n            <button on-click=\"onClickFunction($event)\">Click Me!</button>\n        </div>\n        <input type=\"text\" bind-value=\"someTitle\" on-input=\"someTitle = $event.target.value\"/>\n        Preview: {{someTitle}}\n        <button on-click=\"someTitle = ''\">click to clear!</button>\n        <h4>This is an example of 2 way binding</h4>\n        <input type=\"text\" [(ngModel)]=\"twoWayBinding\"/>\n        <input type=\"text\" bindon-ngModel=\"alsoTwoWayBinding\" />\n\n        <span on-click=\"changeStar()\" class=\"glyphicon\" [class.glyphicon-star]=\"isStar\" [class.glyphicon-star-empty]=\"!isStar\"></span>\n\n        ",
                        directives: [courses_component_1.CoursesComponent, authors_components_1.AuthorsComponent]
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