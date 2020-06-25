import { ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-testmodal",
  templateUrl: "./testmodal.page.html",
  styleUrls: ["./testmodal.page.scss"],
})
export class TestmodalPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }
}
