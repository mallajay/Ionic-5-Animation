import { TestmodalPage } from "./../testmodal/testmodal.page";
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { AnimationController, ModalController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit, AfterViewInit {
  anim: any;

  @ViewChild("square", { static: false }) square: ElementRef;

  isPlaying: boolean = false;

  constructor(
    private animationCtrl: AnimationController,
    public modalController: ModalController
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.anim = this.animationCtrl.create("myanim");
    this.anim
      .addElement(this.square.nativeElement)
      .duration(1500)
      .easing("ease-out")
      .iterations(Infinity)
      .fromTo("transform", "translateX(0px)", "translate(30px")
      .fromTo("opacity", 1, 0.2);
  }

  toggleAnimation() {
    if (this.isPlaying) {
      this.anim.pause();
    } else {
      this.anim.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: TestmodalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }
}
