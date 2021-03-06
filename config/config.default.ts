import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

//暂不支持使用
// exports.的方式

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1590712030995_1592';

  // add your egg config in here
  config.middleware = ['graphql'];

  //是否关闭安全检查  false 为关闭
  config.security={
    xframe:{
      enable: false,
    },
    csrf:{
      enable: false,
    },
  };
  // add your special config in here
  // const bizConfig = {
  //   sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  // };

  //处理跨域问题 使用egg-cors 插件
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  // config.middleware = ['graphql'];


  const sequelize = {
    dialect: 'mysql',   // 数据库类型，支持 mysql，sqlite,mssql,pgsql,oracle。
    host: "127.0.0.1",  // 数据库服务器地址。
    port: 3306, // 数据库连接端口号。
    database: "database", // 数据库名称。
    username: "root",   // 数据库登录用户名。
    password: "root",   // 数据库登录密码。
    define: {
        freezeTableName: true, // Model 对应的表名将与model名相同。
        timestamps: false // 默认情况下，Sequelize会将createdAt和updatedAt的属性添加到模型中，以便您可以知道数据库条目何时进入数据库以及何时被更新（ 确实是太方便了，然而我们一般用不到 ....）。
    }
  };
  const swaggerdoc = {
    dirScanner: './app/controller', // 配置自动扫描的控制器路径。
    // 接口文档的标题，描述或其它。
    apiInfo: {
        title: '接口文档',  // 接口文档的标题。
        description: '文档描述',   // 接口文档描述。
        version: '1.0.0',   // 接口文档版本。
    },
    schemes: ['http', 'https'], // 配置支持的协议。
    consumes: ['application/json'], // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html。
    produces: ['application/json'], // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回。
    securityDefinitions: {  // 配置接口安全授权方式。
    },
    enableSecurity: false,  // 是否启用授权，默认 false（不启用）。
    // enableValidate: true,    // 是否启用参数校验，默认 true（启用）。
    routerMap: true,    // 是否启用自动生成路由，默认 true (启用)。
    enable: true,   // 默认 true (启用)。
  };
  

  /* 
  const graphql = {
    router: '/graphql',
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
    // 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
    graphiql: true,
    //是否设置默认的Query和Mutation, 默认关闭
    defaultEmptySchema:true,
    // graphQL 路由前的拦截器
    onPreGraphQL: function* (ctx) {},
    // 开发工具 graphiQL 路由前的拦截器，建议用于做权限操作(如只提供开发者使用)
    onPreGraphiQL: function* (ctx) {},
    // apollo server的透传参数，参考[文档](https://www.apollographql.com/docs/apollo-server/api/apollo-server/#parameters)
    apolloServerOptions: {
      // rootValue,
      // formatError,
      // formatResponse,
      // mocks,
      // schemaDirectives,
      // introspection,
      // playground,
      // debug,
      // validationRules,
      // tracing,
      // cacheControl,
      // subscriptions,
      // engine,
      // persistedQueries,
      // cors,
    }
  };

 */

  // the return config will combines to EggAppConfig
  return {
    ...config,
    // ...bizConfig,
    sequelize,
    swaggerdoc,
    // graphql
  };
};
