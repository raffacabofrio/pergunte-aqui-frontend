# pergunte-aqui-frontend

Frontend desenvolvido com Vue e Material Design para o app pergunte aqui. É um projeto simples para mostrar conceitos importantes no desenvolvimento de software.

- Simplicidade.
- Robustez.
- Componentes puros.
- Programação funcional.
- Histórico do git em sequência lógica e educativa.

# Como rodar o projeto?

Antes de rodar, execute o backend. Instruções no github [pergunte-aqui-backend](https://github.com/raffacabofrio/pergunte-aqui-backend). Depois siga os passos abaixo:

```bash
# copie o ".env.example" para ".env"

# instale as dependências
$ npm install

# rode o app, e abra no seu navegador localhost:3000
$ npm run dev


```

# Stack

- [Vue.JS](https://vuejs.org/) UI rendering ([tutorial](https://vuejs.org/v2/guide/))
- [Nuxt.JS](https://nuxtjs.org/) configuração e boottraping ([udemy course](https://www.udemy.com/nuxtjs-vuejs-on-steroids/))
- [Vuetify](https://vuetifyjs.com/pt-BR/) Material Design Components ([api explorer](https://vuetifyjs.com/pt-BR/components/api-explorer))
- [Axios](https://github.com/axios/axios) HTTP client fácil de usar([nuxt plugin](https://axios.nuxtjs.org/))
- [Express](http://expressjs.com/) para SSR ([docs](http://expressjs.com/en/4x/api.html))
- [Webpack](https://webpack.js.org/) Para gerar os artefatos ([docs](https://webpack.js.org/concepts/))

# Tools/ plugins

Recomendo o [VSCode](https://code.visualstudio.com/) com os seguintes plugins:

- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Vuetifyjs](https://marketplace.visualstudio.com/items?itemName=vuetifyjs.vuetify-vscode)

# Coisas que podem melhorar

Não tive muito tempo e priorizei a entrega mínima e demonstrar domínio do assunto. O app é realmente simples, sendo o MVP mesmo. Entretanto gostaria de registrar alguns pontos que me incomodam um pouco, e que gostaria de melhorar:

- Uso de stores e suporte ao PWA. Permitindo que esse app tenha uma experiência offline e possa ser disponibilizado no Google Play.
- Escrever os testes unitários e incluir o husky pre-commit. Fail fast.
- Usar typescript no front e modelar os models mais adequadamente.
- Criar um slug pra url amigáveis. O id está feio.
