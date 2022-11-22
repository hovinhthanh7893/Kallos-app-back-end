$ npm init -y

$ touch .gitignore

> .gitignore> add: /node_modules

$ npm install sequelize sequelize-cli

$ npm install pg

$ npx sequelize-cli init

> config>config.json> change:
> "development": {
> "url": "ElephantSQL link",
> "dialect": "postgres"
> },

> models>index.js> change:
> line16> sequelize = new Sequelize(config.url, config);

$ npm install express

$ npm install cors

$ npm install bcrypt

$ npm install jsonwebtoken

$ git push -u origin main

$ npx sequelize-cli model:generate --name ABC123 --attributes ABC123:string,ABC123:integer,ABC123:boolean

$ npx sequelize-cli seed:generate --name ABC123

$ npx sequelize-cli migration:generate --name ABC123

$ npx sequelize-cli db:migrate

$ npx sequelize-cli db:seed:all

$ npx sequelize-cli db:migrate:undo:all

$ npx nodemon index.js
