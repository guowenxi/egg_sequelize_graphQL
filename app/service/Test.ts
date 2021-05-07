import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {
  constructor(ctx) {
    super(ctx); // 调用父对象上的函数。
    // this.database = this.app.model.Classs;// 获取 model 下的表（ model 相当于数据库的表 ）。
    // _this.tableName = 'classs'; // 数据库表名。
  }
  public async test() {
    // this
    const result = await this.app.model.Classs.findByPk(1); // sequelize 内置查询方法。
    return result;
  }
}
