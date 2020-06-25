import { AnimationController, Animation } from "@ionic/angular";

export const enterAnimation = (baseEl: HTMLElement, opts?: any): Animation => {
  const DURATION = 250;

  console.log("baseEl: ", baseEl);
  console.log("opts: ", opts);

  const animationCtrl = new AnimationController();

  if (opts.direction === "forward") {
    return animationCtrl
      .create()
      .addElement(opts.enteringEl)
      .duration(DURATION)
      .easing("ease-in")
      .fromTo("opacity", 0, 1);
  } else {
    const rooteAnimation = animationCtrl
      .create()
      .addElement(opts.leavingEl)
      .duration(DURATION)
      .easing("ease-in")
      .fromTo("opacity", 0, 1);

    const leavingAnimation = animationCtrl
      .create()
      .addElement(opts.leavingEl)
      .duration(DURATION)
      .easing("ease-out")
      .fromTo("opacity", 1, 0);

    return animationCtrl
      .create()
      .addAnimation([rooteAnimation, leavingAnimation]);
  }
};
