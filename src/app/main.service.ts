import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private readonly postUserNumber = "post";
  private readonly postMobileNumber = "/otp";
  // var obj={
  //   mobileno=Number,
  //   type:String;
  // }

  constructor(private httpService: HttpService) { }

  PostNumber(user) {
    return this.httpService.post(this.postUserNumber,user);
  }

  mobileOtp(obj){
    return this.httpService.post(this.postMobileNumber,obj);
  }
}
