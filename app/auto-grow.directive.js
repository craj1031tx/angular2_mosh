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
    var AutoGrowDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AutoGrowDirective = (function () {
                //underline first variable name indicates that it is private. instead, we are
                //using the private field inside of the constructor paramters. this is just another option...
                //_el: ElementRef;
                function AutoGrowDirective(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                }
                AutoGrowDirective.prototype.onFocus = function () {
                    //arg1: element on which your applying style....nativeElement is the actual element that is selected.
                    //arg2: name of the style (key)
                    //arg3: value of the style
                    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
                };
                AutoGrowDirective.prototype.onBlur = function () {
                    this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
                };
                AutoGrowDirective = __decorate([
                    core_1.Directive({
                        //square bracket selector refers to an elements attribute! plain text referes to an element tag.
                        selector: '[autoGrow]',
                        //subsribe to events using host key
                        host: {
                            '(focus)': 'onFocus()',
                            '(blur)': 'onBlur()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], AutoGrowDirective);
                return AutoGrowDirective;
            })();
            exports_1("AutoGrowDirective", AutoGrowDirective);
        }
    }
});
//# sourceMappingURL=auto-grow.directive.js.map