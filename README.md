# Currículo Online — Gabriel Ceron Bianchi

Página web estática e interativa feita para a **Unidade I de Programação 4**.

## Arquivos

```
meu-curriculo/
├── index.html      # estrutura semântica da página
├── style.css       # estilos (flexbox, cores, hover, responsividade)
├── script.js       # interatividade em JavaScript
├── README.md
└── media/
    └── foto.svg    # imagem de perfil
```

## O que a página tem

**HTML5 semântico:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`,
`<figure>`, `<footer>`, título da página, `<h1>`, parágrafos, listas `<ul>`,
links `<a>` (e-mail, GitHub, LinkedIn), imagem com `alt` e `<figcaption>`, e
formulário com campos de nome e e-mail.

Seções: sobre, detalhes (oculta), habilidades, projetos, formação e
experiência, e contato.

**CSS3:** arquivo externo comentado e dividido em seções, layout com **Flexbox**
(menu, seção "sobre", habilidades, formulário), cores e fontes personalizadas,
efeitos `:hover` em links e botões, e responsividade com `@media (max-width: 600px)`.

**JavaScript:** arquivo externo com 5 funcionalidades:

1. Botão que exibe uma mensagem com `alert()`
2. Botão que mostra/esconde uma seção com `addEventListener` e `classList.toggle`
3. Formulário que pega o nome digitado e escreve uma saudação no topo com `innerText`
4. Contador de visitas salvo no `localStorage`
5. Gráfico de barras das habilidades desenhado no `<canvas>`

## Como testar no computador

Basta abrir o `index.html` com dois cliques no navegador.

## Como publicar na Vercel

### Opção 1 — arrastar a pasta (mais rápido, sem GitHub)

1. Crie uma conta grátis em [vercel.com](https://vercel.com).
2. No painel, clique em **Add New → Project**.
3. Escolha a opção de importar uma pasta (**Deploy from local / drag and drop**)
   e arraste a pasta `meu-curriculo`.
4. Não é preciso configurar nada: deixe o *framework* como **Other** e os campos
   de build em branco (é uma página estática).
5. Clique em **Deploy**. A Vercel gera um link do tipo
   `https://meu-curriculo.vercel.app`.

### Opção 2 — via GitHub (recomendado para entregar o link do repositório junto)

1. Crie um repositório novo no GitHub chamado `meu-curriculo`.
2. Dentro da pasta do projeto, rode:

```bash
git init && git add . && git commit -m "Currículo online - Unidade I"
```

3. Conecte ao repositório criado (troque `SEU-USUARIO`):

```bash
git remote add origin https://github.com/SEU-USUARIO/meu-curriculo.git && git branch -M main && git push -u origin main
```

4. Em [vercel.com](https://vercel.com), clique em **Add New → Project**,
   escolha **Import Git Repository** e selecione `meu-curriculo`.
5. Framework Preset: **Other**. Deixe *Build Command* e *Output Directory* em branco.
6. Clique em **Deploy**.

Depois de publicar, confira se a página abre pelo celular também.

## Personalizar

- **Trocar a foto:** coloque sua foto em `media/` e, no `index.html`, mude
  `src="media/foto.svg"` para o nome do seu arquivo (ex.: `src="media/foto.jpg"`).
- **Trocar os textos:** edite diretamente o `index.html` (nome, idade, formação, experiências).
- **Trocar as cores:** altere as variáveis no topo do `style.css` (`--ciano`, `--roxo`, etc.).
- **Trocar os níveis do gráfico:** edite o array `niveis` no final do `script.js`.
- **Links das redes:** atualize os `href` do GitHub e LinkedIn no `index.html`.
