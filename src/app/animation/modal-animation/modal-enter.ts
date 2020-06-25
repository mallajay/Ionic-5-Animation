import { createAnimation } from "@ionic/core";

export function customModalEnter(): any {
  // console.log("Enter modal animation");

  const backdropAnimation = createAnimation("modalEnter_backdrop")
    .addElement(document.querySelector("ion-backdrop")!)
    .fromTo("opacity", "0.01", "var(--backdrop-opacity)");

  const wrapperElem = createAnimation("modalEnter_wrapperElem").addElement(
    document.querySelector(".modal-wrapper")
  ) as any;

  wrapperElem.elements[0].style.top = "0";

  const wrapperAnimation = createAnimation("modalEnter_backdrop")
    .addElement(document.querySelector(".modal-wrapper")!)
    .keyframes([
      { offset: 0, opacity: "0", transform: "scale(0)" },
      { offset: 1, opacity: "0.99", transform: "scale(1)" },
    ]);

  const baseAnimation = createAnimation("modalEnter_base")
    .addElement(wrapperElem.elements[0])
    .duration(500)
    .easing("ease-out")
    .addAnimation(backdropAnimation)
    .addAnimation(wrapperAnimation);

  return baseAnimation;
}
