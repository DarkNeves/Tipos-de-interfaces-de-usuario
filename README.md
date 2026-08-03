# Tipos de Interfaces de Usuário

Site acadêmico estático sobre sete formas de interação entre pessoas e sistemas computacionais: GUI, CLI, interface orientada por menu, Touch UI, VUI, interface baseada em formulário e interface de linguagem natural.

O projeto foi desenvolvido para uma atividade em dupla. Cada tema possui uma página própria com definição, funcionamento, características, exemplos, vantagens, limitações, cuidados de acessibilidade e fonte científica.

## Objetivo da atividade

Pesquisar diferentes tipos de interface e apresentar o conteúdo em um site acessível, responsivo e pronto para publicação no GitHub Pages. A implementação considera HTML semântico, recomendações da WCAG 2.1 e características de qualidade da ISO/IEC 25010.

## Tecnologias utilizadas

- HTML5;
- CSS3;
- JavaScript puro;
- SVGs autorais locais.

Não há frameworks, bibliotecas externas, fontes remotas, APIs, banco de dados ou processo de build.

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
└── img/
    ├── if logo.png
    ├── favicon.svg
    ├── interface grafica.avif
    ├── foto-integrantes.svg
    ├── gui.svg
    ├── cli.svg
    ├── menu.svg
    ├── touch-ui.svg
    ├── vui.svg
    ├── formulario.svg
    └── linguagem-natural.svg
```

## Como abrir o site localmente

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto.
3. Dê dois cliques em `index.html` ou abra o arquivo em um navegador moderno.

Como o site usa somente caminhos relativos e não depende de servidor, o conteúdo funciona diretamente pelo arquivo local.

## Dados acadêmicos

Os dados do trabalho estão reunidos em um único bloco compacto na capa de `index.html`:

- disciplina: Multimídia e Interação Humano-Computador;
- professor: Ricardo Jacauna;
- turma: MOD 4 — Noturno;
- integrantes: Israel Moreno e Andreia de Souza.

Não há campo de data da apresentação.

## Como substituir o logo e a foto dos integrantes

### Logo

O site utiliza a marca oficial local em `img/if logo.png`, uma única vez no cabeçalho de cada página. O favicon em `img/favicon.svg` é uma ilustração própria relacionada a interfaces e não modifica a marca institucional.

### Imagem da dupla

Substitua `img/foto-integrantes.svg` pela foto da dupla e atualize o caminho da imagem em `index.html`. Por exemplo, ao usar um arquivo JPEG:

```html
<img src="./img/foto-integrantes.jpg"
     width="1200"
     height="800"
     alt="Descrição objetiva dos dois integrantes presentes na foto">
