import { Component, OnInit } from "@angular/core";
import { User } from "./../../user";
import { Http, Response, Headers } from "@angular/http";
import { map } from "rxjs/operators";
import { UserService } from "./../../services/user.service";
import { NgForm, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  users: User[];
  privateURL: "https://sandbox.express.giftpay.com/api/gift.svc/send";
  form: FormGroup;
  payload = "";
  user: User = {
    name: "",
    email: "",
    message: "",
    total_balance: 0,
    amount: 0
  };
  constructor(private userService: UserService, private http: HttpClient) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
  onSubmit() {
    console.log("On submit working");
    console.log(this.user);

    // this.payload = JSON.stringify(this.form.value);
    // console.log(this.payload);
  }
}
