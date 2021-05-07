import { Controller } from 'egg';
/**
 * @Controller app
 */

export default class GraphqlController extends Controller {

  public async test() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.test();
  }

}
