module.exports =function check(str, bracketsConfig) {
    // your solution
    const collection=new Map()
    bracketsConfig.forEach(mas=>{
        collection.set(mas[0],mas[1])
    })
    const masStr=str.split('');
    let result=[];
    let flag=true;
    masStr.forEach(item=>{
        if(collection.get(item)!==undefined && collection.get(item)!==item){
            result.push(item)
        }
        else if(collection.get(item)!==undefined && collection.get(item)===item){
            if(result.length===0 || result[result.length-1]!==item){
                result.push(item)
            }
            else if(item===result[result.length-1]){
                result.pop()
            }
            else {
                flag=false;
            }
        }
        else {
            if(result.length===0){
                flag = false;
            }
            if(collection.get(result.pop())!==item){
                flag = false;
            }
        }
    })
    if(result.length>0) return false;
    return flag;
}
/*
const config1 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const str='111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222'
console.log(check(str, config1));

 */
