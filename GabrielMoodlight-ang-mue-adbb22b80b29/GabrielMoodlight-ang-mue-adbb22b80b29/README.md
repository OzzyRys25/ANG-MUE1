# +1 Esportes
## Sua plataforma para encontros esportivos

### Tecnologia
 **Framework:** Angular 13 com TypeScript
 
### Instalação Inicial
Garanta que o repositório está clonado corretamente.

Em seguida, acesse a branch `develop` para entrar no fluxo de desenvolvimento.

Rode o comando `npm install` para instalar todas as dependências do projeto.

Uma vez instalado, o seu ambiente local estará pronto para desenvolvimento.

### Gitflow
Usamos o gitflow com base em features.

##### Branchs
`main`: Nossa branch principal, que irá para produção. Nessa branch, somente releases e features concluídas podem existir.

`develop`: Nossa branch de desenvolvimento, que irá consolidar todas as nossas features e formar nossas releases.

`feature/MUE-**`: As branchs feature são as que utilizaremos para desenvolver a nossa aplicação, com base na feature que estamos atuando.
Para ver nossas features, acesse nosso [Jira](https://maisumesportes.atlassian.net/).

##### Observações
 - Jamais utilize a branch `main` ou `develop` para desenvolver suas features. Nessas branchs, só é permitido [Pull Request](https://medium.com/luizalabs/pull-merge-requests-seguindo-boas-pr%C3%A1ticas-8a7bbbad0ea7).
 - Nunca se esqueça de abrir a sua feature com base na `develop`. Ao terminar, abra um Pull Request para a `develop` e aguarde aprovação.
 - Utilize o prefixo `MUE-**` nos commits para referenciar a feature que está atuando.

 
### Servidor de desenvolvimento
Rode o comando `ng serve` ou `npm start` para iniciar o servidor de desenvolvimento.
Navegue para `http://localhost:4200/`. A aplicação irá recarregar automaticamente quando você alterar algum arquivo.

### Scaffold
Rode o comando `ng generate component nome-do-componente` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.
Como alternativa, o comando `ng g c|d|p|s|g|i|e|m` também pode ser usado.

### Build
Rode o comando `ng build` ou `npm run build` para buildar o projeto. Os artefatos da build vão ser armazenados na pasta `dist/`. Use o marcador `--prod` no comando para buildar para produção.


#### Dúvidas/Sugestões
contato@gabrieldeveloper.com