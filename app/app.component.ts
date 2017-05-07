import {Component} from 'angular2/core';
import {TweetComponent} from './tweets.component'
import {TweetService} from './tweets.service'
import {ContactFormComponent} from './contact-form.component'
import {FrequencyComponent} from './frequency.component'


@Component({
    selector: 'my-app',
    template: `
        <frequency></frequency>
        `,
    directives: [TweetComponent, ContactFormComponent, FrequencyComponent],
    providers: [TweetService]
})
export class AppComponent {
    
 }