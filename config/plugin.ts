import { EggPlugin } from 'egg';

//配置包名
const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  graphql:{
    enable: true,
    package: 'egg-graphql',
  },
  swaggerdoc:{
    enable: true,   // 是否启用。
    package: 'egg-swagger-doc', // 指定包名称。
  },
  sequelize:{
    enable: true,   // 是否启用。
    package: 'egg-sequelize', // 指定包名称。
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  }

};

export default plugin;
