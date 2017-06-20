System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseService;
    return {
        setters:[],
        execute: function() {
            class CourseService {
                getCourses() {
                    return ["Course Number 1", "Course Number 2", "Course Number 3"];
                }
            }
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=course.service.js.map