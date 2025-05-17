import gsap from "gsap";

export function animateCodeIcon() {
  gsap.from(".code-icon", {
    scale: 0.5,
    opacity: 0,
    duration: 0.5,
    ease: "back.out(1.7)",
    delay: 0.2
  });
}
