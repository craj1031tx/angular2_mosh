import {Component} from 'angular2/core';
import {TweetComponent} from './tweets.component'
import {TweetService} from './tweets.service'
import {Section5Switch} from './section5switch.component'
import {Section5Content} from './section5ngcontent.component'
import {ZippyComponent} from './zippy.component';

@Component({
    selector: 'my-app',
    template: `
        <zippy>
            <div class="zippy-heading">Heading1</div>
            <div class="zippy-body">Content1</div>
        </zippy>
        <zippy>
            <div class="zippy-heading">Heading2</div>
            <div class="zippy-body">Content2</div>
        </zippy>
        `,
    directives: [TweetComponent, Section5Switch, Section5Content, ZippyComponent],
    providers: [TweetService]
})
export class AppComponent {
    
 }