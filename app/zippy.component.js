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
    var ZippyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippyComponent = (function () {
                function ZippyComponent() {
                    this.expanded = false;
                }
                ZippyComponent.prototype.toggleExpanded = function () {
                    this.expanded = !this.expanded;
                };
                ZippyComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        template: "\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" (click)=\"toggleExpanded()\">\n                <ng-content select=\".zippy-heading\"></ng-content>\n                <i class=\"pull-right glyphicon\" \n                [ngClass]=\"{\n                    'glyphicon-chevron-down': !expanded,\n                    'glyphicon-chevron-up': expanded\n                }\"></i>\n            </div>\n            <div class=\"panel-body\" [hidden]=\"!expanded\">\n                <ng-content select=\".zippy-body\"></ng-content>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyComponent);
                return ZippyComponent;
            })();
            exports_1("ZippyComponent", ZippyComponent);
        }
    }
});
//# sourceMappingURL=zippy.component.js.map