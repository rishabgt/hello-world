import { AbstractControl, ControlContainer, ValidationErrors, FormArray } from '@angular/forms';

export class DropDownCheck{
    static selectionRequired(control: AbstractControl):ValidationErrors|null{
        if(control.value=="Select")
            return{
                selectionRequired:true
            };
        return null;    
    }

    static checkCheck(control: FormArray):ValidationErrors|null{
        if(control.length<5)
            return{
                checkCheck:true
            };
        return null;    
    }
}