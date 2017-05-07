import {Component} from 'angular2/core';

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form.component.html',
    styles: ['.ng-touched.ng-invalid {border: 1px solid red;}']
})

export class ContactFormComponent{
    onSubmit(form){
        console.log(form);
    }
}