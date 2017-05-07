import {Component} from 'angular2/core';

@Component({
    selector: 'frequency',
    templateUrl: 'app/frequency-form.component.html',
    styles: ['ng-touched.ng-invald {border:2px solid red;}']
})

export class FrequencyComponent{
    frequencyList = ['Daily', 'Weekly', 'Monthly'];
}