System.register([], function(exports_1) {
    var pwValidators;
    return {
        setters:[],
        execute: function() {
            pwValidators = (function () {
                function pwValidators() {
                }
                pwValidators.pwLength = function (control) {
                    var setLength = 6;
                    if (control.value == "") {
                        return null;
                    }
                    if (control.value.length < setLength) {
                        return { pwLength: { reqLength: setLength } };
                    }
                };
                pwValidators.confirmation = function (group) {
                    var test1 = group.find("newPw").value;
                    var test2 = group.find("confirmPw").value;
                    if (test1 == '' || test2 == '') {
                        return null;
                    }
                    if (test1 != test2) {
                        return { 'mismatch': true };
                    }
                };
                return pwValidators;
            })();
            exports_1("pwValidators", pwValidators);
        }
    }
});
//# sourceMappingURL=pwValidators.js.map