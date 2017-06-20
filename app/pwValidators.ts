import {Control, ControlGroup} from 'angular2/common';

export class pwValidators{

    static pwLength(control: Control){
        var setLength = 6;

        if(control.value == ""){
            return null;
        }

        if(control.value.length<setLength){
            return {pwLength:{reqLength:setLength}};
        }
    }

    static confirmation(group: ControlGroup){
        var test1 = group.find("newPw").value;
        var test2 = group.find("confirmPw").value;

        if (test1 == '' || test2 == ''){
            return null;
        }
        
        if (test1!=test2){
            return {'mismatch':true};
        }
    }
}