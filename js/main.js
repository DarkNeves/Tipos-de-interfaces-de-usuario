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
  const linksInternos = document.querySelectorAll('a[href^="#"]');
  const controleScrollSuave = document.querySelector(".controle-scroll-suave");
  const chaveScrollSuave = "scroll-suave-desativado";
  let scrollSuaveDesativado = false;

  try {
    scrollSuaveDesativado = localStorage.getItem(chaveScrollSuave) === "true";
  } catch {
    scrollSuaveDesativado = false;
  }

  const iniciarScrollSuave = () => {
    if (
      reduzirMovimento.matches ||
      scrollSuaveDesativado ||
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

  const encerrarScrollSuave = () => {
    window.siteLenis?.destroy();
    delete window.siteLenis;
  };

  const atualizarControleScrollSuave = () => {
    if (!controleScrollSuave) {
      return;
    }

    controleScrollSuave.setAttribute(
      "aria-pressed",
      String(scrollSuaveDesativado)
    );
    controleScrollSuave.setAttribute(
      "aria-label",
      scrollSuaveDesativado
        ? "Ativar rolagem suave"
        : "Desativar rolagem suave"
    );
  };

  const sincronizarPreferenciaDeMovimento = () => {
    if (reduzirMovimento.matches) {
      encerrarScrollSuave();
      return;
    }

    iniciarScrollSuave();
  };

  iniciarScrollSuave();
  atualizarControleScrollSuave();
  reduzirMovimento.addEventListener?.("change", sincronizarPreferenciaDeMovimento);

  controleScrollSuave?.addEventListener("click", () => {
    scrollSuaveDesativado = !scrollSuaveDesativado;

    try {
      localStorage.setItem(chaveScrollSuave, String(scrollSuaveDesativado));
    } catch {
      // A preferência vale apenas para a página atual se o armazenamento falhar.
    }

    if (scrollSuaveDesativado) {
      encerrarScrollSuave();
    } else {
      iniciarScrollSuave();
    }

    atualizarControleScrollSuave();
  });

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

  linksInternos.forEach((link) => {
    link.addEventListener("click", () => {
      const idDestino = decodeURIComponent(link.hash.slice(1));
      const destino = document.getElementById(idDestino);

      if (!destino) {
        return;
      }

      const alvoDoFoco = destino.matches("main, h1, h2, h3")
        ? destino
        : destino.querySelector("h1, h2, h3") || destino;

      if (!alvoDoFoco.hasAttribute("tabindex")) {
        alvoDoFoco.setAttribute("tabindex", "-1");
      }

      window.requestAnimationFrame(() => {
        alvoDoFoco.focus({ preventScroll: true });
      });
    });
  });
})();
