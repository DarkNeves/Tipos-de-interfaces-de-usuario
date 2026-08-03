(() => {
  "use strict";

  const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");
  const dispositivoTouch = window.matchMedia("(pointer: coarse)");
  const backToTopButton = document.querySelector("[data-back-to-top]");
  const skipLink = document.querySelector(".pular-conteudo");
  let lenis = null;
  let avisoLenisAusenteExibido = false;

  const destruirLenis = () => {
    if (lenis) {
      lenis.destroy();
      lenis = null;
    }

    document.documentElement.classList.remove("lenis-ativo");
  };

  const configurarRolagem = () => {
    destruirLenis();

    if (reduzirMovimento.matches || dispositivoTouch.matches) {
      return;
    }

    if (typeof Lenis === "undefined") {
      if (!avisoLenisAusenteExibido) {
        console.warn("Lenis não carregado. Scroll nativo mantido.");
        avisoLenisAusenteExibido = true;
      }
      return;
    }

    try {
      lenis = new Lenis({
        autoRaf: true,
        smoothWheel: true,
        syncTouch: false,
        lerp: 0.12,
        wheelMultiplier: 0.9,
        orientation: "vertical",
        gestureOrientation: "vertical",
        anchors: {
          duration: 0.8
        },
        overscroll: false,
        stopInertiaOnNavigate: true
      });
      document.documentElement.classList.add("lenis-ativo");
    } catch (error) {
      destruirLenis();
      console.warn("Não foi possível iniciar o Lenis. Scroll nativo mantido.", error);
    }
  };

  if (backToTopButton) {
    const updateBackToTopVisibility = () => {
      const shouldShow = window.scrollY > 500;
      backToTopButton.hidden = !shouldShow;
      backToTopButton.classList.toggle("is-visible", shouldShow);
    };

    backToTopButton.addEventListener("click", () => {
      if (lenis) {
        lenis.scrollTo(0);
        return;
      }

      window.scrollTo({
        top: 0,
        behavior: reduzirMovimento.matches ? "auto" : "smooth"
      });
    });

    window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
    updateBackToTopVisibility();
  }

  if (skipLink) {
    skipLink.addEventListener("click", () => {
      const target = document.querySelector(skipLink.hash);
      target?.focus({ preventScroll: true });
    });
  }

  configurarRolagem();
  reduzirMovimento.addEventListener?.("change", configurarRolagem);
  dispositivoTouch.addEventListener?.("change", configurarRolagem);
})();
