import { Controller } from 'egg';

/**
 * @Controller app
 */

export default class HomeController extends Controller {
     /**
     * @summary 获取详情数据  根据ID查询信息。
     * @description 获取详情数据 根据ID查询信息。
     * @router get /getTablesConfig
     * @consumes applicatoin/json
     * @request query integer moudleId 需要去查新的ID。
    //  *  需要去查新的ID。（ get 对应 query 请求，请求值设定为 integer 纯数字类型，ID 为请求的字段，注意大小写，和下面的方法要一一对应，不然会报错 ）。
     * @response 200 JsonBody
    //  返回结果。（ 对应 contract 里面的验证属性，下面会提到 。）
     */

  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.test();
  }
  public async getConfig() {
    const { ctx } = this;
    ctx.body = await ctx.service.config.getConfig();
  }
  public async addConfig() {
    const { ctx } = this;
    ctx.body = await ctx.service.config.addConfig();
  }
  public async getTablesConfig() {
    const { ctx } = this;
    ctx.body = await ctx.service.tables.getTables();
  }
  public async updateTables() {
    const { ctx } = this;
    ctx.body = await ctx.service.tables.updateTables();
  }
}
