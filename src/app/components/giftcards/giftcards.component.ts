import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
@Component({
  selector: "app-giftcards",
  templateUrl: "./giftcards.component.html",
  styleUrls: ["./giftcards.component.css"]
})
export class GiftcardsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(function() {
      // Custom JS & jQuery here
      //Init sidenav
      //Init slider
      $(".slider").slider({
        indicators: true,
        height: 500,
        transition: 800,
        interval: 3000
      });
    });
  }
}
