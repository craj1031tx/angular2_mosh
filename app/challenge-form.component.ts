import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {pwValidators} from './pwValidators'

@Component({
    selector: 'challenge-form',
    templateUrl: 'app/challenge-form.component.html'
})

export class ChallengeFormComponent{

    passwordForm: ControlGroup;

    constructor(formzBuilder: FormBuilder){
        this.passwordForm = formzBuilder.group({
            currentPw:['', Validators.compose([
                Validators.required
            ])],
            newPw:['', Validators.compose([
                Validators.required,
                pwValidators.pwLength
            ])],
            confirmPw:['', Validators.compose([
                Validators.required
            ])]
        },{validator: pwValidators.confirmation});
    };

    submitPasswordForm(){
        var tempOldPassword = this.passwordForm.find("currentPw");

        console.log(tempOldPassword);

        if(tempOldPassword.value != "abc123"){
            tempOldPassword.setErrors({invalidOldPw: true})
        }

        if(this.passwordForm.valid){
            alert("Congrats! pw has been changed....");
        };
    }
};