import {Component} from 'angular2/core';
import {SignupFormComponent} from './signup-form.component'
import {ChallengeFormComponent} from './challenge-form.component'



@Component({
    selector: 'my-app',
    template: `
        <challenge-form></challenge-form>
        `,
    directives: [SignupFormComponent, ChallengeFormComponent],
    providers: []
})
export class AppComponent {
    
 }