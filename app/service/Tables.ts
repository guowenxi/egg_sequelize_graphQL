import { Service } from 'egg';
// import { Op  } from 'sequelize';
/* 
Op 操作符
https://www.sequelize.com.cn/core-concepts/model-querying-basics
*/
import { resDataObj } from '../until/until';

/**
 * Config Service
 */
export default class Tables extends Service {
  constructor(ctx) {
    super(ctx); // 调用父对象上的函数。
    // this.database = this.app.model.Classs;// 获取 model 下的表（ model 相当于数据库的表 ）。
    // _this.tableName = 'classs'; // 数据库表名。
  }
  public async getTables() {

    const {  Tables, Columns   } = this.app.model;

    // Routerconfig.hasOne(Classs);
    //关联类型
    //    hasOne 包含  (找到单条匹配数据)
    // belongsTo 属于   (根据左侧表进行匹配右侧表数据进行关联,可建立层级关系)
    // hasMany 一对多 (找到所有的数据)
    // belongsToMany 多对多 (根据左侧表进行匹配右侧表数据进行关联,可建立层级关系) `

     // sourceKey(用于hasOne,hasMany,belongsToMany) targetKey 目标键(用于belongsTo,belongsToMany)
     // foreignKey 目标键设置的别名


     Tables.hasMany(Columns,{sourceKey:'id',foreignKey:'tableId'});
    //  Columns.belongsTo(Tables);
    //获取地址栏参数用query
    const bodyData = this.ctx.query;
    //使用include表示预先加载
    return await Tables.findAll({
      where:{moudleId:bodyData.moudleId}, //查找的效验方式
      attributes:{ exclude: ['id','moudleId'] },  //属性  exclude 为排除的属性数组
      include:[{
        model:Columns,
        attributes:{ exclude: ['id','tableId'] },//属性  exclude 为排除的属性数组
      }], //关联的表
    }).then( async (item)=>{
      if(!item){
        return resDataObj("未找到当前id",0);
      }else{
        return item;
      }
    })

  }
  public async updateTables() {
    const {  Columns }  = this.app.model;

    //获取body栏参数用body
    const { tableId ,columns } = this.ctx.request.body;

    //先删再增
    await Columns.destroy({
      where: {tableId:tableId}
    });
    //先查找是否存在对应数据,如果存在则不提交如果不存在则新增
    return await Columns.bulkCreate(
      JSON.parse(columns)
    ).then( async ()=>{
      return resDataObj("提交成功",1);
    })

  }
}
