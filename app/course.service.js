System.register([], function(exports_1) {
    var CourseService;
    return {
        setters:[],
        execute: function() {
            CourseService = (function () {
                function CourseService() {
                }
                CourseService.prototype.getCourses = function () {
                    return ["Course Number 1", "Course Number 2", "Course Number 3"];
                };
                return CourseService;
            })();
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=course.service.js.map