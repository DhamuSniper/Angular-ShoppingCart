import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormArray} from '@angular/forms'
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  loginForm=this.fb.group({
    username:[''],
    password:['']
  })
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.loginForm.value)
  }

}
