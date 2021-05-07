
//默认返回带title的对象
export const resDataObj = function(txt : string ,state : number){
    return {
        success:state !=null ? state : 1,
        title:txt ? txt : 'success',
        data:null
    }
}
//对字段进行筛选,查找必填字段
//只针对单个字段进行筛选,不过则返回
//数据  验证字段和返回的中文字段
export const requiredKeys = function(data,requiredList){
    var null_keys;

    for(var key in requiredList){
        if(!data[key]){
            null_keys = requiredList[key];
            break;
        }
    }
    if(null_keys){
        return resDataObj(`请输入${null_keys}`,0)
    }else{
        return null;
    }
}