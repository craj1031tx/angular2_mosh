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
    var Section5Switch;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Section5Switch = (function () {
                function Section5Switch() {
                    this.currentView = 'map';
                }
                Section5Switch = __decorate([
                    core_1.Component({
                        selector: 'switch',
                        template: "\n    <div>\n        <ul class=\"nav nav-pills\">\n            <li [class.active]=\"currentView=='map'\"><a (click)=\"currentView='map'\">Map View</a></li>\n            <li [class.active]=\"currentView=='list'\"><a (click)=\"currentView='list'\">List View</a></li>\n        </ul>\n    </div>\n    <div [ngSwitch]=\"currentView\">\n        <template [ngSwitchWhen]=\"'map'\">This is map content...</template>\n        <template [ngSwitchWhen]=\"'list'\">This is list content...</template>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Section5Switch);
                return Section5Switch;
            })();
            exports_1("Section5Switch", Section5Switch);
        }
    }
});
//# sourceMappingURL=section5switch.component.js.map