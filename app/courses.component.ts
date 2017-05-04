import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',
    //single tick allows for multiple line inputs for strings/text. {{}} allows for interpolation of class attributes.
    template: `
        <h2>Courses</h2>
        {{title}}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="#courseVar of courses">
                {{courseVar}}
            </li>
        </ul>
        `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})

export class CoursesComponent {
    title = "The title of the courses page";
    courses;

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}