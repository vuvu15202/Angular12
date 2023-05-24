import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit{
  // public formData: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl(''),
  // });

  public formData = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
  });
  constructor(private common: CommonService, private formBuilder: FormBuilder){}

  ngOnInit(): void {
  }

  public onSubmit():void{
    console.log('submit form: name = ', this.formData.value);
    this.common.submitData(this.formData.value)
  }

}