```

Depois, atualize o crédito no `figcaption`.

## Sistema visual

O CSS usa um único sistema de cores, tipografia, espaçamentos e componentes para todas as páginas. O cabeçalho é fixo e compacto; as grades de interfaces usam três, duas ou uma coluna conforme a largura disponível; cards crescem apenas de acordo com seu conteúdo; e páginas internas adotam conteúdo flexível com menu “Nesta página” de largura controlada.

Os principais limites responsivos estão em 950px, 700px, 650px e 420px. Em telas estreitas e no zoom de 200%, o menu lateral passa para o fluxo do documento e as comparações são exibidas em uma coluna.

## Como criar o repositório

1. No GitHub, crie um repositório vazio.
2. Copie a URL fornecida.
3. No terminal, clone o repositório:

```bash
git clone URL-DO-REPOSITORIO
```

4. Copie os arquivos deste projeto para a pasta clonada.
5. Confirme as alterações com `git status`.

## Como trabalhar com branches

Cada integrante deve trabalhar em uma branch própria. Use um nome curto que identifique a tarefa:

```bash
git checkout -b nome-do-integrante-paginas
```

Antes de começar outra tarefa, confirme em qual branch está com `git branch`. Evite que duas pessoas alterem simultaneamente as mesmas linhas para reduzir conflitos.

Cada integrante deve:

- trabalhar em sua própria branch;
- criar seus próprios commits;
- enviar as alterações pelo próprio perfil do GitHub;
- abrir pelo menos um pull request;
- participar da revisão do pull request de outro integrante.

## Como criar commits

Revise os arquivos modificados e adicione as alterações:

```bash
git add .
```

Crie um commit com uma mensagem objetiva:

```bash
git commit -m "Adiciona páginas sobre tipos de interfaces"
```

Envie a branch para o GitHub:

```bash
git push -u origin nome-do-integrante-paginas
```

Prefira commits pequenos, com uma única finalidade, e sempre teste o site antes de enviar.

## Como abrir pull requests

1. Envie a branch para o GitHub.
2. Abra o repositório no navegador.
3. Clique em **Compare & pull request**.
4. Confirme que a branch de destino é `main`.
5. Escreva um título e descreva o que foi alterado e testado.
6. Solicite a revisão de outro integrante.
7. Corrija os pontos observados antes de concluir a integração.

Cada pessoa deve revisar ao menos um pull request de outro integrante, verificando conteúdo, links, ortografia, responsividade e acessibilidade.

## Como ativar o GitHub Pages

1. Abra o repositório no GitHub.
2. Acesse **Settings**.
3. Acesse **Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main`.
6. Selecione a pasta `/root`.
7. Clique em **Save**.
8. Aguarde a geração da URL pública.

O endereço terá este formato:

```text
https://nome-do-usuario.github.io/nome-do-repositorio/
```

Todos os caminhos internos são relativos, portanto o site permanece funcional quando publicado em um subdiretório do GitHub Pages.

## Como testar acessibilidade

Faça os testes em mais de um navegador e, quando possível, use uma ferramenta automática apenas como apoio à revisão manual.

1. Use `Tab` e `Shift + Tab` para percorrer todos os links e botões.
2. Confirme que o link **Pular para o conteúdo principal** aparece ao receber foco.
3. Verifique se o foco amarelo é sempre visível.
4. Aumente o zoom do navegador para 200% e confira se nada fica cortado.
5. Teste larguras de celular, tablet e computador nas ferramentas de desenvolvedor.
6. Desative o JavaScript e confirme que todo o conteúdo continua disponível.
7. Use um leitor de tela, como NVDA, VoiceOver ou Narrador, para conferir títulos, links e textos alternativos.
8. Use Lighthouse, axe DevTools ou WAVE para localizar problemas adicionais.
9. Valide o HTML no serviço de validação do W3C.
10. Ative a preferência de movimento reduzido do sistema e verifique o botão de retorno ao topo.

## Checklist antes da entrega

- [x] Todos os dados acadêmicos foram preenchidos.
- [x] A marca oficial foi aplicada sem repetição na capa.
- [x] O favicon local foi adicionado a todas as páginas.
- [x] A capa possui uma ilustração compacta da dupla.
- [x] O texto alternativo e o crédito da ilustração foram conferidos.
- [ ] Cada integrante trabalhou em uma branch própria.
- [ ] Cada integrante enviou commits pelo próprio perfil.
- [ ] Cada integrante abriu ao menos um pull request.
- [ ] Cada integrante revisou o trabalho de outra pessoa.
- [x] Todos os caminhos internos e atributos de segurança dos links externos foram testados.
- [x] Todas as páginas abrem corretamente.
- [x] O link de salto e os botões foram testados com teclado.
- [x] O reflow equivalente ao zoom de 150% e 200% foi testado.
- [x] O site foi revisado de 320px a 1920px.
- [x] Não há rolagem horizontal nem conteúdo sobreposto.
- [ ] As referências e a data de acesso foram conferidas.
- [ ] O GitHub Pages está ativo e a URL pública funciona.

## Licença

Este projeto é disponibilizado sob a licença MIT. Consulte o arquivo `LICENSE`.
