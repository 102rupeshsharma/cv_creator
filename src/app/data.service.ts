import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private users: any[] = [];

  constructor() { }

  // Add user to the database
  addUser(user: any) {
    this.users.push(user);
    console.log(this.users)
  }

  // Get all users from the database
  getAllUsers() {
    return this.users;
  } 
}
