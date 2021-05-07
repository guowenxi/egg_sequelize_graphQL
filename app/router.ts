import { Application } from 'egg';
export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/getConfig', controller.home.getConfig);
  router.post('/addConfig', controller.home.addConfig);
  router.get('/getTablesConfig', controller.home.getTablesConfig);
  router.post('/updateTables', controller.home.updateTables);
  // router.get('/graphql/test',graphql(schema, '{ hello }', root).then((response) => {
  //   console.log(response);
  // }));
};
