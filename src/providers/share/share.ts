import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ShareProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShareProvider {
  firstName: string;
  lastName: string;

  // constructor(public http: HttpClient) {
  //   console.log('Hello ShareProvider Provider');
  // }

  constructor() {
    this.firstName = 'Blank';
    this.lastName = 'Name';
}

  setUserName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;       
}

getUserName() {
    return this.firstName + ' ' + this.lastName;
}  
  
}
