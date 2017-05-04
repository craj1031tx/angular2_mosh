import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
    //square bracket selector refers to an elements attribute! plain text referes to an element tag.
    selector: '[autoGrow]',
    //subsribe to events using host key
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective{
    //underline first variable name indicates that it is private. instead, we are
    //using the private field inside of the constructor paramters. this is just another option...
    //_el: ElementRef;

    constructor(private el: ElementRef, private renderer: Renderer){
    }

    onFocus(){
        //arg1: element on which your applying style....nativeElement is the actual element that is selected.
        //arg2: name of the style (key)
        //arg3: value of the style
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    }

    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
    }
}