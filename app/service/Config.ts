import { Service } from 'egg';
// import { Op  } from 'sequelize';
/* 
Op 操作符
https://www.sequelize.com.cn/core-concepts/model-querying-basics
*/
import { resDataObj,requiredKeys } from '../until/until';

/**
 * Config Service
 */
export default class Config extends Service {
  constructor(ctx) {
    super(ctx); // 调用父对象上的函数。
    // this.database = this.app.model.Classs;// 获取 model 下的表（ model 相当于数据库的表 ）。
    // _this.tableName = 'classs'; // 数据库表名。
  }
  public async getConfig() {

    const {  Routerconfig ,Tables, Columns   } = this.app.model;
// ,Detail ,Tables
    // Routerconfig.hasOne(Classs);
    //关联类型
    //    hasOne 包含  (找到单条匹配数据)
    // belongsTo 属于   ()
    // hasMany 一对多 (找到所有的数据)
    // belongsToMany 多对多 () `

     // sourceKey(用于hasOne,hasMany,belongsToMany) targetKey 目标键(用于belongsTo,belongsToMany)
     // foreignKey 目标键设置的别名


    Routerconfig.hasMany(Tables,{sourceKey:'moudleId',foreignKey:'moudleId'});
    // Routerconfig.hasMany(Columns,{sourceKey:'moudleId',foreignKey:'moudleId'});
    Tables.hasMany(Columns,{sourceKey:'moudleId',foreignKey:'moudleId'});
    // Classs.belongsTo(Routerconfig);
    //获取地址栏参数用query
    const bodyData = this.ctx.query;
    //使用include表示预先加载
    //还有个方法叫getxxx(tableName) 表示延迟加载 只在查询的时候进行查询
    /*
        const router  = await Routerconfig.findOne({
      where:{id:bodyData.id},
      include:Classs
    }).then( async (item)=>{
      if(!item){
        return resDataObj("未找到当前id",0);
      }else{
        return item;
      }
    })
    const Classs  = await  router.getClasss();
    */

    return await Routerconfig.findOne({
      where:{id:bodyData.id}, //查找的效验方式
      // attributes:{ exclude: ['id'] },  //属性  exclude 为排除的属性数组
      include:[Tables], //关联的表
    }).then( async (item)=>{
      if(!item){
        return resDataObj("未找到当前id",0);
      }else{
        return item;
      }
    })

  }
  public async addConfig() {
    const _dataList  = this.app.model.Routerconfig;
    //获取body栏参数用body
     const bodyData = this.ctx.request.body;
    var errData = requiredKeys(bodyData,{TITLE:"标题"});
    if(errData){
      return errData;
    }
    //先查找是否存在对应数据,如果存在则不提交如果不存在则新增
    return await _dataList.findOne({where:{TITLE:bodyData.TITLE}}).then( async (item)=>{
      if(!item){
        //create 创建
        //bulkCreate 批量创建
        //可在create 内添加字段 { fields: ['xxx'] } fields只可更改所列的字段
        return await _dataList.create({...bodyData}).then( async()=>{
          return resDataObj("提交成功",1);
        })
      }else{
        return resDataObj("已存在,请勿重复提交",0);
      }
    })

  }
}
