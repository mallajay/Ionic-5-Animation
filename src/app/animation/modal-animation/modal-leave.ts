import { createAnimation } from "@ionic/core";

export function customModalLeave(): any {
  // console.log("Leave modal animation");

  const backdropAnimation = createAnimation("modalEnter_backdrop")
    .addElement(document.querySelector("ion-backdrop"))
    .fromTo("opacity", 0.4, 0.0);

  const wrapperElem = createAnimation("modalLeave_wrapperElem").addElement(
    document.querySelector(".modal-wrapper")
  ) as any; //unknown as HTMLElement

  wrapperElem.elements[0].style.top = "0";

  const wrapperAnimation = createAnimation("modalEnter_backdrop")
    .addElement(document.querySelector(".modal-wrapper"))
    .fromTo("transform", "scaleX(1) scaleY(1)", "scaleX(0.1) scaleY(0.1)")
    .fromTo("opacity", 1, 0);

  const baseAnimation = createAnimation("modalLeave_base")
    .easing("ease-out")
    .duration(500)
    .addAnimation(backdropAnimation)
    .addAnimation(wrapperAnimation);

  return baseAnimation;
}
