# Módulo 05

```
yarn create react-app modulo05
```

- Cria tudo sem precisarmos configurar o babel e o webpack
- O babel e o webpack ficam "dentro" do react-script
- o script eject ejeta as configurações do babel e webpack e é necessário para se precisarmos configurar algo mais a fundo
- o src/serviceWorker.js e public/manifest.json são arquivos exclusivos para construção de PWAs


```
yarn add eslint -D
yarn eslint --init
```
- 3o opção
- JavaScript modules (import/export)
- React
- N
- Browser
- Use a popular style guide
- Airbnb
- JavaScript
```
yarn
```

-----------------------------

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

Diego falou para instalar o babel-eslint, mas não é pq já vem o Creat App.

## Rotas
```
yarn add react-router-dom
```

- **rfc:** criar um componente de função com os snippets da RockSeat

## Styled Components
```
yarn add styled-components
```
Vários benefícios. Quais?
Quando a app vai crescendo, isso vai ficando meio problemático. Quando um css está estilizando um h1, ele estiliza todos os h1s, não só o do componente. o Styled Component permite que o css seja só DO COMPONENTE.

É bom ter a extensão vscode-styled-components instalada p/ que o vscode entenda a syntax

Mais vantagens:
- propriedades do js
- encadeamento

----------------------------

Estilos globais
