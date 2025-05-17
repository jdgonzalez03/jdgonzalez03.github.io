import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
  // Navbar
  gsap.from(".navbar-animate", {
    y: -40,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Secciones
  gsap.utils.toArray(".section-animate").forEach((el, i) => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.2 + i * 0.2,
      ease: "power3.out"
    });
  });

  // Footer
  gsap.from(".footer-animate", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer-animate",
      start: "top bottom",
      toggleActions: "play none none none",
      onComplete: () => {
        gsap.set(".footer-animate", { clearProps: "all" });
      }
    }
  });
});