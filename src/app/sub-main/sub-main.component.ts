import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Http } from "@angular/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-main',
  templateUrl: './sub-main.component.html',
  styleUrls: ['./sub-main.component.scss']
})
export class SubMainComponent implements OnInit {

  Auth: FormGroup;
  mobileno = Number;
  email = String;
  social = String;
  otp =String;
  submitted = false;
  public isVisible: boolean = false;


  constructor(private formBuilder: FormBuilder,
    private http:Http,
    private router: Router) { }


  ngOnInit() {
    this.Auth = new FormGroup({
      email: new FormControl()
    });
    this.Auth = this.formBuilder.group({
      mobileno: ['', Validators.required],
      social: ['', Validators.required],
      otp: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  get f() { return this.Auth.controls; }

  isShow :boolean=true;
  isHide:boolean=true;
  isMid:boolean=true;


  showAlert() : void {
    if (this.isVisible) { 
      return;
    } 
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,2500)
  }
  
  getOtp(){
    this.submitted = true;
    console.log()
    return this.http.get("http://13.235.254.91:8086/otp?mobileNo="+this.Auth.value.mobileno).subscribe((res:any)=>{
    console.log(res)
    })
    }

    EnterOtp(){
      console.log()
      return this.http.get("http://13.235.254.91:8086/verify?mobileNo="+this.Auth.value.mobileno+'&otp='+this.Auth.value.otp).subscribe((res:any)=>{
      console.log(res)
      })
      }
      goTo(){
        // this.router.navigate(['main'])
        localStorage.setItem("mobileno",JSON.stringify(this.Auth.value.mobileno));
        return this.http.get("http://13.235.254.91:8086/sync?mobileNo="+this.Auth.value.mobileno+'&email='+this.Auth.value.email).subscribe((res:any)=>{
        console.log(res)
        })
      }
}
