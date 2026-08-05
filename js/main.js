(() => {
  "use strict";

  const limiteMovel = window.matchMedia("(max-width: 760px)");
  const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");
  const botaoMenu = document.querySelector(".botao-menu");
  const menu = botaoMenu
    ? document.getElementById(botaoMenu.getAttribute("aria-controls"))
    : null;
  const cabecalho = document.querySelector(".site-header");
  const botaoTopo = document.querySelector("[data-back-to-top]");
  const linkPular = document.querySelector(".pular-conteudo");

  const iniciarScrollSuave = () => {
    if (
      reduzirMovimento.matches ||
      typeof window.Lenis !== "function" ||
      window.siteLenis
    ) {
      return;
    }

    window.siteLenis = new window.Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.1,
      wheelMultiplier: 0.9,
      syncTouch: false,
      anchors: true
    });
  };

  const sincronizarPreferenciaDeMovimento = () => {
    if (reduzirMovimento.matches) {
      window.siteLenis?.destroy();
      delete window.siteLenis;
      return;
    }

    iniciarScrollSuave();
  };

  iniciarScrollSuave();
  reduzirMovimento.addEventListener?.("change", sincronizarPreferenciaDeMovimento);

  const definirEspacoDoMenu = () => {
    if (!menu || !limiteMovel.matches || menu.hidden) {
      document.body.classList.remove("menu-movel-aberto");
      document.body.style.removeProperty("--altura-menu-movel");
      return;
    }

    document.body.style.setProperty("--altura-menu-movel", `${menu.offsetHeight}px`);
    document.body.classList.add("menu-movel-aberto");
  };

  const fecharMenu = ({ devolverFoco = false } = {}) => {
    if (!botaoMenu || !menu) {
      return;
    }

    botaoMenu.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
    cabecalho?.classList.remove("menu-aberto");

    if (limiteMovel.matches) {
      menu.hidden = true;
    }

    definirEspacoDoMenu();

    if (devolverFoco) {
      botaoMenu.focus();
    }
  };

  const abrirMenu = () => {
    if (!botaoMenu || !menu || !limiteMovel.matches) {
      return;
    }

    menu.hidden = false;
    menu.classList.add("is-open");
    cabecalho?.classList.add("menu-aberto");
    botaoMenu.setAttribute("aria-expanded", "true");
    definirEspacoDoMenu();
  };

  const sincronizarMenu = () => {
    if (!botaoMenu || !menu) {
      return;
    }

    if (limiteMovel.matches) {
      fecharMenu();
      return;
    }

    menu.hidden = false;
    menu.classList.remove("is-open");
    cabecalho?.classList.remove("menu-aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
    definirEspacoDoMenu();
  };

  if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", () => {
      const aberto = botaoMenu.getAttribute("aria-expanded") === "true";
      aberto ? fecharMenu() : abrirMenu();
    });

    menu.addEventListener("click", (event) => {
      if (limiteMovel.matches && event.target.closest("a")) {
        fecharMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && botaoMenu.getAttribute("aria-expanded") === "true") {
        fecharMenu({ devolverFoco: true });
      }
    });

    limiteMovel.addEventListener?.("change", sincronizarMenu);
    window.addEventListener("resize", definirEspacoDoMenu, { passive: true });
    sincronizarMenu();
  }

  if (botaoTopo) {
    const atualizarBotaoTopo = () => {
      const mostrar = window.scrollY > 500;
      botaoTopo.hidden = !mostrar;
      botaoTopo.classList.toggle("is-visible", mostrar);
    };

    botaoTopo.addEventListener("click", () => {
      if (window.siteLenis) {
        window.siteLenis.scrollTo(0);
        return;
      }

      window.scrollTo({
        top: 0,
        behavior: reduzirMovimento.matches ? "auto" : "smooth"
      });
    });

    window.addEventListener("scroll", atualizarBotaoTopo, { passive: true });
    atualizarBotaoTopo();
  }

  linkPular?.addEventListener("click", () => {
    const destino = document.querySelector(linkPular.hash);
    window.requestAnimationFrame(() => destino?.focus({ preventScroll: true }));
  });
})();
