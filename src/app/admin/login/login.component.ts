import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DropDownCheck } from '../common/custom.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  touch:boolean;
  skills = ["HTML5,CSS3,JS","Angular 8","Express JS","SASS","React JS","Node JS","ES5,ES6,ES7...","Vue JS","Mongo DB","Bootstrap 4","Typescript"];
    ngOnInit(): void {
        window.alert("Lazy loading activated admin module!!");
        this.touch = false;
        console.log(this.form.invalid);
    }

  form = new FormGroup({
    associateName:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(30),Validators.pattern(/^[a-zA-z ]*$/)]),
    associateId:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern(/^[0-9]*$/)]),
    projectId:new FormControl('',[Validators.required,Validators.minLength(12),Validators.maxLength(12),Validators.pattern(/^[0-9a-zA-Z]*$/)]),
    shore:new FormControl(''),
    locations:new FormArray([]),
    currentLocation:new FormControl('Select',DropDownCheck.selectionRequired),
    checkArray:new FormArray([],DropDownCheck.checkCheck),
    fileUpload:new FormControl('',Validators.required),
    comments:new FormControl('',Validators.required)
  });
  
onReset(){
  this.form.reset();
}

onChange(skill,id){
  this.touch = true;
  if(id.checked)
  this.checkArray.push(new FormControl(''))
  else
  this.checkArray.removeAt(0);
}

get comments(){
  return this.form.get('comments');
}

get fileUpload(){
  return this.form.get('fileUpload');
}

get checkArray(){
  return (this.form.get('checkArray') as FormArray);
}

getControls(){
  return this.checkArray.controls;
}

  Shore(){
    if(this.form.get('shore').value=='offshore'){
      this.form.get('locations').value.splice(0,2);
      this.form.get('locations').value.push('Chennai');
      this.form.get('locations').value.push('Bangalore');
      this.form.get('locations').value.push('Hydrebad');
      this.form.get('locations').value.push('Kochi');
      this.form.get('locations').value.push('Pune');
      
    }
    else{
      this.form.get('locations').value.splice(0,5);
      this.form.get('locations').value.push('US');
      this.form.get('locations').value.push('Non US');
    }
  }

  get currentLocation(){
    return this.form.get('currentLocation');
  }

  get locations(){
    return this.form.get('locations');
  }

  get associateName(){
    return this.form.get('associateName');
  }
  
  get associateId(){
    return this.form.get('associateId');
  }
  
  get projectId(){
    return this.form.get('projectId');
  }

  valid(id, name){
    if(!name.invalid){
      id.classList.remove('border','border-danger')
    }
  }
}
