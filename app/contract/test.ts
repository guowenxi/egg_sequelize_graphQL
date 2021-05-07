// Model名称:{
//     字段名称: { type: 字段类型，required: 字段必要性, example: 示例}
//   }
module.exports = {
  JsonBody: { // 这个名字对应上面 Controller 注释的@response 的 JsonBody。
      result: { type: 'string' }, // 服务器返回的数据。
  },
};