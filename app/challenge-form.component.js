System.register(['angular2/core', 'angular2/common', './pwValidators'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, pwValidators_1;
    var ChallengeFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (pwValidators_1_1) {
                pwValidators_1 = pwValidators_1_1;
            }],
        execute: function() {
            let ChallengeFormComponent = class ChallengeFormComponent {
                constructor(formzBuilder) {
                    this.passwordForm = formzBuilder.group({
                        currentPw: ['', common_1.Validators.compose([
                                common_1.Validators.required
                            ])],
                        newPw: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                pwValidators_1.pwValidators.pwLength
                            ])],
                        confirmPw: ['', common_1.Validators.compose([
                                common_1.Validators.required
                            ])]
                    }, { validator: pwValidators_1.pwValidators.confirmation });
                }
                ;
                submitPasswordForm() {
                    var tempOldPassword = this.passwordForm.find("currentPw");
                    console.log(tempOldPassword);
                    if (tempOldPassword.value != "abc123") {
                        tempOldPassword.setErrors({ invalidOldPw: true });
                    }
                    if (this.passwordForm.valid) {
                        alert("Congrats! pw has been changed....");
                    }
                    ;
                }
            };
            ChallengeFormComponent = __decorate([
                core_1.Component({
                    selector: 'challenge-form',
                    templateUrl: 'app/challenge-form.component.html'
                }), 
                __metadata('design:paramtypes', [common_1.FormBuilder])
            ], ChallengeFormComponent);
            exports_1("ChallengeFormComponent", ChallengeFormComponent);
            ;
        }
    }
});
//# sourceMappingURL=challenge-form.component.js.map