import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Hero stagger reveal
export function initHeroAnimations() {
  const tl = gsap.timeline({ delay: 0.2 });
  
  tl.from(".hero-badge", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" })
    .from(".hero-title-line", { opacity: 0, y: 60, duration: 0.8, ease: "power4.out", stagger: 0.15 }, "-=0.3")
    .from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.6, ease: "power3.out" }, "-=0.4")
    .from(".hero-cta", { opacity: 0, y: 20, duration: 0.5, ease: "power3.out", stagger: 0.1 }, "-=0.3")
    .from(".hero-stats", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.2")
    .from(".hero-3d-card", { opacity: 0, x: 60, rotateY: -5, duration: 1, ease: "power3.out" }, "-=0.6");
}

// Scroll reveal genérico
export function initScrollReveals() {
  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.fromTo(el, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
}

// Stagger para grids
export function initStaggerReveals() {
  gsap.utils.toArray(".stagger-grid").forEach((grid) => {
    const items = grid.querySelectorAll(".stagger-item");
    gsap.fromTo(items,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: grid,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
}

// Contadores animados
export function initCounters() {
  gsap.utils.toArray(".counter").forEach((el) => {
    const target = parseInt(el.getAttribute("data-target"), 10);
    const obj = { value: 0 };
    
    gsap.to(obj, {
      value: target,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = Math.floor(obj.value).toLocaleString() + (el.getAttribute("data-suffix") || "");
      },
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  });
}

// Parallax en hero
export function initParallax() {
  gsap.to(".hero-bg", {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
}

// Magnetic buttons
export function initMagneticButtons() {
  document.querySelectorAll(".btn-magnetic").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    });
  });
}

// Card tilt 3D
export function initCardTilt() {
  document.querySelectorAll(".card-tilt").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        duration: 0.4,
        ease: "power2.out"
      });
    });
    
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power3.out"
      });
    });
  });
}

// Header scroll behavior
export function initHeaderScroll() {
  let lastScroll = 0;
  const header = document.getElementById("main-header");
  
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      gsap.to(header, {
        backgroundColor: "rgba(5, 5, 5, 0.95)",
        backdropFilter: "blur(20px)",
        duration: 0.3
      });
    } else {
      gsap.to(header, {
        backgroundColor: "rgba(5, 5, 5, 0.9)",
        backdropFilter: "blur(12px)",
        duration: 0.3
      });
    }
    
    lastScroll = currentScroll;
  });
}

// Initialize all
export function initAnimations() {
  initHeroAnimations();
  initScrollReveals();
  initStaggerReveals();
  initCounters();
  initParallax();
  initMagneticButtons();
  initCardTilt();
  initHeaderScroll();
}
