System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pwValidators;
    return {
        setters:[],
        execute: function() {
            class pwValidators {
                static pwLength(control) {
                    var setLength = 6;
                    if (control.value == "") {
                        return null;
                    }
                    if (control.value.length < setLength) {
                        return { pwLength: { reqLength: setLength } };
                    }
                }
                static confirmation(group) {
                    var test1 = group.find("newPw").value;
                    var test2 = group.find("confirmPw").value;
                    if (test1 == '' || test2 == '') {
                        return null;
                    }
                    if (test1 != test2) {
                        return { 'mismatch': true };
                    }
                }
            }
            exports_1("pwValidators", pwValidators);
        }
    }
});
//# sourceMappingURL=pwValidators.js.map