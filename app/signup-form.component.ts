import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {UsernameValidators} from './usernameValidators'

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})

export class SignupFormComponent{
    // myForm = new ControlGroup({
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required)
    // });

    myForm: ControlGroup;

    constructor(fBuilder: FormBuilder){
        this.myForm = fBuilder.group({
            username: ['', Validators.compose([
                Validators.required, 
                UsernameValidators.cannotContainSpace
            ]), UsernameValidators.shouldBeUnique],
            password: ['', Validators.required]
        });
    }

    signup(){
        //var result = authService.login(this.myForm.value)
        this.myForm.find('username').setErrors({
            invalidLogin: true
        })

        console.log(this.myForm.value);
    }
}