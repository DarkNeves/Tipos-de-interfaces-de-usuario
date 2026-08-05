# Tipos de Interfaces de Usuário

Site acadêmico estático sobre sete formas de interação entre pessoas e sistemas computacionais: GUI, CLI, interface orientada por menu, Touch UI, VUI, interface baseada em formulário e interface de linguagem natural.

O projeto foi desenvolvido para uma atividade em dupla. Cada tema possui uma página própria com definição, funcionamento, características, exemplos, vantagens, limitações, cuidados de acessibilidade e fonte científica.

## Objetivo da atividade

Pesquisar diferentes tipos de interface e apresentar o conteúdo em um site acessível, responsivo e pronto para publicação no GitHub Pages. A implementação considera HTML semântico, recomendações da WCAG 2.1 e características de qualidade da ISO/IEC 25010.

## Tecnologias utilizadas

- HTML5;
- CSS3;
- JavaScript puro;
- SVGs autorais locais;
- Lenis 1.3.25, armazenado localmente em `libs/lenis`.

Não há frameworks, fontes remotas, APIs, banco de dados ou processo de build. O Lenis é a única biblioteca de interface e não depende de CDN.

## Estrutura das pastas

```text
tipos-de-interfaces/
├── index.html
├── README.md
├── LICENSE
├── paginas/
│   ├── gui.html
│   ├── cli.html
│   ├── menu.html
│   ├── touch-ui.html
│   ├── vui.html
│   ├── formulario.html
│   ├── linguagem-natural.html
│   └── referencias.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── libs/
│   └── lenis/
│       ├── lenis.min.js
│       ├── lenis.css
│       └── LICENSE
└── img/
    ├── logo-ifrr.png
    ├── favicon.svg
    ├── interface-grafica.avif
    ├── interface-formulario.webp
    ├── fotos-integrantes.webp
    ├── gui.svg
    ├── cli.svg
    ├── menu.svg
    ├── touch-ui.svg
    ├── vui.svg
    ├── formulario.svg
    └── linguagem-natural.svg
```

Este projeto é disponibilizado sob a licença MIT. Consulte o arquivo `LICENSE`.
