import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Http } from "@angular/http";
import { Router } from '@angular/router';
import { MainService } from '../main.service';

// export interface Skills {
//   value: string;
//   viewValue: string;
// }
export interface exps {
  value: string;
  view: string;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
 addForm: FormGroup;
  submitted = false;
  loading = false;
  firstname: any;
  lastname = String;
  about = String;
  totalexp = Number;
  jobrole = String;
  primskills = String;
  secskills = String;

  // clients = [
  //   { id : 'id1', clientName: '2-3'},
  //   { id : 'id2', clientName: '3-5'},
  //   { id : 'id3', clientName: '5-7'},
  //   { id : 'id3', clientName: '7-10'},
  //   { id : 'id3', clientName: 'Above'}

  // ];
  constructor(private mainService: MainService,
              private formBuilder: FormBuilder,
              private router: Router,
              private http:Http) { }

  ngOnInit() {

    this.addForm = new FormGroup({
      firstName: new FormControl()
    });


    this.addForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      totalexp: ['', Validators.required],
      primskills: ['', Validators.required],
      secskills: ['', Validators.required],
      FinishedInterviews:['', Validators.required],
      jobRole:['', Validators.required],
      About:['', Validators.required],
      companyInetrview:['', Validators.required],
      videoIneteview:['', Validators.required],
      lastname: ['', Validators.required],
      scheduledinterviews:['', Validators.required],
      AvailableTimeSlots:['', Validators.required],
      InterviewsTaken:['', Validators.required],
      TelephonicInterviews:['', Validators.required],
      TakensoFar:['', Validators.required],
      Clearance:['', Validators.required],
      roleBy:['', Validators.required],

    });
  }
  get f() { return this.addForm.controls; }
  
    PostNumberOtp(){
      this.submitted = true;
      console.log()
      return this.mainService.PostNumber(this.addForm.value).subscribe((res:any)=>{
      console.log(res)
      })
      }
}
