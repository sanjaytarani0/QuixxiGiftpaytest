import { Injectable } from "@angular/core";
import { User } from "./../user";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: User[];

  constructor() {
    this.users = [
      {
        name: "Sam",
        email: "sanjay@gmail.com",
        message: "Hello",
        total_balance: 100,
        amount: 20
      },
      {
        name: "Sanjay",
        email: "san@gmail.com",
        message: "Hello",
        total_balance: 100,
        amount: 50
      }
    ];
  }
  getUsers(): User[] {
    console.log("Fetching from service");
    return this.users;
  }
}
